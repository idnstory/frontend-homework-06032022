<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import { Header, Gnb } from 'components';
import axios from 'axios';
import VueAxios from 'vue-axios';
import API  from 'common/api';

export default {
  name: 'App',
  created() {
    Vue.component('Header', Header);
    Vue.component('Gnb', Gnb);
    Vue.use(VueAxios, axios);
    Vue.prototype.API = new API();
  }
};
</script>
