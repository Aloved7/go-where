<template>
    <div>
        <header-child :city="city"></header-child>
        <swiper-child :list="swiperList"></swiper-child>
        <icon-child :list="iconList"></icon-child>
        <rec-child :list="recList"></rec-child>
        <weekend-child :list="weekendList"></weekend-child>
    </div>
</template>

<script>
import HeaderChild from './components/Header-child.vue'
import SwiperChild from './components/swiper-child.vue'
import IconChild from './components/icon-child.vue'
import RecChild from './components/rec-child.vue'
import WeekendChild from './components/weekend-child.vue'
import axios from 'axios'
    export default {
        name:"HomeView",
        data(){
            return {
                city:'',
                swiperList:[],
                iconList:[],
                recList:[],
                weekendList:[]
            }
        },
        components:{HeaderChild,SwiperChild,IconChild,RecChild, WeekendChild},
        methods:{
            getHomeInfo(){
                axios.get('api/index.json')
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if(res.ret && res.data ){
                    this.city = res.data.city
                    this.swiperList = res.data.swiperList
                    this.iconList = res.data.iconList
                    this.recList = res.data.recommendList
                    this.weekendList = res.data.weekendList
                    // console.log(this.city)
                }
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style lang="scss" scoped>

</style>