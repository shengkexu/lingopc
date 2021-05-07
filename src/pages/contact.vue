<template>
  <div class="contact" ref="contactContainer">
    <Success v-if="isPop == true" v-on:changePop="changePopStatus()"/>
    <Menu/>
    <div class="logo" @click="gotoHome()">
      <img class="mainLogo" src="../assets/menu/logo-f.png" alt="凌言广告">
    </div>
    <div class="contactInfoCon entranceAniR" v-if="currentWidth<1440">
      <div class="contactLogoCon">
        <img class="contactLogo" src="../assets/menu/logo-f.png" alt="凌言广告">
      </div>
      <div class="contactWordCon">
        <p>我们致力于品牌设计、产品设计、UI/用户体验设计服务、品牌包装、视觉设计等。</p>
      </div>
      <div class="contactLine"></div>
      <div class="emailCon">
        <p class="ConTitle">Email</p>
        <p class="ConContent">Jessie@lingodesign.cn</p>
      </div>
      <div class="teleCon">
        <p class="ConTitle">Telephone</p>
        <p class="ConContent">18616588929</p>
      </div>
      <div class="contactBackImg">
        <img src="../assets/contact/back.png" alt="凌言广告">
      </div>
    </div>



    <div class="contactForm entranceContact">
      <div class="manCon" v-if="currentWidth<1440">
        <img class="manImg" src="../assets/contact/man.png" alt="凌言广告">
        <img class="handImg" src="../assets/contact/hand.png" alt="凌言广告">
        <img class="bubbleImg" src="../assets/contact/bubble.png" alt="凌言广告">
        <p class="bubbleText">Contact Us !</p>
      </div>
      <div class="formCon">
        <div class="formTitleCon">
          <p class="formTitle">联系我们</p>
          <div class="tipCon">
            <div class="orangeCircle"></div>
            <p>必填</p>
            <div class="greenCircle marginLeft16"></div>
            <p>选填</p>
          </div>
        </div>

        <form id="my-form" class="formContent" action="https://formspree.io/f/xqkgeoqq" method="POST" @submit.prevent="vertify()">
          <div class="nameCon">
            <input class="nameForm" type="text" name="name" v-model="name" @focus="changeName()" @blur="changeNameBack()" ref="nameForm">
            <label class="nameLable" :class="{'nameLableChange': isChangeName}">姓名</label>
            <div v-if="nameCheck == false" class="orangeCircle formInCircle"></div>
            <i v-if="nameCheck == true" class="iconfont formInIcon">&#xe66e;</i>
            <i v-if="nameCheck == 2" class="iconfont formInIconE">&#xe66d;</i>
            <p v-if="nameCheck == 2" class="formInPara">请填写姓名</p>
          </div>
          <div class="nameCon">
            <input class="nameForm" type="number" name="tele" v-model="tele" @focus="changeTele()" @blur="changeTeleBack()" ref="teleForm">
            <label class="nameLable" :class="{'nameLableChange': isChangeTele}">电话</label>
            <div v-if="teleCheck == 0" class="orangeCircle formInCircle"></div>
            <i v-if="teleCheck == 1" class="iconfont formInIcon">&#xe66e;</i>
            <i v-if="teleCheck == 2" class="iconfont formInIconE">&#xe66d;</i>
            <p v-if="teleCheck == 2" class="formInPara">请填写正确的号码</p>
          </div>
          <div class="nameCon">
            <input class="nameForm" type="text" name="email" v-model="email" @focus="changeEmail()" @blur="changeEmailBack()" ref="emailForm">
            <label class="nameLable" :class="{'nameLableChange': isChangeEmail}">邮箱</label>
            <div v-if="emailCheck == false" class="orangeCircle formInCircle"></div>
            <i v-if="emailCheck == true" class="iconfont formInIcon">&#xe66e;</i>
            <i v-if="emailCheck == 2" class="iconfont formInIconE">&#xe66d;</i>
            <p v-if="emailCheck == 2" class="formInPara">请填写正确的邮箱</p>
          </div>
          <div class="nameCon">
            <input class="nameForm" type="text" name="company" v-model="company" @focus="changeCom()" @blur="changeComBack()">
            <label class="nameLable" :class="{'nameLableChange': isChangeCom}">公司</label>
            <div class="greenCircle formInCircle"></div>
          </div>
          <div class="budgetCon">
            <p>预算 <span>(元)</span></p>
            <div class="greenCircle sliderCircle"></div>
            <el-slider
              name="slider"
              class="contactSlider"
              v-model="sliderValue"
              range
              tooltip-class="tool"
              :step="1000"
              :min="2000"
              :max="10000">
            </el-slider>
          </div>

          <div class="textCon" ref="textCon">
            <label class="nameLable2" :class="{'nameLableChange2': isChangeText}">信息</label>
            <!-- <div class="textCover"></div> -->
            <textarea class="textArea" name="content" v-model="mainContent" @focus="changeText()" @blur="changeTextBack()" ref="textForm"></textarea>

            <div v-if="textCheck == false" class="orangeCircle formInCircleT"></div>
            <i v-if="textCheck == true" class="iconfont formInIconT">&#xe66e;</i>
            <i v-if="textCheck == 2" class="iconfont formInIconET">&#xe66d;</i>
            <p v-if="textCheck == 2" class="formInParaT">请填写信息</p>
          </div>
          <button class="submitBtn" type="submit" name="button">发 送</button>
        </form>

      </div>
    </div>


    <div class="contactBigConR" v-if="currentWidth>=1440">
      <div class="manConB">
        <img class="bubbleImgB" src="../assets/contact/bubble.png" alt="凌言广告">
        <p class="bubbleTextB">Contact Us !</p>
        <img class="manImgB" src="../assets/contact/man.png" alt="凌言广告">
        <img class="handImgB" src="../assets/contact/hand.png" alt="凌言广告">
      </div>
      <div class="contactInfoCon entranceAniR">
        <div class="contactLogoCon">
          <img class="contactLogo" src="../assets/menu/logo-f.png" alt="凌言广告">
        </div>
        <div class="contactWordCon">
          <p>我们致力于品牌设计、产品设计、UI/用户体验设计服务、品牌包装、视觉设计等。</p>
        </div>
        <div class="contactLine"></div>
        <div class="emailCon">
          <p class="ConTitle">Email</p>
          <p class="ConContent">Jessie@lingodesign.cn</p>
        </div>
        <div class="teleCon">
          <p class="ConTitle">Telephone</p>
          <p class="ConContent">18616588929</p>
        </div>
        <div class="contactBackImg">
          <img src="../assets/contact/back.png" alt="凌言广告">
        </div>
      </div>

    </div>



  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Success from '../components/Success.vue'

