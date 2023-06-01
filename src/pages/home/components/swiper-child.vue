<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="swiper-img"
                    src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
                    alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img"
                    src="//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_350x240_51cc03a3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "swiper-child",
    data() {
        return {
            swiperOption: {
                pagination:'.swiper-pagination'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    overflow:hidden 
    width 100%
    height 150px
    padding-bottom: 31.25%
    .swiper-img
        width: 100%
        height: 200px
        width :640px
</style>