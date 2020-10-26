import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  loadingState: true
}

const mutations = {
  changeLoading(state){
    state.loadingState = false
  },
  changeLoadingAl(state){
    state.loadingState = 0
  }
}

const actions = {
  changeLoadingState(context){
    context.commit('changeLoading')
  },
  changeLoadingStateAl(context){
    context.commit('changeLoadingAl')
  }
}


const store = new Vuex.Store({
  state,
  mutations,
  actions
});




export default store;
