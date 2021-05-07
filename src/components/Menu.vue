<template>
    <!-- <nav id="mainNav"> -->
    <div class="">
      <div id="menuToggle" v-on:click="toggleMenu">
          <span :class="{'ham1': isActive}"></span>
          <span :class="{'ham2': isActive}"></span>
          <span :class="{'ham3': isActive}"></span>
      </div>
      <div class="menuCon" ref="menuBigBcg">
        <div class="blueCircle" ref="circle1" :style="blueCircleScale"></div>
        <div class="yellowCircle" ref="circle2" :style="yellowCircleScale"></div>
        <div class="redCircle" ref="circle3" :style="redCircleScale"></div>
        <div class="menu" ref="menuWordCon">
          <div class="logo">
            <img class="mainLogo" src="../assets/menu/logo-f.png" alt="凌言广告">
          </div>
          <ul>
              <router-link to="/home"><a><li class="menuWord menuWord1" :class="{'menuWordChange1': isActive}"><p>首页</p><div v-if="$route.path == '/home'" class="currentMenuLine"></div></li></a></router-link>
              <router-link to="/about"><a><li class="menuWord menuWord2" :class="{'menuWordChange2': isActive}"><p>关于</p><div v-if="$route.path == '/about'" class="currentMenuLine"></div></li></a></router-link>
              <router-link to="/contact"><a><li class="menuWord menuWord3" :class="{'menuWordChange3': isActive}"><p>联系</p><div v-if="$route.path == '/contact'" class="currentMenuLine"></div></li></a></router-link>
              <!-- <a><li class="menuWord menuWord3" :class="{'menuWordChange3': isActive}">联系</li></a> -->
          </ul>
          <section class="mainSection">
            <h1 class="MainTitle">凌言广告</h1>
            <h2 class="Maindesc">专注于品牌策略、创意与设计、品牌传播与营销，核心成员来自国内外知名设计公司，和4A公司骨干。</h2>
          </section>

          <!-- <div class="menuImgCon">
            <img class="menuImg" src="../assets/menu/menuImg.png" alt="凌言广告">
          </div> -->
          <div class="menuInfoCon">
            <p class="menuAdress"><span class="iconfont addressIcon">&#xe654;</span>上海市普陀区丹巴路99号苏宁天御国际广场B1栋708室</p>
            <a href="#"></a> <p class="menuAdress">沪ICP备2020030931号</p>
      		 	<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502005509"><p class="menuAdress">沪公网安备 31010502005509号</p></a>
          </div>
        </div>
      </div>
    </div>


</template>
<script>
export default {
    name: 'Menu',
    data(){
        return{
          isActive: false,
          blueCircleScale: {},
          yellowCircleScale: {},
          redCircleScale: {},
          currentWidth: document.body.clientWidth,
          screenHeight: window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight,
        }
    },
    methods:{
      onResize(){
        this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
        this.currentWidth = document.body.clientWidth
      },
      toggleMenu: function (){

        if(this.isActive == false){
          this.$refs.menuBigBcg.style.height = '100vh'
          // this.$refs.menuBigBcg.style.background = 'rgba(255,255,255,1)'
          this.$refs.circle1.style.transition = '0.8s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle2.style.transition = '1s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle3.style.transition = '1.2s all cubic-bezier(.85,0,.21,1)'

          // this.$refs.circle1.style.width = this.currentWidth + 'px'
          // this.$refs.circle2.style.width = this.currentWidth + 'px'
          // this.$refs.circle3.style.width = this.currentWidth + 'px'
          this.$refs.menuWordCon.style.top = '0'
          console.log(this.currentWidth, this.screenHeight)
          if(this.currentWidth<this.screenHeight){
            var circleWidth = this.screenHeight*1.5
          }else{
            var circleWidth = this.currentWidth*1.5
          }

          this.blueCircleScale = {
            width: circleWidth*2+'px',
            height: circleWidth*2+'px',
            borderRadius: circleWidth + 'px',
            right: -(circleWidth/2.5) + 'px',
            top: -(circleWidth/2.5) + 'px',
          }
          this.yellowCircleScale = {
            width: circleWidth*2+'px',
            height: circleWidth*2+'px',
            borderRadius: circleWidth + 'px',
            right: -(circleWidth/2.5) + 'px',
            top: -(circleWidth/2.5) + 'px',
          }
          this.redCircleScale = {
            width: circleWidth*2+'px',
            height: circleWidth*2+'px',
            borderRadius: circleWidth + 'px',
            right: -(circleWidth/2.5) + 'px',
            top: -(circleWidth/2.5) + 'px',
          }
          // console.log(this.$refs.circle1.style.width)
          // this.$refs.menuWord.style.display = 'block'
          // this.$refs.menuWord.style.opacity = '1'
          this.isActive = true

        }else{
          this.$refs.menuBigBcg.style.height = 'auto'
          this.$refs.menuBigBcg.style.background = 'rgba(255,255,255,0)'
          this.$refs.circle1.style.transition = '1.2s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle2.style.transition = '1s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle3.style.transition = '0.8s all cubic-bezier(.85,0,.21,1)'
          this.$refs.menuWordCon.style.top = '-180vh'

          this.blueCircleScale = {
            width: '150px',
            height: '150px',
            borderRadius: '75px'
          }
          this.yellowCircleScale = {
            width: '150px',
            height: '150px',
            borderRadius: '75px'
          }
          this.redCircleScale = {
            width: '150px',
            height: '150px',
            borderRadius: '75px'
          }
          // this.$refs.menuWord.style.display = 'none'
          // this.$refs.menuWord.style.opacity = '0'
          this.isActive = false
        }
        console.log(this.isActive)
      }
    },
    mounted(){
      window.addEventListener('resize', this.onResize);
      this.isActive = false
      console.log(this.$refs)
    },
    beforeUnmount(){
      window.removeEventListener('resize', this.onResize);
    },
}
</script>
<style>
</style>
