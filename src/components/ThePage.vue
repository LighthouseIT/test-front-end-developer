<template>
  <div class="page" :class="{ '-floated-right': isDashboardMenuOpened }">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isDashboardMenuOpened']),
  },
};
</script>
