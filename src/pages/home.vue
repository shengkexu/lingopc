<template>
  <div class="">
    <Menu/>
    <div class="caseCon" ref="homeCon" @mousewheel="wheelInit($event)">
      <div class="logo">
        <img class="mainLogo" src="../assets/menu/logo-f.png" alt="凌言广告">
      </div>
      <div class="bigShowCon" :class="{'entranceAniR' : loadingEnd}" @click="gotoDetail()" v-if="thumbArray.length !== 0">
        <div class="test1">
          <div class="caseConUpCon1">
            <p class="caseNumWordConP">NO.<span :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>{{thumbArray.length/2}}</span></p>
          </div>
          <div class="caseConUpCon2">
            <img v-if="thumbArray[currentContentIndex].type == 1" class="caseLogo" :src="thumbArray[currentContentIndex].logoB" alt="凌言广告">
            <img v-if="thumbArray[currentContentIndex].type == 2" class="caseLogo2" :src="thumbArray[currentContentIndex].logoB" alt="凌言广告">
          </div>
          <div class="caseConUpCon3">
            <p class="caseDesc1" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].desc}}</p>
          </div>
        </div>
        <img class="caseImg" :src="thumbArray[currentContentIndex].bcImg" alt="凌言广告" :class="{'changePosition' : isRotate}">
        <div class="imgBack" ref="imgBack"></div>
      </div>

      <!-- <img v-if="screenWidth>1024" src="../assets/homegif.gif" alt="design" class="gifImg"  :class="{'entranceAniOp' : loadingEnd}"> -->
      <div class="caseTitleCon" :class="{'entranceAniR' : loadingEnd}" v-if="thumbArray.length !== 0" @click="gotoDetail()">
        <p class="caseTitle">{{thumbArray[currentContentIndex].name}}</p>
        <div class="caseConUpCon3B">
          <p class="caseDesc2" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].desc}}</p>
        </div>
        <div class="thumbTitleCon">
          <p class="thumbTitle">点击查看详情</p>
          <i class="iconfont thumbArrow">&#xe656;</i>
        </div>
      </div>

      <div class="thumbConRe" :class="{'entranceAniOp' : loadingEnd}">
        <div class="wheelCon infiniteAni" v-if="screenWidth>1024">
          <p><i class="iconfont">&#xe65b;</i>请滑动鼠标</p>
        </div>
        <div class="thumbCon" v-if="thumbArray.length !== 0"  @scroll="onScroll()">
          <div class="thumbLine"></div>
          <div class="thumbConS" ref="scrollDiv">
            <img :style="thumbStyle" class="thumbImg" v-for="(thumb, index) in thumbArray" :src="thumb.url" alt="凌言广告" :key="index" @click="clickThumb(index)">
            <!-- <img v-if="isRotate" class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index"> -->
          </div>
          <div class="thumbLine2"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState,mapActions} from 'vuex'
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
      loadingEnd: false,
      step : 0,
      loading: true,
      percentage: 0,
      isRotate: false,
      isColor: false,
      thumbStyle: {},
      scrollLeft: 0,
      currentIndex: 0,
      currentContentIndex: 0,
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.innerHeight,
      thumbArrayS: [],
      thumbArray: thumbArrayTest,
      homeImgArray: homeImg,
      isRunning : false,
      clickMove: 0,
    }
  },
  methods:{
    ...mapActions(['changeLoadingStateAl']),
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
      if(this.screenWidth<1920){
        if(index == this.currentIndex){
          this.isRotate = false
        }else{
          var n1 = this.$refs.scrollDiv.getBoundingClientRect().left
          this.currentIndex = index
          console.log(index, this.currentContentIndex)
          this.clickMove = (0-index)*100

          // var moveDistance = (0-index)*100 + 'px'
          var moveDistance = (0-index)*100 - n1 + 'px'
          this.thumbStyle = {
            transition: '0.5s all ease',
            transform: "translate(" + moveDistance + ", 0)"
          }

          setTimeout(()=>{
            this.currentContentIndex = this.currentIndex
            this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
          },280)

          if(this.isRotate == true){
            console.log('antialiased')
          }else{
            this.isRotate = true
            this.isColor = true
            setTimeout(()=>{
              this.isRotate = false
              this.isColor = false
            },700)
          }
        }
      }else{
        if(index == this.currentIndex){
          this.isRotate = false
        }else{
          var n1 = this.$refs.scrollDiv.getBoundingClientRect().left
          this.currentIndex = index
          console.log(index, this.currentContentIndex)
          this.clickMove = (0-index)*200
          var moveDistance = (0-index)*200 + 'px'
          this.thumbStyle = {
            transition: '0.5s all ease',
            transform: "translate(" + moveDistance + ", 0)"
          }

          setTimeout(()=>{
            this.currentContentIndex = this.currentIndex
            this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
          },280)

          if(this.isRotate == true){
            console.log('antialiased')
          }else{
            this.isRotate = true
            this.isColor = true
            setTimeout(()=>{
              this.isRotate = false
              this.isColor = false
            },700)
          }
        }
      }
      this.step = -index
      console.log(this.clickMove)
    },
    onResize(){
      this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      this.screenWidth = document.body.clientWidth
      // if(this.screenWidth<1920){
      //   var controlLength = '-1200px'
      // }else{
      //   var controlLength = '-2400px'
      // }
      //
      // this.thumbStyle = {
      //   transition: '0.5s all ease',
      //   transform: "translate(" + controlLength + ", 0)"
      // }
    },
    onScroll(){
      clearTimeout(timer)
      let n1 = this.$refs.scrollDiv.getBoundingClientRect().left
      let n2 = 0
      var ml = this.$refs.scrollDiv.getBoundingClientRect().left;
      var type = 0
      let timer = null
      var once = false

      if(this.screenWidth<1920){
        timer = setTimeout(()=>{
          n2 = this.$refs.scrollDiv.getBoundingClientRect().left
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
                setTimeout(()=>{
                  this.currentContentIndex = -(parseInt(ml/100))
                  this.currentIndex = this.currentContentIndex
                  this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
                },280)
                if(this.isRotate == true){
                  console.log('antialiased')
                }else{
                  this.isRotate = true
                  this.isColor = true
                  setTimeout(()=>{
                    this.isRotate = false
                    this.isColor = false
                  },700)
                }
            }else if (type == 2) {
              var controlLength = (parseInt(ml/100)-1)*100-n1 + 'px'
              this.thumbStyle = {
                transition: '0.5s all ease',
                transform: "translate(" + controlLength + ", 0)"
              }
              console.log(parseInt(ml/100))

              setTimeout(()=>{
                this.currentContentIndex = -(parseInt(ml/100)-1)
                this.currentIndex = this.currentContentIndex
                this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
              },280)
              if(this.isRotate == true){
                console.log('antialiased')
              }else{
                this.isRotate = true
                this.isColor = true
                setTimeout(()=>{
                  this.isRotate = false
                  this.isColor = false
                },700)
              }
            }
          }
        },30)
      }else{
        timer = setTimeout(()=>{
          n2 = this.$refs.scrollDiv.getBoundingClientRect().left
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
                setTimeout(()=>{
                  this.currentContentIndex = -(parseInt(ml/200))
                  this.currentIndex = this.currentContentIndex
                  this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
                },280)
                if(this.isRotate == true){
                  console.log('antialiased')
                }else{
                  this.isRotate = true
                  this.isColor = true
                  setTimeout(()=>{
                    this.isRotate = false
                    this.isColor = false
                  },700)
                }
            }else if (type == 2) {
              var controlLength = (parseInt(ml/200)-1)*200-n1 + 'px'
              this.thumbStyle = {
                transition: '0.5s all ease',
                transform: "translate(" + controlLength + ", 0)"
              }
              console.log(parseInt(ml/200))

              setTimeout(()=>{
                this.currentContentIndex = -(parseInt(ml/200)-1)
                this.currentIndex = this.currentContentIndex
                this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
              },280)
              if(this.isRotate == true){
                console.log('antialiased')
              }else{
                this.isRotate = true
                this.isColor = true
                setTimeout(()=>{
                  this.isRotate = false
                  this.isColor = false
                },700)
              }
            }
          }
        },30)
      }

    },
    gotoDetail(){
      if(this.isRotate == false){
        this.$router.push({
          path: `/case/${this.thumbArray[this.currentContentIndex].id}`
        })
      }
    },
    wheelInit($event){
      this.step = -this.currentIndex
      var backOrFor = event.wheelDelta || event.detail
      if(this.screenWidth>=1024){
        if(backOrFor>0){
          if(this.step<0){
            this.step = this.step+1
            console.log(this.step)
          }
        }else{
          if(this.step>-(this.thumbArray.length-1)){
            this.step = this.step-1
            console.log(this.step)
          }
        }
        if(this.screenWidth>=1024 && this.screenWidth<1920){
          var wheelLength = this.step*100 + 'px'
        }else{
          var wheelLength = this.step*200 + 'px'
        }
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + wheelLength + ", 0)"
        }

        setTimeout(()=>{
          this.currentContentIndex = -this.step
          this.currentIndex = this.currentContentIndex
          this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
        },280)
        if(this.isRotate == true){
          console.log('antialiased')
        }else{
          this.isRotate = true
          this.isColor = true
          setTimeout(()=>{
            this.isRotate = false
            this.isColor = false
          },700)
        }
      }

    }
  },
  mounted(){
    this.$nextTick(() => {
      var that = this
      //判断loading结束
      if(that.$store.state.loadingState == 0){
        that.loadingEnd = true
      }
      // if(that.$store.state.loadingState == false){
      //
      //   setTimeout(()=>{
      //     that.entranceAniOp = {animation: 'fadeIn', animationDuration: '2s'}
      //   },100)
      // }
      window.addEventListener('resize', that.onResize);


      //window.addEventListener('mousewheel', that.wheelInit);
      that.currentContentIndex = that.currentIndex
      this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
      that.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight

      var heightString = (that.screenHeight).toString()
      console.log(heightString)
      that.$refs.homeCon.style.height = heightString + 'px'
      //this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      //this.$refs.homeCon.style.height = this.screenHeight.toString()

      //自定义滑动div宽度
      if(that.screenWidth<1920){
        var scrollWidth = that.thumbArray.length*100 + that.screenWidth - 100 + 'px'
        console.log(scrollWidth)
        that.$refs.scrollDiv.style.width = scrollWidth
        var moveDistance = '0px'
        this.currentIndex = 0
        this.currentContentIndex = 0
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + moveDistance + ", 0)"
        }
      }else{
        var scrollWidth = that.thumbArray.length*200 + that.screenWidth - 200 + 'px'
        console.log(scrollWidth)
        that.$refs.scrollDiv.style.width = scrollWidth
        var moveDistance = '-2400px'
        this.currentIndex = 12
        this.currentContentIndex = 12
        this.thumbStyle = {
          transition: '0.5s all ease',
          transform: "translate(" + moveDistance + ", 0)"
        }
      }

      var n2 = that.$refs.scrollDiv.getBoundingClientRect().left
    })
  },
  beforeUnmount(){
    window.removeEventListener('resize', this.onResize);
  },
  watch: {
    screenWidth(val){
      //this.screenWidth = val
      if(val<1920){
        var scrollWidth = this.thumbArray.length*100 + val - 100 + 'px'
      }else {
        var scrollWidth = this.thumbArray.length*200 + val - 200 + 'px'
      }

      this.$refs.scrollDiv.style.width = scrollWidth
    },
    screenHeight(val){
      this.screenHeight = val
      var heightString = val.toString()
      this.$refs.homeCon.style.height = heightString + 'px'
    },
    '$store.state.loadingState': function(){
      if(this.$store.state.loadingState == false){
          this.loadingEnd = true
          this.$store.commit('changeLoadingStateAl')
      }
    }
  }
}
</script>

<style>
div::-webkit-scrollbar {
  width: 0;
}
</style>
