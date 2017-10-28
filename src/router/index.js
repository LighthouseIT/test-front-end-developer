import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import HomePage from '@/views/HomePage';
import CriarTarefaPage from '@/views/CriarTarefaPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      beforeEnter: (to, from, next) => {
        store.dispatch('updateEstimates');
        next();
      },
    },
    {
      path: '/criar-tarefa',
      name: 'CriarTarefaPage',
      component: CriarTarefaPage,
    },
  ],
});
