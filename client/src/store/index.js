import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
// 1. import the loginModule
import loginModule from "./module/loginModule";
export default new Vuex.Store({
  // 2.state,actions, mutations,module
  state: {},

  actions: {},

  mutations: {},

  modules: {
    loginModule,
  },
});
