import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import HomePage from '@/views/HomePage';
import CriarTarefaPage from '@/views/CriarTarefaPage';
import CriarContatoPage from '@/views/CriarContatoPage';
import CriarEmailPage from '@/views/CriarEmailPage';
import CriarLeadPage from '@/views/CriarLeadPage';
import CriarQuestaoPage from '@/views/CriarQuestaoPage';
import AtividadesPage from '@/views/AtividadesPage';
import CalendarioPage from '@/views/CalendarioPage';
import CicloDeVendaPage from '@/views/CicloDeVendaPage';
import MarketingPage from '@/views/MarketingPage';

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
      path: '/atividades',
      name: 'AtividadesPage',
      component: AtividadesPage,
    },
    {
      path: '/calendario',
      name: 'CalendarioPage',
      component: CalendarioPage,
    },
    {
      path: '/ciclo-de-vendas',
      name: 'CicloDeVendaPage',
      component: CicloDeVendaPage,
    },
    {
      path: '/marketing',
      name: 'MarketingPage',
      component: MarketingPage,
    },
    {
      path: '/criar-tarefa',
      name: 'CriarTarefaPage',
      component: CriarTarefaPage,
    },
    {
      path: '/criar-contato',
      name: 'CriarContatoPage',
      component: CriarContatoPage,
    },
    {
      path: '/criar-email',
      name: 'CriarEmailPage',
      component: CriarEmailPage,
    },
    {
      path: '/criar-lead',
      name: 'CriarLeadPage',
      component: CriarLeadPage,
    },
    {
      path: '/criar-questao',
      name: 'CriarQuestaoPage',
      component: CriarQuestaoPage,
    },
    {
      path: '/criar-tarefa',
      name: 'CriarTarefaPage',
      component: CriarTarefaPage,
    },
  ],
});
