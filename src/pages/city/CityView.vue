<template>
<div>
    <city-child></city-child>
    <search-child :cities="cities"></search-child>
    <list-child :cities="cities" :hot="hotCities" :letter="letter"></list-child>
    <alpha-child :cities="cities" @change="handleLetterChange"></alpha-child>
</div>
</template>

<script>
import CityChild from './components/header-child.vue'
import SearchChild from './components/search-child.vue'
import ListChild from './components/list-child.vue'
import AlphaChild from './components/alpha-child.vue'
import axios from 'axios'
    export default {
        name:"CityView",
        components:{CityChild,SearchChild,ListChild,AlphaChild},
        data(){
            return {
                cities:{},
                hotCities:[],
                letter:""
            }
        },
        methods:{
            getCityInfo(){
                axios.get('api/city.json')
                .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res){
                // console.log(res)
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            handleLetterChange(letter){
                this.letter = letter
            }
        },
        mounted(){
           this.getCityInfo() 
        }
    }   
</script>

<style lang="scss" scoped>

</style>