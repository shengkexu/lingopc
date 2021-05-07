<template>
  <div id="app">
    <Loading v-bind:percentage="percentage" v-if="loading"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/">asd</router-link>
    <router-link to="/case">case</router-link> -->
    <!-- <Home/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Loading from './components/Loading.vue'
import homeImg from './utils/homeImage.js'
//import HelloWorld from './components/HelloWorld.vue'
//import Home from './pages/home.vue'
// import Case from './pages/case.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Home
    Loading
  },
  data(){
    return{
      homeImgArray: homeImg,
      loading: true,
      percentage: 0
    }
  },
  methods:{
    ...mapActions(['changeLoadingState']),
    closeLoading(){
      this.loading = false
    }
  },
  mounted(){
    this.$nextTick(()=>{
      var that = this
      // loading判定
      console.log(that.thumbArray == undefined)
      if(that.homeImgArray.length !== 0){
        var loaded = 0
        var array = that.homeImgArray
        var aaa = []
        console.log(array.length)

        for(var i=0; i<array.length; i++){
          aaa[i] = new Image()
          aaa[i].src = array[i]
          aaa[i].onload = function(){
            //一张加载完成
            loaded = loaded+1
            that.percentage = parseInt(loaded/array.length*100)
            console.log(that.percentage)
            if(loaded/array.length >= 0.97){
              //that.loading = true
              that.closeLoading()
              that.changeLoadingState()
            }
          }
        }
      }else{
        console.log('ddddd')
      }
    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
