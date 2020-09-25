<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/">asd</router-link>
    <router-link to="/case">case</router-link> -->
    <!-- <Home/> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Home from './pages/home.vue'
// import Case from './pages/case.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
