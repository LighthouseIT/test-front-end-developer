<template>
  <aside class="sidebar" :class="{ '-opened': isDashboardMenuOpened }">
    <nav class="menu">
      <ul>
        <li><router-link to="/" title="Home">Home</router-link></li>
        <li>
          <a href="#" title="Lista de Trabalho">Lista de Trabalho</a>

          <ul>
            <li><router-link to="/calendario" title="Calendário">Calendário</router-link></li>
            <li><router-link to="/atividades" title="Atividades">Atividades</router-link></li>
          </ul>
        </li>
        <li><router-link to="/ciclo-de-vendas" title="Ciclo de Vendas">Ciclo de vendas</router-link></li>
        <li><router-link to="/marketing" title="Marketing">Marketing</router-link></li>
        <li>
          <a href="#" title="Criar">+ Criar</a>

          <ul>
            <li><router-link to="/criar-tarefa" title="Tarefa">Tarefa</router-link></li>
            <li><router-link to="/criar-email" title="E-mail">E-mail</router-link></li>
            <li><router-link to="/criar-contato" title="Contato">Contato</router-link></li>
            <li><router-link to="/criar-lead" title="Lead">Lead</router-link></li>
            <li><router-link to="/criar-questao" title="Questão">Questão</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isDashboardMenuOpened']),
  },
  data() {
    return {

    };
  },
};
</script>
