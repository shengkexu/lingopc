<template lang="html">
  <div class="">
    <Menu/>
    <div class="caseDetailCon">
      <div class="caseLogoCon">
        <div class="fakeLogo" ref="fakeLogo"></div>
        <div class="mainBattle" ref="mainBattle">
          <div class="caseTopLogo">
              <img ref="caseTopLogoImg" src="../assets/menu/logo-f.png" alt="logo">
          </div>
          <div class="caseDLogoCon" ref="caseDLogoCon">
            <img ref="caseDLogo" class="caseDLogo" src="../assets/caseMain/xibei/xibei.png" alt="xibei">
          </div>
          <div class="caseColor" ref="caseColor"></div>
          <div class="caseDescCon">
            <div class="caseDescL">
              <div class="caseDescLTitle">
                <p class="caseDescLTitleNum">01</p>
                <p class="caseDescLTitleB">西贝莜面村</p>
                <p class="caseDescLTitleDesc">2019 - 小程序设计</p>
              </div>
              <div class="caseDescLDesigner">
                <p class="caseDescLDesignerTitle">设计师</p>
                <p class="caseDescLDesignerName">黄晓明</p>
              </div>
            </div>
            <div class="caseDescR">
              <img src="../assets/xibeiO.png" alt="xibeiO">
            </div>
          </div>
        </div>
        <div class="fakeBot1" ref="fakeBot1"></div>
        <div class="fakeBot2" ref="fakeBot2"></div>
      </div>
      <div class="caseContentCon">
        <el-image
          class="caseContentImg"
          :src="src"
          :preview-src-list="srcList">
        </el-image>
        <div class="caseContentWordCon">
          <p class="caseContentTitle">西贝莜面村</p>
          <p class="caseContentDesc">
            公司名称“ ZIZAI”表示当前专注于VR业务和娱乐业务的公司将继续自由发展其活动，而不受限于任何区域。公司名称“ ZIZAI”表示当前专注于VR业务和娱乐业务的公司将继续自由发展其活动，而不
            公司名称“ ZIZAI”表示当前专注于VR业务和娱乐业务的公司将继续自由发展其活动，而不受限于任何区域。公司名称“ ZIZAI”表示当前专注于VR业务和娱乐业务的公司将继续自由发展其活动，而不
          </p>
        </div>
        <el-image
          v-for="(img, index) in mainContent[0].image"
          :src="img.src"
          :preview-src-list="img.srcList"
          class="caseContentImg"
          :key="index"
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <div class="caseFooterCon">
        <div class="caseFooterTitleCon">
          <p class="caseFooterTitle">其他案例</p>
          <p class="caseFooterNum">NO.<span>{{thumbArray2[currentIndex].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>6</span></p>
        </div>
        <div class="thumbCon">
          <div class="thumbLine"></div>
          <div class="thumbConS">
            <img class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray2" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
          </div>
          <div class="thumbLine"></div>
        </div>
        <div class="thumbFooterNameCon">
          <p class="thumbFooterName">{{thumbArray2[currentIndex].name}}</p>
          <img class="arrowIcon" src="../assets/arrow.gif" alt="">
          <p class="thumbFooterHint">点击标题查看案例</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Menu from '../components/Menu.vue'

import xibei from '../assets/caseThumb/xibeilogo.png'
import mengniu from '../assets/caseThumb/menglogo.png'
import cixi from '../assets/caseThumb/cixilogo.png'
import silk from '../assets/caseThumb/silklogo.png'
import vanke from '../assets/caseThumb/vankelogo.png'
import zhixin from '../assets/caseThumb/zhixinlogo.png'

import xibei1 from '../assets/caseDetail/xibei1.jpg'
import xibei2 from '../assets/caseDetail/xibei2.jpg'
import xibei3 from '../assets/caseDetail/xibei3.jpg'
import xibei4 from '../assets/caseDetail/xibei4.jpg'
import xibei5 from '../assets/caseDetail/xibei5.jpg'
import xibei6 from '../assets/caseDetail/xibei6.jpg'
import xibei7 from '../assets/caseDetail/xibei7.jpg'
export default {
  name: 'casePage',
  components: {
    Menu,
  },
  data(){
    return{
      caseId: '',
      src: xibei1,
      thumbStyle: {},
      screenWidth: document.body.clientWidth,
      currentIndex: 2,
      srcList: [
        xibei1
      ],
      thumbArray2:[
        {
          id: '1',
          name: '蒙牛',
          url: mengniu,
        },
        {
          id: '2',
          name: '粢喜',
          url: cixi,
        },
        {
          id: '3',
          name: '西贝莜面村',
          url: xibei,
        },
        {
          id: '4',
          name: '万科',
          url: vanke,
        },
        {
          id: '5',
          name: 'Silk',
          url: silk,
        },
        {
          id: '6',
          name: '质心',
          url: zhixin,
        }
      ],
      mainContent: [
        {
          id: '1',
          name: '西贝莜面村',
          desc: 'dsdasd',
          cover: {src: xibei1,srcList:[xibei1]},
          image:[
            {
              id: '2',
              src: xibei2,
              srcList: [xibei2]
            },
            {
              id: '3',
              src: xibei3,
              srcList: [xibei3]
            },
            {
              id: '4',
              src: xibei4,
              srcList: [xibei4]
            },
            {
              id: '5',
              src: xibei5,
              srcList: [xibei5]
            },
            {
              id: '6',
              src: xibei6,
              srcList: [xibei6]
            },
            {
              id: '7',
              src: xibei7,
              srcList: [xibei7]
            }
          ]
        }
      ]
    }
  },
  mounted(){
    this.caseId = this.$route.params.id
    console.log(this.caseId)
    setTimeout(()=>{
      var ref = this.$refs
      ref.mainBattle.style.height = '100vh'
      ref.fakeLogo.style.height = '0px'
      ref.fakeBot1.style.height = '0px'
      ref.fakeBot2.style.height = '0px'
      ref.fakeBot2.style.marginTop= '0px'
      // ref.caseColor.style.width = '100vw'
      // ref.caseColor.style.height = '100vh'
      ref.mainBattle.style.marginTop = '0px'
      ref.caseDLogoCon.style.width = '100vw'
      ref.caseDLogoCon.style.height = '70vh'
      ref.caseDLogoCon.style.top = '0'
      ref.caseDLogoCon.style.left = '0'
      ref.caseDLogoCon.style.marginLeft = '0'
      ref.caseDLogoCon.style.marginTop = '0'
      // ref.caseDLogoCon.style.margin = 'inherit'
      // ref.caseDLogoCon.style.transform = 'translate(0,0)'
      ref.caseDLogo.style.width = '80px'
    }, 100)
    setTimeout(()=>{
      var ref = this.$refs
      ref.caseColor.style.width = '100vw'
      ref.caseColor.style.height = '100vh'
    }, 500)
    setTimeout(()=>{
      this.$refs.caseTopLogoImg.style.opacity = '1'
    },1000)
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      var casenum = parseInt(this.caseId);
      this.currentIndex = (casenum-1).toString()
      var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
    })
    // console.log(this.thumbArray2[this.currentIndex].id)
  },
  methods: {
    clickThumb(index){
      var currentWidth = this.screenWidth/2 - 50 - index*100 + 'px'
      this.currentIndex = index
      console.log(index)
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
    }
  }
}
</script>

<style lang="css">
</style>
