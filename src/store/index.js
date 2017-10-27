import Vue from 'vue';
import Vuex from 'vuex';
import * as menu from './modules/menu';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    menu,
  },
});

export default store;
