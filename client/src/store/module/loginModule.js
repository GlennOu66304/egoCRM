export default {
  namespaced: true,
  state: {
    //   users Object:user,token
    userInfo: {
      user: "",
      token: "",
    },
  },

  actions: {},

  mutations: {
    //   function to update the state
    setUser(state, payload) {
      state.userInfo = payload;
    },

    logoutUser(state) {
      state.userInfo = {
        user: "",
        token: "",
      };
    },
  },

  getters: {},
};