export default {
  name: 'contact',
  components: {
    Menu,
    Success,
  },
  data(){
    return{
      isChangeName: false,
      nameCheck: false,
      isChangeTele: false,
      teleCheck:0,
      isChangeEmail: false,
      emailCheck: false,
      isChangeCom: false,
      isChangeText: false,
      textCheck: false,
      sliderValue: [2000, 6000],
      name: null,
      tele: null,
      email: null,
      company: null,
      data: null,
      mainContent: null,
      originHeight: window.innerHeight,
      keyHeight: null,
      isPop : false,
      isTruePop: false,
      currentWidth: document.body.clientWidth,
    }
  },
  methods: {
    gotoHome(){
      this.$router.push({
        path: '/'
      })
    },
    changeName(){
      console.log(this.nameCheck)
      this.isChangeName = true
      if(this.nameCheck == 2){
        this.$refs.nameForm.style.background = '#F1F6FA'
        this.nameCheck = false
      }

     },
    changeNameBack(){
      if(this.name == null || this.name == ''){
        this.isChangeName = false
        this.nameCheck = false
      }else{
        this.nameCheck = true
      }
    },
    changeTele(){this.isChangeTele = true},
    changeTeleBack(){
      if(this.tele == null || this.tele == ''){
        this.isChangeTele = false
        this.teleCheck = 0
        this.$refs.teleForm.style.background = '#F1F6FA'
      }else{
        if(this.tele.length == 11){
          this.teleCheck = 1
          this.$refs.teleForm.style.background = '#F1F6FA'
        }else{
          this.teleCheck = 2
          this.$refs.teleForm.style.background = '#FAF1F1'
        }

      }
    },
    changeEmail(){
      this.isChangeEmail = true
      if(this.emailCheck == 2){
        this.$refs.emailForm.style.background = '#F1F6FA'
        this.emailCheck = false
      }
    },
    changeEmailBack(){
      if(this.email == null || this.email == ''){
        this.isChangeEmail = false
        this.emailCheck = false
      }else{
        var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var strEmail=pattern.test(this.email);
        if(strEmail){
            //邮箱格式正确
            this.emailCheck = true
        }else{
            //邮箱格式不正确
            this.emailCheck = 2
            this.$refs.emailForm.style.background = '#FAF1F1'
        }
      }
    },
    changeCom(){this.isChangeCom = true},
    changeComBack(){
      if(this.company == null || this.company == ''){
        this.isChangeCom = false
      }
    },
    changeText(){
      // setTimeout(()=>{
      //   var now = window.innerHeight
      //   this.keyHeight = now-this.originHeight
      //   var top = this.keyHeight + 'px'
      //   this.$refs.contactContainer.style.marginTop = top
      // },500)
      //
      //
      //

      this.isChangeText = true
      if(this.textCheck == 2){
        this.$refs.textForm.style.background = '#F1F6FA'
        this.$refs.textCon.style.background = '#F1F6FA'
        this.textCheck = false
      }
    },
    changeTextBack(){
      //this.$refs.contactContainer.style.marginTop = '0'
      if(this.mainContent == null || this.mainContent == ''){
        this.isChangeText = false
        this.textCheck = false
      }else{
        this.textCheck = true
      }
    },
    vertify(){
      var form = document.getElementById("my-form")
      if(this.name !== null && this.name !== '' && this.tele !== null && this.tele !== '' && this.tele.length == 11 && this.mainContent !== null && this.mainContent !== '' && this.email !== null && this.email !== ''){
        this.data = new FormData(form)
        this.ajax(form.method, form.action, this.data)
      }else if(this.name == null || this.name == ''){
        this.nameCheck = 2
        this.$refs.nameForm.style.background = '#FAF1F1'
      }else if(this.tele == null || this.tele == '' || this.tele.length !== 11){
        this.teleCheck = 2
        this.$refs.teleForm.style.background = '#FAF1F1'
      }else if(this.email == null || this.email == '' || this.emailCheck !== true){
        this.emailCheck = 2
        this.$refs.emailForm.style.background = '#FAF1F1'
      }else if(this.mainContent == null || this. mainContent == ''){
        this.textCheck = 2
        this.$refs.textForm.style.background = '#FAF1F1'
        this.$refs.textCon.style.background = '#FAF1F1'
      }

    },
    ajax(method, url){
      var form = document.getElementById("my-form")
      var that = this
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          that.isPop = true
        } else {
          alert('noonono')
        }
      };
      xhr.send(that.data)
    },
    changePopStatus(){
      this.isPop = false
      location.reload()
    },
    onResize(){
      this.currentWidth = document.body.clientWidth
    }
  },
  beforeUnmount(){
    window.removeEventListener('resize', this.onResize);
  },
  mounted(){
    this.currentWidth = document.body.clientWidth
    window.addEventListener('resize', this.onResize);
  },
  watch: {
  }
}
</script>

<style lang="css">
</style>
