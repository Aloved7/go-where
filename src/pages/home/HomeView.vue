<template>
    <div>
        <header-child></header-child>
        <swiper-child></swiper-child>
    </div>
</template>

<script>
import HeaderChild from './components/Header-child.vue'
import SwiperChild from './components/swiper-child.vue'
    export default {
        name:"HomeView",
        components:{HeaderChild,SwiperChild}
    }
</script>

<style lang="scss" scoped>

</style>