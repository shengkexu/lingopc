<template>
  <div class="aboutContainer">
    <Menu/>
    <!-- <div class="aboutLogo">
      <img class="aboutMainLogo" src="../assets/menu/logo-f.png" alt="logo">
    </div> -->
    <div class="aboutLogo" @click="gotoHome()">
      <img class="aboutMainLogo" src="../assets/menu/logo-f.png" alt="凌言广告">
    </div>

    <div class="flexCon">
      <div class="aboutImgCon entranceAbout3">
        <el-carousel :interval="3000" arrow="always" :height="sliderHeight">
          <el-carousel-item v-for="item in imageArray" :key="item">
            <img class="sliderImg" :src="item" alt="凌言广告">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div v-if="currentWidth>=1440" class="aboutRigntBotCon" ref="aboutRigntBotCon">
        <div class="aboutVideoCon entranceAbout3">
          <div class="myVideoCon">
            <div class="myVideoInCon">
              <video class="myVideo"  src="../assets/video.mp4" poster="../assets/lingooVi/13.jpg"></video>
              <!-- <video class="myVideo"  src="../assets/video.mp4" poster="../assets/caseDetail/cixi/3.jpg"  @click="playVideo"></video>
              <div class="videoPlayIconCon" @click="playVideo">
                <i class="iconfont videoPlayIcon">&#xe658;</i>
              </div> -->
            </div>
          </div>
          <p class="videoText">VIDEO</p>
        </div>

        <div class="aboutTextCon entranceAbout3">
          <div class="aboutTextTitleCon">
            <p class="aboutTitle">关于我们</p>

          </div>
          <div class="aboutLine"></div>
          <div class="aboutTextBot">
            <p>北岛说，<br/>“只有诗歌，才能让我们的舌头得救；而只有设计才能让我们的眼睛获得新生。”<br/>LINGOO专注于品牌策略、品牌创意与设计、品牌传播与营销，核心成员来自国内外知名设计公司，和4A公司骨干。</p>
          </div>
          <p class="aboutEng">ABOUT</p>
        </div>
      </div>

      <div v-if="currentWidth<1440" class="aboutVideoCon entranceAbout3">
        <div class="myVideoCon">
          <div class="myVideoInCon">
            <video class="myVideo"  src="../assets/video.mp4" poster="../assets/lingooVi/13.jpg"></video>
            <!-- <video class="myVideo"  src="../assets/video.mp4" poster="../assets/caseDetail/cixi/3.jpg"  @click="playVideo"></video>
            <div class="videoPlayIconCon" @click="playVideo">
              <i class="iconfont videoPlayIcon">&#xe658;</i>
            </div> -->
          </div>
        </div>
        <p class="videoText">VIDEO</p>
      </div>

      <div  v-if="currentWidth<1440" class="aboutTextCon entranceAbout3">
        <div class="aboutTextTitleCon">
          <p class="aboutTitle">关于我们</p>
          <p class="aboutEng">ABOUT</p>
        </div>
        <div class="aboutLine"></div>
        <div class="aboutTextBot">
          <p>北岛说，<br/>“只有诗歌，才能让我们的舌头得救；而只有设计才能让我们的眼睛获得新生。”<br/>LINGOO专注于品牌策略、品牌创意与设计、品牌传播与营销，核心成员来自国内外知名设计公司，和4A公司骨干。</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import screenfull from "screenfull";
