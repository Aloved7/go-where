<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-bottom">当前城市</div>
                <div class="button-list">
                    <div class="button-warper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-bottom">热门城市</div>
                <div class="button-list">
                    <div class="button-warper" v-for="item of hot" :key="item.id">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-bottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: "list-child",
    props:['hot','cities','letter'],
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
        &:brfore
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:brfore
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top:1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size:.26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-warper
                width 33.33%
                float: left
                .button
                    padding: .1rem 0
                    margin: .1rem
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>