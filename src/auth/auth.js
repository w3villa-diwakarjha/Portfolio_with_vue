// import Vue from 'vue';
// import router from '../router/router'
const state={
  isAuthenticated: false,
};

const mutations={
    setAuthentication(state,isAuthenticated){
        state.isAuthenticated=isAuthenticated;
        localStorage.setItem('isAuthenticated', isAuthenticated.toString());
    },
};

const actions = {
    async login({ commit }) {
      // Perform your login logic here
      // After successful login, commit the mutation to set isAuthenticated to true
      console.log("Hello");
      commit('setAuthentication', true);
    },
    async logout({ commit }) {
      console.log("Inside logout")
      // Vue.$cookies.remove('token');
      commit('setAuthentication', false);
      localStorage.removeItem('isAuthenticated');
      // this.$router.push("/user/login");
    },
  };

  const localStorageIsAuthenticated=localStorage.getItem('isAuthenticated');
  if(localStorageIsAuthenticated)
  {
    state.isAuthenticated=localStorageIsAuthenticated==='true';
  }

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}