import image1 from '@/assets/lingooVi/1.jpg'
import image2 from '@/assets/lingooVi/2.jpg'
import image3 from '@/assets/lingooVi/3.jpg'
import image4 from '@/assets/lingooVi/4.jpg'
import image5 from '@/assets/lingooVi/5.jpg'
import image6 from '@/assets/lingooVi/6.jpg'
import image7 from '@/assets/lingooVi/7.jpg'
import image8 from '@/assets/lingooVi/8.jpg'
import image9 from '@/assets/lingooVi/9.jpg'
import image10 from '@/assets/lingooVi/10.jpg'
import image11 from '@/assets/lingooVi/11.jpg'
import image12 from '@/assets/lingooVi/12.jpg'
import image13 from '@/assets/lingooVi/13.jpg'
import image14 from '@/assets/lingooVi/14.jpg'
import image15 from '@/assets/lingooVi/15.jpg'
import image16 from '@/assets/lingooVi/16.jpg'
import image17 from '@/assets/lingooVi/17.jpg'
import image18 from '@/assets/lingooVi/18.jpg'
import image19 from '@/assets/lingooVi/19.jpg'
import image20 from '@/assets/lingooVi/20.jpg'
import image21 from '@/assets/lingooVi/21.jpg'
import image22 from '@/assets/lingooVi/22.jpg'
import image23 from '@/assets/lingooVi/23.jpg'
import image24 from '@/assets/lingooVi/24.jpg'
import image25 from '@/assets/lingooVi/25.jpg'
import image26 from '@/assets/lingooVi/26.jpg'
import image27 from '@/assets/lingooVi/27.jpg'


import Menu from '@/components/Menu.vue'
export default {
  name: 'About',
  components: {
    Menu
  },
  data(){
    return{
      fullS: 0,
      imageArray: [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27],
      sliderHeight: '0px',
      sliderWidth: '0px',
      currentWidth: document.body.clientWidth,
    }
  },
  methods: {
    gotoHome(){
      this.$router.push({
        path: '/'
      })
    },
    onResize(){
      this.currentWidth = document.body.clientWidth
      if(this.currentWidth<1440){
        // this.sliderWidth = '100%'
        this.sliderHeight = this.currentWidth*3/5 + 'px'
      }else if(this.currentWidth>=1440 && this.currentWidth<1920){
        // this.sliderHeight = this.currentWidth*7/10*0.75 + 'px'
        this.sliderHeight = '82vh'
        console.log(this.$refs)
        this.$refs.aboutRigntBotCon.style.height = this.sliderHeight
      }else if(this.currentWidth>=1920){
        this.sliderHeight = this.currentWidth*3/5*0.75 + 'px'
        this.$refs.aboutRigntBotCon.style.height = this.sliderHeight
      }
      console.log(this.sliderHeight)
    },
    playVideo(){
      var video1 = document.querySelector('.myVideo')
      // var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;

      //video1.requestFullscreen()
      // if (video1.requestFullscreen) {
      //       video1.requestFullscreen();
      //   } else if (video1.mozRequestFullScreen) {
      //       video1.mozRequestFullScreen();
      //   } else if (video1.webkitRequestFullscreen) {
      //       video1.webkitRequestFullscreen();
      //   } else if (video1.webkitSupportsFullscreen) {
      //       video1.webkitEnterFullscreen();
      //   } else if (video1.msRequestFullscreen) {
      //       video1.msRequestFullscreen();
      //   }


      // if (screenfull.isEnabled) {
      //   screenfull.request(video1);
      // }

      video1.play()
      this.fullS = true
      // console.log(isFull)
    },
    checkFull(){
      console.log(document.fullscreenElement)
      var video1 = document.querySelector('.myVideo')
      if(document.fullscreenElement == null){
        video1.pause()
      }
    }
  },
  mounted(){
    window.addEventListener('resize', this.onResize);
    window.addEventListener('fullscreenchange', this.checkFull)
    this.currentWidth = document.body.clientWidth
    if(this.currentWidth<1440){
      this.sliderHeight = this.currentWidth*3/5 + 'px'
      this.$refs.aboutRigntBotCon.style.height = this.sliderHeight
    }else if(this.currentWidth>=1440 && this.currentWidth<1920){
      this.sliderHeight = '82vh'
      // this.sliderHeight = this.currentWidth*7/10*0.75 + 'px'
      this.$refs.aboutRigntBotCon.style.height = this.sliderHeight
    }else if(this.currentWidth>=1920){
      this.sliderHeight = this.currentWidth*3/5*0.75 + 'px'
      this.$refs.aboutRigntBotCon.style.height = this.sliderHeight
    }
  }

}
</script>

<style lang="css">
</style>
