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

    <article class="card -chart-card">
      <header class="actions-header">
        <ul>
          <li><button type="button"><i class="material-icons">insert_chart</i><span>Gráfico</span></button></li>
          <li>
            <button type="button"><i class="material-icons">show_chart</i><span>Tipo</span></button>

            <ul>
              <li><button type="button">Coluna</button></li>
              <li><button type="button">Linha</button></li>
              <li><button type="button">Torta</button></li>
              <li><button type="button">Coluna Agrupada</button></li>
            </ul>
          </li>
          <li><button type="button"><i class="material-icons">import_export</i><span>Trocar sequência</span></button></li>
          <li><button type="button"><i class="material-icons">picture_as_pdf</i><span>Exportar PDF</span></button></li>
          <li><button type="button"><i class="material-icons">close</i></button></li>
        </ul>
      </header>

      <div class="content">
        <the-chart
          :chart-data="chartData"
          :options="chartOptions"
          :width="1000"
          :height="300"
        ></the-chart>
      </div>
    </article>
  </the-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ThePage from '@/components/ThePage';
import TheChart from '@/components/TheChart';
import SimpleSlider from '@/components/SimpleSlider';
import SimpleSliderItem from '@/components/SimpleSliderItem';
import LoadingDots from '@/components/LoadingDots';

export default {
  components: {
    ThePage,
    TheChart,
    SimpleSlider,
    SimpleSliderItem,
    LoadingDots,
  },
  computed: {
    ...mapGetters(['estimates', 'estimatesChartData']),
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
  methods: {
    ...mapActions(['updateEstimatesChartData']),
  },
  data() {
    return {
      chartData: null,

      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: 'rgba(200, 200, 200, .5)',
          titleFontColor: '#000',
          bodyFontColor: '#000',
          xPadding: 15,
          yPadding: 15,
          borderColor: '#000',
          callbacks: {
            title() {
              return null;
            },
          },
        },
        elements: {
          point: {
            radius: 6,
            backgroundColor: '#fff',
            hoverRadius: 6,
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 14,
            },
            gridLines: {
              display: true,
              borderDash: [1, 1],
              drawTicks: true,
              borderDashOffset: 1,
              tickMarkLength: 20,
            },
          }],
          yAxes: [{
            gridLines: {
              display: true,
              borderDash: [1, 1],
              drawTicks: true,
              borderDashOffset: 1,
              tickMarkLength: 20,
            },
          }],
        },
      },
    };
  },
  mounted() {
    this.updateEstimatesChartData()
      .then(() => {
        this.chartData = {
          labels: this.estimatesChartData.days,
          datasets: [{
            data: this.estimatesChartData.values,
            borderColor: ['#2fc1f9'],
            borderWidth: 2,
            fill: true,
          }],
        };
      });
  },
};
</script>
