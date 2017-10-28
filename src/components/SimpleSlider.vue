<template>
  <div class="slider">
    <div class="items">
      <slot></slot>
    </div>

    <div class="dots">
      <button
        type="button"
        v-for="(item, index) in items"
        :key="index"
        :class="{ '-current': item.classList.contains('-active') }"
        @click="changeToItem($event, index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    changeToItem(event, index) {
      this.removeDotsClasses();
      event.currentTarget.classList.add('-current');
      this.removeActiveClasses();
      this.items[index].classList.add('-active');
    },

    removeActiveClasses() {
      [].forEach.call(this.items, (el) => {
        el.classList.remove('-active');
      });
    },

    setInitialItem() {
      this.removeActiveClasses();
      this.items[0].classList.add('-active');
    },

    removeDotsClasses() {
      [].forEach.call(this.$el.querySelectorAll('.dots button'), (el) => {
        el.classList.remove('-current');
      });
    },
  },
  mounted() {
    this.items = this.$children.map(component => component.$el);
    this.setInitialItem();
  },
};
</script>
