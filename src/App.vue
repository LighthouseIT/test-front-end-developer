<template>
  <div id="app">
    <the-header/>
    <div class="content-wrapper">
      <the-sidebar/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheSidebar from '@/components/TheSidebar';

export default {
  name: 'app',
  components: {
    TheHeader,
    TheSidebar,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
