import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage';
import CriarTarefaPage from '@/views/CriarTarefaPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/criar-tarefa',
      name: 'CriarTarefaPage',
      component: CriarTarefaPage,
    },
  ],
});
