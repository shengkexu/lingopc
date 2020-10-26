<template lang="html">
  <div class="">
    <Menu/>
    <div class="caseDetailCon">
      <div class="caseLogoCon">
        <div class="fakeLogo" ref="fakeLogo"></div>
        <div class="mainBattle" ref="mainBattle">
          <div class="caseTopLogo">
              <img ref="caseTopLogoImg" src="../assets/menu/logo-f.png" alt="凌言广告">
          </div>
          <div class="caseDLogoCon" ref="caseDLogoCon">
            <img v-if="mainContent[currentIndex].type == 1" ref="caseDLogo" class="caseDLogo" :src="mainContent[currentIndex].logo" alt="凌言广告">
            <img v-if="mainContent[currentIndex].type == 2" ref="caseDLogo2" class="caseDLogo2" :src="mainContent[currentIndex].logo" alt="凌言广告">
            <!-- <img v-if="mainContent[currentIndex].type == 2" ref="caseDLogo2" class="caseDLogo2" src="../assets/loading.png" alt="xibei"> -->
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
                <p class="caseDescLDesignerName">凌言广告</p>
              </div>
            </div>
            <div class="caseDescR">
              <img v-lazy="mainContent[currentIndex].logoW" alt="凌言广告">
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
          <div slot="placeholder" class="image-slot" lazy>
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
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
          lazy
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
          :preview-src-list="mainContent[currentIndex].cover1.srcList" lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
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
          :preview-src-list="mainContent[currentIndex].cover2.srcList" lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
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
          lazy
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
          :preview-src-list="mainContent[currentIndex].cover.srcList" lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
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
          lazy
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
          lazy
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
          lazy
          >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">... o(￣▽￣)ｄ</span>
          </div>
        </el-image>
      </div>



      <div class="caseFooterCon" ref="bottomDiv">
        <!-- <div class="caseFooterTitleCon">
          <p class="caseFooterTitle">其他案例</p>
          <p class="caseFooterNum">NO.<span>{{thumbArray[currentIndexch].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>{{mainContent.length}}</span></p>
        </div>
        <div class="thumbConRe">
          <div class="thumbCon" v-if="thumbArray.length !== 0"  @scroll="onScroll()">
            <div class="thumbLine"></div>
            <div class="thumbConS2" ref="scrollDiv2">
              <img :style="thumbStyle" class="thumbImg" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
            </div>
          </div>
        </div>
        <div class="thumbFooterNameCon">
          <p class="thumbFooterName" @click="changeContent()">{{thumbArray[currentIndexch].name}}</p>
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
        </div> -->
        <div class="footer" @click="gotoContact()">
          <p>联系我们~(*/ω＼*)</p>
        </div>
      </div>
    </div>
    <div ref="fixButtonCon" class="fixButtonCon">
      <div class="fixButtonOut" @click="gotoLast()">
        <i class="iconfont fixBtn">&#xe666;</i>
      </div>
      <div class="fixButtonOut" @click="gotoHome()">
        <i class="iconfont fixBtn">&#xe667;</i>
      </div>
      <div class="fixButtonOut" @click="gotoNext()">
        <i class="iconfont fixBtn">&#xe668;</i>
      </div>
    </div>
    <div ref="scrollTopBtn" class="scrollTop" @click="scrollToTop()">
      <div class="scrollTopBtn">
        <i class="iconfont fixBtn">&#xe66b;</i>
      </div>
    </div>
  </div>

</template>

<script>
import thumbArrayTest from '../utils/homeContent.js'
import caseDetail from '../utils/caseDetail.js'
import Menu from '../components/Menu.vue'

export default {
  name: 'casePage',
  components: {
    Menu,
  },
  data(){
    return{
      caseId: '',
      thumbStyle: {},
      screenWidth: document.body.clientWidth,
      currentIndex: 1,
      currentIndexch: 1,
      bottomHeight: 0,
      mainContent: caseDetail,
      scrollHeight: document.body.scrollTop,
      thumbArray: thumbArrayTest,
    }
  },
  beforeUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
    //this.mainContent = this.mainContent2
    this.caseId = this.$route.params.id
    this.$refs.caseColor.style.background = this.mainContent[this.caseId-1].color
    console.log(this.caseId,this.screenWidth)
    setTimeout(()=>{
      var ref = this.$refs
      ref.caseColor.style.background = this.mainContent[this.caseId-1].color
      ref.mainBattle.style.height = '100vh'
      ref.fakeLogo.style.height = '0px'
      ref.fakeBot1.style.height = '0px'
      ref.fakeBot2.style.height = '0px'
      ref.fakeBot2.style.marginTop= '0px'

      ref.mainBattle.style.marginTop = '0px'
      ref.caseDLogoCon.style.width = '100vw'
      ref.caseDLogoCon.style.height = '70vh'
      ref.caseDLogoCon.style.top = '0'
      ref.caseDLogoCon.style.left = '0'
      ref.caseDLogoCon.style.marginLeft = '0'
      ref.caseDLogoCon.style.marginTop = '0'


      if(this.screenWidth<1920){
        if(this.mainContent[this.currentIndex].type == 1){
          ref.caseDLogo.style.width = '80px'
        }else{
          ref.caseDLogo2.style.width = '120px'
        }
      }else if(this.screenWidth>=1920){
        if(this.mainContent[this.currentIndex].type == 1){
          ref.caseDLogo.style.width = '160px'
        }else{
          ref.caseDLogo2.style.width = '200px'
        }
      }

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
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.onResize)
      var casenum = parseInt(this.caseId);
      this.currentIndex = (casenum-1).toString()
      this.currentIndexch = this.currentIndex

      // if(this.screenWidth<1920){
      //   var scrollWidth = this.thumbArray.length*100 + this.screenWidth - 100 + 'px'
      //   console.log(scrollWidth)
      //   this.$refs.scrollDiv2.style.width = scrollWidth
      //
      //   var initLength = -(this.caseId-1)*100 + 'px'
      //   this.thumbStyle = {
      //     transition: '0.5s all ease',
      //     transform: "translate(" + initLength + ", 0)"
      //   }
      // }else{
      //   var scrollWidth = this.thumbArray.length*200 + this.screenWidth - 200 + 'px'
      //   console.log(scrollWidth)
      //   this.$refs.scrollDiv2.style.width = scrollWidth
      //
      //   var initLength = -(this.caseId-1)*200 + 'px'
      //   this.thumbStyle = {
      //     transition: '0.5s all ease',
      //     transform: "translate(" + initLength + ", 0)"
      //   }
      // }

    })
  },
  methods: {
    gotoLast(){
      this.scrollToTop()
      if(this.screenWidth<1920){
        if(this.currentIndex == 0){
          this.currentIndex = 11
          this.$router.push({
            path: `/case/9`
          })
          this.currentIndexch = 11
          //var currentWidth = this.screenWidth/2 - 50 - this.currentIndex*100 + 'px'
          // var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
          // var moveDistance = (0-this.currentIndex)*100-n1 + 'px'
          // this.thumbStyle = {
          //   transition: '0.5s all ease',
          //   transform: "translate(" + moveDistance + ", 0)"
          // }
          // console.log(this.currentIndex)
        }else{
          this.currentIndex --
          this.$router.push({
            path: `/case/${this.thumbArray[this.currentIndex].id}`
          })
          this.currentIndexch = this.currentIndex
          // var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
          // var moveDistance = (0-this.currentIndex)*100-n1 + 'px'
          // this.thumbStyle = {
          //   transition: '0.5s all ease',
          //   transform: "translate(" + moveDistance + ", 0)"
          // }
          // console.log(this.currentIndex)
        }
      }else{
        if(this.currentIndex == 0){
          this.currentIndex = 11
          this.$router.push({
            path: `/case/9`
          })
          this.currentIndexch = 11
          // var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
          // var moveDistance = (0-this.currentIndex)*200-n1 + 'px'
          // this.thumbStyle = {
          //   transition: '0.5s all ease',
          //   transform: "translate(" + moveDistance + ", 0)"
          // }
          // console.log(this.currentIndex)
        }else{
          this.currentIndex --
          this.$router.push({
            path: `/case/${this.thumbArray[this.currentIndex].id}`
          })
          this.currentIndexch = this.currentIndex
          // var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
          // var moveDistance = (0-this.currentIndex)*200-n1 + 'px'
          // this.thumbStyle = {
          //   transition: '0.5s all ease',
          //   transform: "translate(" + moveDistance + ", 0)"
          // }
          // console.log(this.currentIndex)
        }
      }



    },
    gotoNext(){
      this.scrollToTop()
      if(this.currentIndex == 11){
        this.currentIndex = 0
        this.$router.push({
          path: `/case/1`
        })
        this.currentIndexch = 0

        // var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
        // if(this.screenWidth<1920){
        //   var moveDistance = (0-this.currentIndex)*100-n1 + 'px'
        // }else {
        //   var moveDistance = (0-this.currentIndex)*200-n1 + 'px'
        // }
        // this.thumbStyle = {
        //   transition: '0.5s all ease',
        //   transform: "translate(" + moveDistance + ", 0)"
        // }
        // console.log(this.mainContent[this.currentIndex].type)
      }else{
        this.currentIndex ++
        this.$router.push({
          path: `/case/${this.thumbArray[this.currentIndex].id}`
        })
        this.currentIndexch = this.currentIndex

        // var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
        // if(this.screenWidth<1920){
        //   var moveDistance = (0-this.currentIndex)*100-n1 + 'px'
        // }else{
        //   var moveDistance = (0-this.currentIndex)*200-n1 + 'px'
        // }
        // this.thumbStyle = {
        //   transition: '0.5s all ease',
        //   transform: "translate(" + moveDistance + ", 0)"
        // }
        // console.log(this.mainContent[this.currentIndex].type)
      }
    },
    changeContent(){
      if(this.currentIndex !== this.currentIndexch){
        this.scrollToTop()
        this.$router.push({
          path: `/case/${this.thumbArray[this.currentIndexch].id}`
        })
        this.currentIndex = this.thumbArray[this.currentIndexch].id-1
        console.log(this.currentIndex)
      }
    },
    gotoHome(){
      this.$router.push({
        path: '/'
      })
    },
    onScroll(){
      clearTimeout(timer)
      let n1 = this.$refs.scrollDiv2.getBoundingClientRect().left
      let n2 = 0
      var ml = this.$refs.scrollDiv2.getBoundingClientRect().left;
      var type = 0
      let timer = null
      var once = false

      if(this.screenWidth<1920){
        timer = setTimeout(()=>{
          n2 = this.$refs.scrollDiv2.getBoundingClientRect().left
          if(n1 == n2){
            if(n1%100 >= -50){
              type = 1
            }else if(n1%100 <-50){
              type = 2
            }
            if(type ==1){
                var controlLength = parseInt(ml/100)*100-n1 + 'px'
                this.thumbStyle = {
                  transition: '0.5s all ease',
                  transform: "translate(" + controlLength + ", 0)"
                }
                console.log(parseInt(ml/100))
                this.currentIndexch = -(parseInt(ml/100))
            }else if (type == 2) {
              var controlLength = (parseInt(ml/100)-1)*100-n1 + 'px'
              this.thumbStyle = {
                transition: '0.5s all ease',
                transform: "translate(" + controlLength + ", 0)"
              }
              console.log(-parseInt(ml/100))
              this.currentIndexch = -(parseInt(ml/100)-1)
            }
          }
        },70)
      }else{
        timer = setTimeout(()=>{
          n2 = this.$refs.scrollDiv2.getBoundingClientRect().left
          if(n1 == n2){
            if(n1%200 >= -100){
              type = 1
            }else if(n1%200 <-100){
              type = 2
            }
            if(type ==1){
                var controlLength = parseInt(ml/200)*200-n1 + 'px'
                this.thumbStyle = {
                  transition: '0.5s all ease',
                  transform: "translate(" + controlLength + ", 0)"
                }
                console.log(parseInt(ml/200))
                this.currentIndexch = -(parseInt(ml/200))
            }else if (type == 2) {
              var controlLength = (parseInt(ml/200)-1)*200-n1 + 'px'
              this.thumbStyle = {
                transition: '0.5s all ease',
                transform: "translate(" + controlLength + ", 0)"
              }
              console.log(-parseInt(ml/200))
              this.currentIndexch = -(parseInt(ml/200)-1)
            }
          }
        },70)
      }

    },
    clickThumb(index){
      var n1 = this.$refs.scrollDiv2.getBoundingClientRect().left

      if(this.screenWidth<1920){
        var moveDistance = (0-index)*100-n1 + 'px'
      }else{
        var moveDistance = (0-index)*200-n1 + 'px'
      }


      this.currentIndexch = index
      console.log(index)
      this.thumbStyle = {
        transition: '0.5s all ease',
        transform: "translate(" + moveDistance + ", 0)"
      }
    },
    handleScroll(){

      this.bottomHeight = this.$refs.bottomDiv.getBoundingClientRect().top
      // if(this.bottomHeight <=1200){
      //   this.$refs.fixButtonCon.style.display = 'none'
      // }else{
      //   this.$refs.fixButtonCon.style.display = 'flex'
      //   this.$refs.fixButtonCon.style.opacity = '0.3'
      // }

      this.$refs.fixButtonCon.style.display = 'flex'
      // this.$refs.fixButtonCon.style.opacity = '0.3'
      this.scrollHeight = document.body.scrollTop || document.documentElement.scrollTop
      // console.log(this.scrollHeight)
      if(this.scrollHeight <= 600){
        this.$refs.scrollTopBtn.style.opacity = '0'
        var currentHeight = (58.8 + 1/20*this.scrollHeight).toString() + "vh"
        this.$refs.fixButtonCon.style.top = currentHeight
      }else{
        this.$refs.scrollTopBtn.style.opacity = '1'
      }
      if(this.scrollHeight > 600){
      //if(this.scrollHeight > 600 && this.bottomHeight > 750){
        // this.$refs.scrollTopBtn.style.opacity = '0.3'
      }else{
        //this.$refs.scrollTopBtn.style.opacity = '1'
      }
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    gotoContact(){
      this.$router.push({
        path: '/contact'
      })
    }
  },
  watch: {
    currentIndex(val){
      this.$refs.caseColor.style.background = this.mainContent[val].color
      this.$nextTick(()=>{
        setTimeout(()=>{
          if(this.screenWidth<1920){
            if(this.mainContent[val].type == 1){
              this.$refs.caseDLogo.style.width = '80px'
            }else{
              this.$refs.caseDLogo2.style.width = '120px'
            }
          }else{
            if(this.mainContent[val].type == 1){
              this.$refs.caseDLogo.style.width = '160px'
            }else{
              this.$refs.caseDLogo2.style.width = '200px'
            }
          }

        },100)
      })
    }
  }
}
</script>

<style lang="css">
</style>
