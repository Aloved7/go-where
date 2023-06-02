<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-warper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "weekend-child",
    props:['list']
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height: .8rem
    background: #eee
    text-indent:.2rem
.item-img-warper
    overflow: hidden
    height: 0
    padding-bottom: 33.9% 
    .item-img
        width 100%
.item-info
    flex:1
    padding: .1rem
    min-width: 0
    .item-title
        ellipsis()
        line-height: .54rem
        font-size: .32rem
    .item-desc
        ellipsis()
        line-height: .4rem
        color: #ccc
</style>