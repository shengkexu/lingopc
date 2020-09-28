<template>
  <div class="">
    <Loading v-if="loading"/>
    <Menu/>
    <div class="caseCon" ref="homeCon">
      <div class="logo">
        <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
      </div>
      <div class="bigShowCon" @click="gotoDetail()" v-if="thumbArray.length !== 0">
        <div class="test1">
          <div class="caseConUpCon1">
            <p class="caseNumWordConP">NO.<span :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>{{thumbArray.length/2}}</span></p>
          </div>
          <div class="caseConUpCon2">
            <img class="caseLogo" :class="{'ani' : isRotate}" :src="thumbArray[currentContentIndex].logoB" alt="">
          </div>
          <div class="caseConUpCon3">
            <p class="caseDesc" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].desc}}</p>
          </div>
        </div>
        <img class="caseImg" :src="thumbArray[currentContentIndex].bcImg" alt="bcImg" :class="{'changePosition' : isRotate}">
        <div class="imgBack" ref="imgBack"></div>
      </div>

        <!-- <img src="../assets/design.gif" alt="design" class="gifImg"> -->
      <div class="caseTitleCon" v-if="thumbArray.length !== 0">
        <p class="caseTitle" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].name}}</p>
        <p class="thumbTitle">点击查看详情<i class="iconfont thumbArrow">&#xe656;</i></p>
      </div>

      <div class="thumbCon" v-if="thumbArray.length !== 0">
        <div class="thumbLine"></div>
        <div class="thumbConS">
          <img v-if="!isRotate" class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
          <img v-if="isRotate" class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index">
        </div>
        <div class="thumbLine"></div>
      </div>
    </div>
  </div>

</template>

<script>
import thumbArrayTest from '../utils/homeContent.js'
import homeImg from '../utils/homeImage.js'
// import imageArray from '../utils/homeContent.js'
import Menu from '../components/Menu.vue'
import Loading from '../components/Loading.vue'
export default {
    name: 'Home',
    components: {
    Menu,
    Loading,
  },
  data(){
    return{
      loading: true,
      isRotate: false,
      isColor: false,
      thumbStyle: {},
      currentIndex: 8,
      currentContentIndex: 8,
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.innerHeight,
      thumbArrayS: [],
      thumbArray: thumbArrayTest,
      homeImgArray: homeImg,
    }
  },
  methods:{
    changePosition: function(){
      if(this.isRotate == true){
        console.log('antialiased')
      }else{
        this.isRotate = true
        this.isColor = true
        setTimeout(()=>{
          this.isRotate = false
          this.isColor = false
        },1000)
      }
    },
    clickThumb: function(index){
      if(index == this.currentIndex){
        this.isRotate = false
        // console.log('all right')
      }else{
        console.log(index)
        this.currentIndex = index
        var currentWidth = this.screenWidth/2 - 50 - index*100 + 'px'
        console.log(currentWidth)
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + currentWidth + ", 0)"
        }
        setTimeout(()=>{
          this.currentContentIndex = this.currentIndex
          this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
        },500)

        if(this.isRotate == true){
          console.log('antialiased')
        }else{
          this.isRotate = true
          this.isColor = true
          setTimeout(()=>{
            this.isRotate = false
            this.isColor = false
          },1500)
        }
      }
    },
    onResize(){
      this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      this.screenWidth = document.body.clientWidth
    },
    gotoDetail(){
      if(this.isRotate == false){
        this.$router.push({
          path: `/case/${this.thumbArray[this.currentContentIndex].id}`
        })
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      var that = this
      // loading判定
      console.log(that.thumbArray == undefined)
      if(that.homeImgArray.length !== 0){
        var loaded = 0
        var array = that.homeImgArray
        var aaa = []
        //console.log(array)

        for(var i=0; i<array.length; i++){
          aaa[i] = new Image()
          aaa[i].src = array[i]
          aaa[i].onload = function(){
            //一张加载完成
            loaded = loaded+1
            if(loaded == 18){
              that.loading = false
            }
          }
        }



        //console.log(iii)
        // if(loaded == array.length){
        //   alert('sds')
        // }
        //alert(loaded)
      }else{
        console.log('ddddd')
      }



      window.addEventListener('resize', that.onResize);
      that.currentContentIndex = that.currentIndex
      this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
      var currentWidth = that.screenWidth/2 - 50 - that.currentIndex*100 + 'px'
      that.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
      that.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight

      var heightString = (that.screenHeight).toString()
      console.log(heightString)
      that.$refs.homeCon.style.height = heightString + 'px'
      //this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      //this.$refs.homeCon.style.height = this.screenHeight.toString()
    })
  },
  beforeUnmount(){
    window.removeEventListener('resize', this.onResize);
  },
  watch: {
    screenWidth(val){
      this.screenWidth = val
      // console.log(this.screenWidth)
      var currentWidth = val/2 - 50 - this.currentIndex*100 + 'px'
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
    },
    screenHeight(val){
      this.screenHeight = val
      var heightString = val.toString()
      //console.log(heightString)
      this.$refs.homeCon.style.height = heightString + 'px'
      //console.log(val.toString())
    }
  }
}
</script>

<style scoped>

</style>
