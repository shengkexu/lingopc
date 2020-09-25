<template>
  <div class="" v-loading="loading">
    <Menu/>
    <div class="caseCon" ref="homeCon">
      <div class="logo">
        <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
      </div>
      <div class="bigShowCon" @click="gotoDetail()">
        <div class="test1">
          <div class="caseConUpCon1">
            <p class="caseNumWordConP">NO.<span :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>6</span></p>
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
      <div class="caseTitleCon">
        <p class="caseTitle" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].name}}</p>
        <p class="thumbTitle">View Detail<i class="iconfont thumbArrow">&#xe656;</i></p>
      </div>

      <div class="thumbCon">
        <div class="thumbLine"></div>
        <div class="thumbConS">
          <img class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
        </div>
        <div class="thumbLine"></div>
      </div>
    </div>
  </div>

</template>

<script>
import Menu from '../components/Menu.vue'
import xibei from '../assets/caseThumb/xibeilogo.png'
// import xibeiMain from '../assets/caseMain/xibei/xibeiMain.png'
import xibeiMain from '../assets/test/xibei.png'
import xibeiB from '../assets/caseMain/xibei/xibei.png'
import mengniu from '../assets/caseThumb/menglogo.png'
// import mengniuMain from '../assets/caseMain/mengniu/mengniuMain.png'
import mengniuMain from '../assets/test/mengniu.png'
import mengniuB from '../assets/caseMain/mengniu/mengniu.png'
import cixi from '../assets/caseThumb/cixilogo.png'
import cixiMain from '../assets/test/cixi.png'
// import cixiMain from '../assets/caseMain/cixi/cixiMain.png'
import cixiB from '../assets/caseMain/cixi/cixi.png'
import silk from '../assets/caseThumb/silklogo.png'
import silkMain from '../assets/test/silk.png'
// import silkMain from '../assets/caseMain/silk/silkMain.png'
import silkB from '../assets/caseMain/silk/silk.png'
import vanke from '../assets/caseThumb/vankelogo.png'
import vankeMain from '../assets/test/vanke.png'
// import vankeMain from '../assets/caseMain/vanke/vankeMain.png'
import vankeB from '../assets/caseMain/vanke/vanke.png'
import zhixin from '../assets/caseThumb/zhixinlogo.png'
import zhixinMain from '../assets/test/zhixin.png'
// import zhixinMain from '../assets/caseMain/zhixin/zhixinMain.png'
import zhixinB from '../assets/caseMain/zhixin/zhixin.png'
export default {
    name: 'Home',
    components: {
    Menu,
  },
  data(){
    return{
      loading: false,
      isRotate: false,
      isColor: false,
      thumbStyle: {},
      currentIndex: 8,
      currentContentIndex: 8,
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.innerHeight,
      thumbArrayS: [],
      thumbArray: [
        {
          id: '1',
          name: '蒙牛',
          color: '#00AA0F',
          url: mengniu,
          bcImg: mengniuMain,
          logoB: mengniuB,
          desc: '2019 - 包装设计&线上游戏视觉',
        },
        {
          id: '2',
          name: '粢喜',
          color: '#CC6000',
          url: cixi,
          bcImg: cixiMain,
          logoB: cixiB,
          desc: '2017 - vis视觉识别系统',
        },
        {
          id: '3',
          name: '西贝莜面村',
          color: '#C70000',
          url: xibei,
          bcImg: xibeiMain,
          logoB: xibeiB,
          desc: '2019 - 小程序设计'
        },
        {
          id: '4',
          name: '万科',
          color: '#C70007',
          url: vanke,
          bcImg: vankeMain,
          logoB: vankeB,
          desc: '2019 - vis视觉识别系统',
        },
        {
          id: '5',
          name: 'Silk',
          color: '#0064D3',
          url: silk,
          bcImg: silkMain,
          logoB: silkB,
          desc: '2019 - 包装设计',
        },
        {
          id: '6',
          name: '质心',
          color: '#000000',
          url: zhixin,
          bcImg: zhixinMain,
          logoB: zhixinB,
          desc: '2019 - vis视觉识别系统'
        },
        {
          id: '1',
          name: '蒙牛',
          color: '#00AA0F',
          url: mengniu,
          bcImg: mengniuMain,
          logoB: mengniuB,
          desc: '2019 - 包装设计&线上游戏视觉',
        },
        {
          id: '2',
          name: '粢喜',
          color: '#CC6000',
          url: cixi,
          bcImg: cixiMain,
          logoB: cixiB,
          desc: '2017 - vis视觉识别系统',
        },
        {
          id: '3',
          name: '西贝莜面村',
          color: '#C70000',
          url: xibei,
          bcImg: xibeiMain,
          logoB: xibeiB,
          desc: '2019 - 小程序设计'
        },
        {
          id: '4',
          name: '万科',
          color: '#C70007',
          url: vanke,
          bcImg: vankeMain,
          logoB: vankeB,
          desc: '2019 - vis视觉识别系统',
        },
        {
          id: '5',
          name: 'Silk',
          color: '#0064D3',
          url: silk,
          bcImg: silkMain,
          logoB: silkB,
          desc: '2019 - 包装设计',
        },
        {
          id: '6',
          name: '质心',
          color: '#000000',
          url: zhixin,
          bcImg: zhixinMain,
          logoB: zhixinB,
          desc: '2019 - vis视觉识别系统'
        }
      ]
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
      this.$router.push({
        path: `/case/${this.thumbArray[this.currentContentIndex].id}`
      })
    }
  },
  mounted(){
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //     window.screenHeight = document.body.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    //     that.screenHeight = window.screenHeight
    //   })()
    // }
    // console.log(window.screenWidth)
    // that.$refs.homeCon.style.height = that.screenHeight
    // that.currentContentIndex = that.currentIndex
    // var currentWidth = that.screenWidth/2 - 50 - that.currentIndex*100 + 'px'
    // console.log(currentWidth)
    // that.thumbStyle = {
    //   transition: '0.5s all ease',
    //   transform: "translate(" + currentWidth + ", 0)"
    // }
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.currentContentIndex = this.currentIndex
      var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
      this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight

      var heightString = (this.screenHeight).toString()
      console.log(heightString)
      this.$refs.homeCon.style.height = heightString + 'px'
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
