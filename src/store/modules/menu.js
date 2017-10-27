/* eslint-disable no-param-reassign */

const getters = {
  isDashboardMenuOpened(state) {
    return state.isDashboardMenuOpened;
  },
};

const mutations = {
  toggleDashboardMenu(state) {
    state.isDashboardMenuOpened = !state.isDashboardMenuOpened;
  },
  closeDashboardMenu(state) {
    state.isDashboardMenuOpened = false;
  },
};

const actions = {
  toggleDashboardMenu({ commit }) {
    commit('toggleDashboardMenu');
  },
  closeDashboardMenu({ commit }) {
    commit('closeDashboardMenu');
  },
};

const state = {
  isDashboardMenuOpened: false,
};

export {
  state,
  getters,
  mutations,
  actions,
};
