<template>
  <div class="contact">
    <Menu/>
    <div class="logo">
      <img class="mainLogo" src="../assets/menu/logo-f.png" alt="logo">
    </div>
    <div class="contactInfoCon">
      <div class="contactLogoCon">
        <img class="contactLogo" src="../assets/menu/logo-f.png" alt="logo">
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
        <p class="ConContent">18800539408</p>
      </div>
      <div class="contactBackImg">
        <img src="../assets/contact/back.png" alt="back">
      </div>
    </div>
    <div class="contactForm">
      <div class="manCon">

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

        <form id="my-form" class="formContent" action="https://formspree.io/f/xqkgeoqq" method="POST" target="nm_iframe" @submit.prevent="vertify()">
          <div class="nameCon">
            <input class="nameForm" type="text" name="name" v-model="name" @focus="changeName()" @blur="changeNameBack()" ref="nameForm">
            <label class="nameLable" :class="{'nameLableChange': isChangeName}">姓名</label>
            <div v-if="!nameCheck" class="orangeCircle formInCircle"></div>
            <i v-if="nameCheck" class="iconfont formInIcon">&#xe66e;</i>
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
            <div v-if="!emailCheck" class="orangeCircle formInCircle"></div>
            <i v-if="emailCheck" class="iconfont formInIcon">&#xe66e;</i>
          </div>
          <div class="nameCon">
            <input class="nameForm" type="text" name="company" v-model="company" @focus="changeCom()" @blur="changeComBack()">
            <label class="nameLable" :class="{'nameLableChange': isChangeCom}">公司</label>
            <div class="greenCircle formInCircle"></div>
          </div>
          <div class="budgetCon">
            <p>预算(元)</p>
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

          <div class="textCon">
            <textarea class="textArea" name="content" v-model="mainContent" @focus="changeText()" @blur="changeTextBack()" ref="textForm"></textarea>
            <label class="nameLable2" :class="{'nameLableChange2': isChangeText}">信息</label>
            <div v-if="!textCheck" class="orangeCircle formInCircle"></div>
            <i v-if="textCheck" class="iconfont formInIcon">&#xe66e;</i>
          </div>
          <button type="submit" name="button">sssss</button>
        </form>
        <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>

        <div class="submitButton">
          <p>发送</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'contact',
  components: {
    Menu
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
    }
  },
  methods: {
    changeName(){this.isChangeName = true},
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
    changeEmail(){this.isChangeEmail = true},
    changeEmailBack(){
      if(this.email == null || this.email == ''){
        this.isChangeEmail = false
        this.emailCheck = false
      }else{
        this.emailCheck = true
      }
    },
    changeCom(){this.isChangeCom = true},
    changeComBack(){
      if(this.company == null || this.company == ''){
        this.isChangeCom = false
      }
    },
    changeText(){this.isChangeText = true},
    changeTextBack(){
      if(this.mainContent == null || this.mainContent == ''){
        this.isChangeText = false
        this.textCheck = false
      }else{
        this.textCheck = true
      }
    },
    vertify(){
      var form = document.getElementById("my-form")
      if(this.name !== null && this.name !== '' && this.tele !== null && this.tele !== '' && this.mainContent !== null && this.mainContent !== '' && this.email !== null && this.email !== ''){
        this.data = new FormData(form)
        this.ajax(form.method, form.action, this.data)
      }else if(this.name == null || this.name == ''){
        this.nameCheck = 2
        this.$refs.nameForm.style.background = '#FAF1F1'
      }

    },
    ajax(method, url){
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          alert('success')
        } else {
          alert('noonono')
        }
      };
      xhr.send(this.data)
    }
  },
  watch: {
    sliderValue(val){
      //console.log(val)
    },
    name(val){
      if(val !== null){

      }
    }
  }
}
</script>

<style lang="css">
</style>
