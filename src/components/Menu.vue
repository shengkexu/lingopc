<template>
    <!-- <nav id="mainNav"> -->
    <div class="">
      <div id="menuToggle" v-on:click="toggleMenu">
          <span :class="{'ham1': isActive}"></span>
          <span :class="{'ham2': isActive}"></span>
          <span :class="{'ham3': isActive}"></span>
      </div>
      <div class="menuCon">
        <div class="blueCircle" ref="circle1" :class="{'blueCircleScale': isActive}"></div>
        <div class="yellowCircle" ref="circle2" :class="{'yellowCircleScale': isActive}"></div>
        <div class="redCircle" ref="circle3" :class="{'redCircleScale': isActive}"></div>
        <div class="menu" ref="menuWordCon">
          <div class="logo">
            <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
          </div>
          <ul>
              <router-link to="/home"><a><li class="menuWord menuWord1" :class="{'menuWordChange1': isActive}">首页</li></a></router-link>
              <a href="#"><li class="menuWord menuWord2" :class="{'menuWordChange2': isActive}">关于</li></a>
              <router-link to="/contact"><a><li class="menuWord menuWord3" :class="{'menuWordChange3': isActive}">联系</li></a></router-link>
              <!-- <a href="#"><li class="menuWord menuWord4" :class="{'menuWordChange4': isActive}">联系我们</li></a> -->
          </ul>
          <div class="menuImgCon">
            <img class="menuImg" src="../assets/menu/menuImg.png" alt="menuImg">
          </div>
          <div class="menuInfoCon">
            <p class="menuAdress"><span class="iconfont addressIcon">&#xe654;</span>上海市长宁区仙霞路319号远东国际广场A座</p>
            <p class="menuAdress">京ICP证030173号-1</p>
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
          isActive: false
        }
    },
    methods:{
      toggleMenu: function (){
        if(this.isActive == false){
          this.$refs.circle1.style.transition = '0.8s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle2.style.transition = '1s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle3.style.transition = '1.2s all cubic-bezier(.85,0,.21,1)'
          this.$refs.menuWordCon.style.top = '0'
          // this.$refs.menuWord.style.display = 'block'
          // this.$refs.menuWord.style.opacity = '1'
          this.isActive = true

        }else{
          this.$refs.circle1.style.transition = '1.2s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle2.style.transition = '1s all cubic-bezier(.85,0,.21,1)'
          this.$refs.circle3.style.transition = '0.8s all cubic-bezier(.85,0,.21,1)'
          this.$refs.menuWordCon.style.top = '-100vh'
          // this.$refs.menuWord.style.display = 'none'
          // this.$refs.menuWord.style.opacity = '0'
          this.isActive = false
        }
        console.log(this.isActive)
      }
    },
    mounted(){
      this.isActive = false
      console.log(this.$refs)
    },
}
</script>
<style>
</style>
