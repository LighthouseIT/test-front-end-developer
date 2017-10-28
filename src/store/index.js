import Vue from 'vue';
import Vuex from 'vuex';
import * as menu from './modules/menu';
import * as estimates from './modules/estimates';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    menu,
    estimates,
  },
});

export default store;
