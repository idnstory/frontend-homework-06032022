import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import modules from 'store/modules';

Vue.use(Vuex);

export default new Store({
  modules
});
