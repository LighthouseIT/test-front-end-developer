/* eslint-disable no-param-reassign */
import axios from 'axios';

const getters = {
  estimates(state) {
    return state.estimates;
  },
  estimatesChartData(state) {
    return state.estimatesChartData;
  },
};

const mutations = {
  updateEstimates(state, estimates) {
    state.estimates = estimates;
  },
  updateEstimatesChartData(state, chartData) {
    state.estimatesChartData = chartData;
  },
};

const actions = {
  updateEstimates({ commit }) {
    // setTimeout apenas pra simular o loading das informações na view
    axios.get('https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json')
      .then(({ data }) => data)
      .then((estimates) => {
        setTimeout(() => commit('updateEstimates', estimates), 4000);
      });
  },
  updateEstimatesChartData({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('https://lighthouse-test-front-end.firebaseio.com/amount.json')
        .then(({ data }) => data)
        .then((chartData) => {
          commit('updateEstimatesChartData', chartData);
          resolve();
        })
        .catch(err => reject(err));
    });
  },
};

const state = {
  estimates: null,
  estimatesChartData: null,
};

export {
  state,
  getters,
  mutations,
  actions,
};
