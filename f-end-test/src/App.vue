<template>
  <div id="app">
    <nav class="navbar is-info">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="#">
            LightHouse - Hildor
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#">
              Início
            </a>
            <a class="navbar-item" href="#">
              Relatórios
            </a>
            <a class="navbar-item" href="#">
              Pagamentos
            </a>
          </div>
        </div>
      </div>
    </nav>
    <br>
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <p class="menu-label">
              Geral
            </p>
            <ul class="menu-list">
              <li><a class="is-active">Dashboard</a></li>
              <li><a>Pagamentos</a></li>
            </ul>
            <p class="menu-label">
              Cadastros
            </p>
            <ul class="menu-list">
              <li><a>Usuários</a></li>
              <li><a>Eventos</a></li>
              <li><a>Ingressos</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
