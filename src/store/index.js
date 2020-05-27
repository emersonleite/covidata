import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  /* truques legais - strict: true  */
  strict: true,
  state: {
    dataCountry: {},
  },
  mutations: {
    UPDATE_DATA_COUNTRY(state, payload) {
      state.dataCountry = payload;
    },
  },
  actions: {},
  modules: {},
});
