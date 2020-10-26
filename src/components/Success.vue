<template>
  <div class="successCon">
    <div class="successInfoCon">
      <div class="successTextCon">
        <i class="iconfont successOk">&#xe66e;</i>
        <p class="successTitle">发送成功</p>
        <p class="successText">信息已发送成功，我们预计在1-5个工作日内会与您取得联系，请耐心等待</p>
      </div>
      <i class="iconfont successClose" @click="sendToContact">&#xe66c;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'success',
  data(){
    return{

    }
  },
  methods: {
    sendToContact(){
      this.$emit('changePop', false)
    }
  }
}
</script>

<style lang="css">
.successCon{
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.successInfoCon{
  position: relative;
  width: 100%;
  height: 100vh;
}
.successTextCon{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -167.5px;
  margin-top: -110.5px;
  width: 335px;
  height: 221px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 12px 40px;
}
.successOk{
  color: rgba(74, 212, 8, 1);
  font-size: 60px;
  top: 50%;
  left: 50%;
}
.successClose{
  font-size: 30px;
  top: 50%;
  position: absolute;
  margin-top: 130px;
  margin-left: -15px;
  color: white;
}
.successTitle{
  font-size: 18px;
  font-family: aliFontM;
  color: #333333
}
.successText{
  font-size: 13px;
  font-family: OPPOSans-R;
  font-weight: normal;
  color: #999999;
  line-height: 20px;
}
</style>
