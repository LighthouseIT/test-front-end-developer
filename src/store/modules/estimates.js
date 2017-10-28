/* eslint-disable no-param-reassign */
import axios from 'axios';

const getters = {
  estimates(state) {
    return state.estimates;
  },
};

const mutations = {
  updateEstimates(state) {
    axios.get('https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json')
      .then(({ data }) => data)
      .then((estimates) => {
        setTimeout(() => {
          state.estimates = estimates;
        }, 4000); // setTimeout apenas pra simular o loading das informações na view
      });
  },
};

const actions = {
  updateEstimates({ commit }) {
    commit('updateEstimates');
  },
};

const state = {
  estimates: null,
};

export {
  state,
  getters,
  mutations,
  actions,
};
