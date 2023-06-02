<template>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- 我们可以看到 轮播图出现的时候是第四章图 这是因为 当使用swiper 实例化swiper的时候 axios 里的数据还没有请求成功
        也就是说 传进来的swiperList 是一个空数组 所以是没有进行渲染的 直到获取axios中的数据 才开始渲染 -->
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeSwiper',
    props: ['list'],
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
  </script>
  
  <style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 31.25%
      background: #eee
      .swiper-img
        width: 100%
  </style>
  