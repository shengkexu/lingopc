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
            <img v-if="mainContent[currentIndex].type == 1" ref="caseDLogo" class="caseDLogo" :src="mainContent[currentIndex].logo" alt="xibei">
            <img v-if="mainContent[currentIndex].type == 2" ref="caseDLogo2" class="caseDLogo2" :src="mainContent[currentIndex].logo" alt="xibei">
          </div>
          <div class="caseColor" ref="caseColor"></div>
          <div class="caseDescCon">
            <div class="caseDescL">
              <div class="caseDescLTitle">
                <p class="caseDescLTitleNum">{{mainContent[currentIndex].id}}</p>
                <p class="caseDescLTitleB">{{mainContent[currentIndex].name}}</p>
                <p class="caseDescLTitleDesc">{{mainContent[currentIndex].descm}}</p>
              </div>
              <div class="caseDescLDesigner">
                <p class="caseDescLDesignerTitle">设计师</p>
                <p class="caseDescLDesignerName">黄晓明</p>
              </div>
            </div>
            <div class="caseDescR">
              <img :src="mainContent[currentIndex].logoW" alt="xibeiO">
            </div>
          </div>
        </div>
        <div class="fakeBot1" ref="fakeBot1"></div>
        <div class="fakeBot2" ref="fakeBot2"></div>
      </div>


      <!-- 模板1 -->
      <div class="caseContentCon" v-if="mainContent[currentIndex].mod == 1">
        <el-image
          class="caseContentImg"
          :src="mainContent[currentIndex].cover.src"
          :preview-src-list="mainContent[currentIndex].cover.srcList">
        </el-image>
        <div class="caseContentWordCon">
          <p class="caseContentTitle">{{mainContent[currentIndex].name}}</p>
          <p class="caseContentDesc">
            {{mainContent[currentIndex].desc}}
          </p>
        </div>
        <el-image
          v-for="(img, index) in mainContent[currentIndex].image"
          :src="img.src"
          :preview-src-list="img.srcList"
          class="caseContentImg"
          :key="index"
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
        </el-image>
      </div>

      <!-- 模板2 -->
      <div class="caseContentCon" v-if="mainContent[currentIndex].mod == 2">
        <el-image
          class="caseContentImg"
          :src="mainContent[currentIndex].cover1.src"
          :preview-src-list="mainContent[currentIndex].cover1.srcList">
        </el-image>
        <div class="caseContentWordCon">
          <p class="caseContentTitle">{{mainContent[currentIndex].name}}</p>
          <p class="caseContentDesc">
            {{mainContent[currentIndex].desc1}}
          </p>
        </div>
        <el-image
          class="caseContentImg"
          :src="mainContent[currentIndex].cover2.src"
          :preview-src-list="mainContent[currentIndex].cover2.srcList">
        </el-image>
        <div class="caseContentWordCon">
          <p class="caseContentDesc">
            {{mainContent[currentIndex].desc2}}
          </p>
        </div>
        <el-image
          v-for="(img, index) in mainContent[currentIndex].image"
          :src="img.src"
          :preview-src-list="img.srcList"
          class="caseContentImg"
          :key="index"
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
        </el-image>
      </div>

      <!-- 模板3 -->
      <div class="caseContentCon" v-if="mainContent[currentIndex].mod == 3">
        <el-image
          class="caseContentImg"
          :src="mainContent[currentIndex].cover.src"
          :preview-src-list="mainContent[currentIndex].cover.srcList">
        </el-image>
        <div class="caseContentWordCon">
          <p class="caseContentTitle">{{mainContent[currentIndex].name1}}</p>
          <p class="caseContentDesc">
            {{mainContent[currentIndex].desc1}}
          </p>
        </div>
        <el-image
          v-for="(img, index) in mainContent[currentIndex].image1"
          :src="img.src"
          :preview-src-list="img.srcList"
          class="caseContentImg"
          :key="index+12"
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
        </el-image>

        <div class="caseContentWordCon">
          <p class="caseContentTitle">{{mainContent[currentIndex].name2}}</p>
          <p class="caseContentDesc">
            {{mainContent[currentIndex].desc2}}
          </p>
        </div>
        <el-image
          v-for="(img, index) in mainContent[currentIndex].image2"
          :src="img.src"
          :preview-src-list="img.srcList"
          class="caseContentImg"
          :key="index+33"
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
        </el-image>

        <div class="caseContentWordCon">
          <p class="caseContentTitle">{{mainContent[currentIndex].name3}}</p>
          <p class="caseContentDesc">
            {{mainContent[currentIndex].desc3}}
          </p>
        </div>
        <el-image
          v-for="(img, index) in mainContent[currentIndex].image3"
          :src="img.src"
          :preview-src-list="img.srcList"
          class="caseContentImg"
          :key="index+55"
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
        </el-image>
      </div>



      <div class="caseFooterCon" ref="bottomDiv">
        <div class="caseFooterTitleCon">
          <p class="caseFooterTitle">其他案例</p>
          <p class="caseFooterNum">NO.<span>{{thumbArray2[currentIndexch].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>{{mainContent.length}}</span></p>
        </div>
        <div class="thumbCon">
          <div class="thumbLine"></div>
          <div class="thumbConS">
            <img class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray2" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
          </div>
          <div class="thumbLine noOpacity"></div>
        </div>
        <div class="thumbFooterNameCon">
          <p class="thumbFooterName" @click="changeContent()">{{thumbArray2[currentIndexch].name}}</p>
          <div class="footerBtnCon1">
            <div class="footerBtnDetail" @click="changeContent()">
              <p>点击查看详情<i class="iconfont thumbArrow">&#xe656;</i></p>
            </div>
          </div>
          <div class="footerBtnCon2">
            <p class="fakeBtn"></p>
            <p class="backHomeBtn" @click="gotoHome()">返回首页</p>
            <p class="backTopBtn"  @click="scrollToTop()"><i class="iconfont iconTop">&#xe665;</i>回到顶部</p>
          </div>
        </div>
        <div class="footer">
          <p>到底了哟~︿(￣︶￣)︿</p>
        </div>
      </div>
    </div>
    <div ref="fixButtonCon" class="fixButtonCon">
      <div class="fixButtonOut" @click="gotoLast()">
        <i class="iconfont fixBtn leftArrow">&#xe663;</i>
      </div>
      <div class="fixButtonOut" @click="gotoHome()">
        <i class="iconfont fixBtn">&#xe662;</i>
      </div>
      <div class="fixButtonOut" @click="gotoNext()">
        <i class="iconfont fixBtn">&#xe65e;</i>
      </div>
    </div>
    <div ref="scrollTopBtn" class="scrollTop" @click="scrollToTop()">
      <div class="scrollTopBtn">
        <i class="iconfont fixBtn">&#xe664;</i>
      </div>
    </div>
  </div>

</template>

<script>
import caseDetail from '../utils/caseDetail.js'
import Menu from '../components/Menu.vue'

import xibei1 from '../assets/caseDetail/xibei/xibei1.jpg'
import xibei from '../assets/caseThumb/xibeilogo.png'
import mengniu from '../assets/caseThumb/menglogo.png'
import cixi from '../assets/caseThumb/cixilogo.png'
import silk from '../assets/caseThumb/silklogo.png'
import vanke from '../assets/caseThumb/vankelogo.png'
import zhixin from '../assets/caseThumb/zhixinlogo.png'
import zhongnan from '../assets/caseThumb/zhongnanlogo.png'
import xinyuan from '../assets/caseThumb/xinyuanlogo.png'
import shimao from '../assets/caseThumb/shimaologo.png'

export default {
  name: 'casePage',
  components: {
    Menu,
  },
  data(){
    return{
      caseId: '',
      src: xibei1,
      srcList: [
        xibei1
      ],
      thumbStyle: {},
      screenWidth: document.body.clientWidth,
      currentIndex: 2,
      currentIndexch: 2,
      bottomHeight: 0,
      mainContent: caseDetail,
      //screenHeight: window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight,
      scrollHeight: document.body.scrollTop,
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
        },
        {
          id: '7',
          name: '中南集团',
          url: zhongnan,
        },
        {
          id: '8',
          name: '鑫沅资产',
          url: xinyuan,
        },
        {
          id: '9',
          name: '世茂',
          url: shimao,
        }
      ]
    }
  },
  beforeUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
    //this.mainContent = this.mainContent2
    this.caseId = this.$route.params.id
    console.log(this.caseId)
    this.$refs.caseColor.style.background = this.mainContent[this.caseId-1].color
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
      if(this.mainContent[this.currentIndex].type == 1){
        ref.caseDLogo.style.width = '80px'
      }else{
        ref.caseDLogo2.style.width = '120px'
      }
      ref.fixButtonCon.style.opacity = '0.3'
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
      //console.log(this.scrollHeight)
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.onResize)
      //this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      var casenum = parseInt(this.caseId);
      this.currentIndex = (casenum-1).toString()
      this.currentIndexch = this.currentIndex
      var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
    })
    // console.log(this.thumbArray2[this.currentIndex].id)
  },
  methods: {
    gotoLast(){
      this.scrollToTop()
      if(this.currentIndex == 0){
        this.currentIndex = 8
        this.$router.push({
          path: `/case/9`
        })
        this.currentIndexch = 8
        var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + currentWidth + ", 0)"
        }
        console.log(this.currentIndex)
      }else{
        this.currentIndex --
        this.$router.push({
          path: `/case/${this.thumbArray2[this.currentIndex].id}`
        })
        this.currentIndexch = this.currentIndex
        var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + currentWidth + ", 0)"
        }
        console.log(this.currentIndex)
      }
    },
    gotoNext(){
      this.scrollToTop()
      if(this.currentIndex == 8){
        this.currentIndex = 0
        this.$router.push({
          path: `/case/1`
        })
        this.currentIndexch = 0
        var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + currentWidth + ", 0)"
        }
        console.log(this.currentIndex)
      }else{
        this.currentIndex ++
        this.$router.push({
          path: `/case/${this.thumbArray2[this.currentIndex].id}`
        })
        this.currentIndexch = this.currentIndex
        var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + currentWidth + ", 0)"
        }
        console.log(this.currentIndex)
      }
      // if(this.currentIndex<8){
      //   this.currentIndex ++
      //   this.$router.push({
      //     path: `/case/${this.thumbArray2[this.currentIndex].id}`
      //   })
      // }else{
      //   this.currentIndex = 0
      //   this.$router.push({
      //     path: `/case/1}`
      //   })
      // }

    },
    changeContent(){
      if(this.currentIndex !== this.currentIndexch){
        this.scrollToTop()
        this.$router.push({
          path: `/case/${this.thumbArray2[this.currentIndexch].id}`
        })
        this.currentIndex = this.currentIndexch
      }
    },
    gotoHome(){
      this.$router.push({
        path: '/'
      })
    },
    clickThumb(index){
    //  var currentWidth = this.screenWidth/2 - 50 - index*100 + 'px'
      var currentWidth = this.screenWidth/2 - 50 - index*100 + 'px'
      this.currentIndexch = index
      console.log(index)
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + currentWidth + ", 0)"
      }
    },
    handleScroll(){
      this.bottomHeight = this.$refs.bottomDiv.getBoundingClientRect().top
      if(this.bottomHeight <=750){
        //this.$refs.fixButtonCon.style.opacity = '0'
        this.$refs.fixButtonCon.style.display = 'none'
      }else{
        this.$refs.fixButtonCon.style.display = 'flex'
        this.$refs.fixButtonCon.style.opacity = '0.3'
      }
      //console.log(this.bottomHeight)
      this.scrollHeight = document.body.scrollTop || document.documentElement.scrollTop
      if(this.scrollHeight <= 600){
        this.$refs.scrollTopBtn.style.opacity = '0'
        var currentHeight = (60 + 1/20*this.scrollHeight).toString() + "vh"
        this.$refs.fixButtonCon.style.top = currentHeight
      }else{
        this.$refs.scrollTopBtn.style.opacity = '0.3'
      }
      if(this.scrollHeight > 600 && this.bottomHeight > 750){
        this.$refs.scrollTopBtn.style.opacity = '0.3'
      }else{
        this.$refs.scrollTopBtn.style.opacity = '0'
      }
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    // onResize(){
    //   this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
    // }
  },
  watch: {
    currentIndex(val){
      this.$refs.caseColor.style.background = this.mainContent[val].color
    }
    // scrollHeight(val){
    //   this.scrollHeight = val
    //   console.log(this.scrollHeight)
    //   //this.$refs.fixButtonCon.style.top =
    // }
  }
}
</script>

<style lang="css">
</style>
