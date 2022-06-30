const state = {
  box: {
    items: Array.apply(null, new Array(12)).map((item, idx) => {
      return {
        name: 'box - ' + (idx + 1)
      };
    }),
    numOfColumns: 1
  }
};

const getters = {};
const actions = {};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
