<template>
  <div class="root-el">
    <section class="info-tiles">
      <h1 class="title">Ganhos estimados</h1>
      <div class="tile is-ancestor has-text-centered">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ estimated.currentDay }}</p>
            <p class="subtitle">Hoje</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ estimated.currentMonth }}</p>
            <p class="subtitle">Este Mês</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ estimated.lastDay }}</p>
            <p class="subtitle">Ontem</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ estimated.lastMonth }}</p>
            <p class="subtitle">Último Mês</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ estimated.total }}</p>
            <p class="subtitle">Total</p>
          </article>
        </div>
      </div>
    </section>
    <br>
    <section>
      <line-chart :data="graph"></line-chart>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'Dashboard',
  data() {
    return {
      estimated: {
        currentDay: 0,
        currentMonth: 0,
        lastDay: 0,
        lastMonth: 0,
        total: 0
      },
      graph: {}
    };
  },
  methods: {
    getEstimated() {
      const vm = this
      axios.get('https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json')
      .then(response => {
        vm.estimated = response.data
        let obj = vm.estimated
        for (var key in obj){
          obj[key] = 'R$ ' + obj[key].toFixed(2).replace('.',',').toString()
        }
      })
      .catch(e => {
        console.log(e)
      })
    },
    getGraph() {
      const vm = this
      axios.get('https://lighthouse-test-front-end.firebaseio.com/amount.json')
      .then(response => {
        let graphValues = []
        for (let i = 0; i < response.data.values.length; i++) {
          graphValues.push([response.data.days[i], response.data.values[i]])
        }
        vm.graph = graphValues
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  mounted() {
    this.getEstimated()
    this.getGraph()
  },
}
</script>

<style scoped>
p.title {
  font-size: 1.5em;
}
</style>
