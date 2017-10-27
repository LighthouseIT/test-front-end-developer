<template>
  <header class="dashboard-header">
    <div class="menu-bar" :class="{ '-opened': isDashboardMenuOpened }">
      <p>Menu</p>

      <button class="menu-toggle" @click="toggleDashboardMenu">
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>

    <div class="main-section">
      <button class="menu-toggle" @click="toggleDashboardMenu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <div class="title">
        <h1>Dashboard</h1>

        <form action="#" class="search-form">
          <!-- Não vou implementar o input pois não sei qual seria o layout -->
          <!-- <input type="search" name="query" id="search-field"> -->
          <button type="submit"><i class="material-icons">search</i></button>
        </form>
      </div>
    </div>

    <div class="user-section" :class="{ '-opened': isDashboardMenuOpened }">
      <div class="profile">
        <div class="picture">
          <img src="https://picsum.photos/50/50/?random" alt="Perfil">
        </div>

        <div class="info">
          <h2 class="name">Usuário..</h2>
          <p class="position">Gerente</p>
        </div>

        <div class="actions">
          <ul>
            <li>
              <a href="#" class="icon notifications" title="Notificações">
                <i class="material-icons">notifications</i>
                <i class="counter"><span>4</span></i>
              </a>
            </li>
            <li>
              <a href="#" class="icon messages" title="Mensagens">
                <i class="material-icons">chat</i>
                <i class="counter"><span>14</span></i>
              </a>
            </li>
            <li>
              <a href="#" class="icon settings" title="Configurações">
                <i class="material-icons">settings</i>
              </a>
            </li>
            <li>
              <a href="#" class="icon search" title="Busca">
                <i class="material-icons">search</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isDashboardMenuOpened']),
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapActions(['toggleDashboardMenu']),
  },
};
</script>
