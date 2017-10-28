<template>
  <the-page>
    <article class="card -estimates-card">
      <header class="header">
        <h1>Ganhos estimados</h1>
        <p>Código do Cliente: 1234 1234 1234 1234</p>
      </header>

      <div class="content">
        <simple-slider>
          <simple-slider-item>
            <div class="estimate -highlight">
              <h3>Total</h3>
              <transition name="fade" mode="out-in">
                <p key="dots-1" v-if="!estimates"><loading-dots/></p>
                <p key="price-1" v-else>{{ totalPrice }}</p>
              </transition>
            </div>
            <div class="estimate">
              <h3>Para o dia atual</h3>
              <transition name="fade" mode="out-in">
                <p key="dots-2" v-if="!estimates"><loading-dots/></p>
                <p key="price-2" v-else>{{ currentDayPrice }}</p>
              </transition>
            </div>
          </simple-slider-item>

          <simple-slider-item>
            <div class="estimate">
              <h3>Durante o dia anterior</h3>
              <transition name="fade" mode="out-in">
                <p key="dots-3" v-if="!estimates"><loading-dots/></p>
                <p key="price-3" v-else>{{ lastDayPrice }}</p>
              </transition>
            </div>
            <div class="estimate">
              <h3>Para o mês atual</h3>
              <transition name="fade" mode="out-in">
                <p key="dots-4" v-if="!estimates"><loading-dots/></p>
                <p key="price-4" v-else>{{ currentMonthPrice }}</p>
              </transition>
            </div>
          </simple-slider-item>

          <simple-slider-item>
            <div class="estimate">
              <h3>Mês passado</h3>
              <transition name="fade" mode="out-in">
                <p key="dots-5" v-if="!estimates"><loading-dots/></p>
                <p key="price-5" v-else>{{ lastMonthPrice }}</p>
              </transition>
            </div>
          </simple-slider-item>
        </simple-slider>
      </div>
    </article>
  </the-page>
</template>

<script>
import { mapGetters } from 'vuex';
import ThePage from '@/components/ThePage';
import SimpleSlider from '@/components/SimpleSlider';
import SimpleSliderItem from '@/components/SimpleSliderItem';
import LoadingDots from '@/components/LoadingDots';

export default {
  components: {
    ThePage,
    SimpleSlider,
    SimpleSliderItem,
    LoadingDots,
  },
  computed: {
    ...mapGetters(['estimates']),
    totalPrice() {
      return `R$ ${this.estimates.total}`;
    },
    currentDayPrice() {
      return `R$ ${this.estimates.currentDay}`;
    },
    currentMonthPrice() {
      return `R$ ${this.estimates.currentMonth}`;
    },
    lastDayPrice() {
      return `R$ ${this.estimates.lastDay}`;
    },
    lastMonthPrice() {
      return `R$ ${this.estimates.lastMonth}`;
    },
  },
};
</script>
