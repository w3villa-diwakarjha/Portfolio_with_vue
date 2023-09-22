import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from '../src/auth/index'; // Import your Vuex store
import VueCookies from 'vue-cookies';
const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueCookies);
app.mount('#app');

// import Vue from 'vue';
// import App from './App.vue';

// new Vue({
//   render: (h) => h(App),
//   store, // Attach the Vuex store to the Vue instance
// }).$mount('#app');
