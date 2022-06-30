import Vue from 'vue';
import App from './App.vue';
import router from 'router';
import 'scss/app.scss';
import store from 'store';

new Vue({
  router,
  store,
  render: (render) => {
    return render(App);
  }
}).$mount('#app');
