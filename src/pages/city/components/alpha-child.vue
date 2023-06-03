<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart"
            @touchend="handleTouchEnd" @touchmove="handleTouchMove" :ref="item">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    name: 'alpha-child',
    props: ['cities'],
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
        // 为什么使用updated 这个钩子函数 因为alpha 获取的cities 是由ajax 去请求的 也就是说刚开始是一个空对象
        // 直到 ajax 请求完成之后 更新数据 才会将数据展示出来 此后将不再更新 所以 再updated 内部进行计算整整好
    },
    computed: {
        letters() {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart() {
            this.touchStatus = true
        },
        handleTouchMove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // const startY = this.$refs['A'][0].offsetTop
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd() {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content:  center
        position: absolute
        right: 0
        top 1.58rem
        bottom: 0
        width .4rem
        .item
            text-align: center
            line-height: .4rem
            color: $bgColor
</style>