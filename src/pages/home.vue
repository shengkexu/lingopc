<template>
  <div class="">
    <Menu/>
    <div class="caseCon" ref="homeCon">
      <div class="logo">
        <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
      </div>
      <div class="bigShowCon entranceAniR" @click="gotoDetail()" v-if="thumbArray.length !== 0">
        <div class="test1">
          <div class="caseConUpCon1">
            <p class="caseNumWordConP">NO.<span :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].id}}</span><span class="caseNumWordBlack"><span class="caseNumWord">|</span>{{thumbArray.length/2}}</span></p>
          </div>
          <div class="caseConUpCon2">
            <img v-if="thumbArray[currentContentIndex].type == 1" class="caseLogo" :src="thumbArray[currentContentIndex].logoB" alt="">
            <img v-if="thumbArray[currentContentIndex].type == 2" class="caseLogo2" :src="thumbArray[currentContentIndex].logoB" alt="">
          </div>
          <div class="caseConUpCon3">
            <p class="caseDesc" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].desc}}</p>
          </div>
        </div>
        <img class="caseImg" :src="thumbArray[currentContentIndex].bcImg" alt="bcImg" :class="{'changePosition' : isRotate}">
        <div class="imgBack" ref="imgBack"></div>
      </div>

      <!-- <img src="../assets/design.gif" alt="design" class="gifImg"> -->
      <div class="caseTitleCon" v-if="thumbArray.length !== 0" @click="gotoDetail()">
        <p class="caseTitle">{{thumbArray[currentContentIndex].name}}</p>
        <div class="caseConUpCon3B">
          <p class="caseDesc" :class="{'ani' : isRotate}">{{thumbArray[currentContentIndex].desc}}</p>
        </div>
        <p class="thumbTitle">点击查看详情<i class="iconfont thumbArrow">&#xe656;</i></p>
      </div>

      <div class="thumbConRe">
        <div class="thumbCon" v-if="thumbArray.length !== 0"  @scroll="onScroll()">
          <div class="thumbLine"></div>
          <div class="thumbConS" ref="scrollDiv">
            <img :style="thumbStyle" class="thumbImg" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index" @click="clickThumb(index)">
            <!-- <img v-if="isRotate" class="thumbImg" :style="thumbStyle" v-for="(thumb, index) in thumbArray" :src="thumb.url" :alt="thumb.id" :key="index"> -->
          </div>
          <div class="thumbLine2"></div>
        </div>
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
      isRunning : false
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
      }else{
        var n1 = this.$refs.scrollDiv.getBoundingClientRect().left
        this.currentIndex = index
        console.log(index, this.currentContentIndex)
        var moveDistance = (0-index)*100-n1 + 'px'
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
    },
    onResize(){
      this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      this.screenWidth = document.body.clientWidth
    },
    onScroll(){
      clearTimeout(timer)
      let n1 = this.$refs.scrollDiv.getBoundingClientRect().left
      let n2 = 0
      var ml = this.$refs.scrollDiv.getBoundingClientRect().left;
      var type = 0
      let timer = null
      var once = false

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
      },70)
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
      window.addEventListener('resize', that.onResize);
      that.currentContentIndex = that.currentIndex
      this.$refs.imgBack.style.background = this.thumbArray[this.currentContentIndex].color
      that.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight

      var heightString = (that.screenHeight).toString()
      console.log(heightString)
      that.$refs.homeCon.style.height = heightString + 'px'
      //this.screenHeight = window.innerHeight || document.body.innerHeight || document.documentElement.clientHeight
      //this.$refs.homeCon.style.height = this.screenHeight.toString()

      //自定义滑动div宽度
      var scrollWidth = that.thumbArray.length*100 + that.screenWidth - 100 + 'px'
      console.log(scrollWidth)
      that.$refs.scrollDiv.style.width = scrollWidth
    })
  },
  beforeUnmount(){
    window.removeEventListener('resize', this.onResize);
  },
  watch: {
    screenWidth(val){
      var scrollWidth = this.thumbArray.length*100 + val - 100 + 'px'
      this.$refs.scrollDiv.style.width = scrollWidth
    },
    screenHeight(val){
      this.screenHeight = val
      var heightString = val.toString()
      this.$refs.homeCon.style.height = heightString + 'px'
    }
  }
}
</script>

<style>
div::-webkit-scrollbar {
  width: 0;
}
</style>
