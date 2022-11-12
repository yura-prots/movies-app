import Vuex from "vuex";
import movies from "./modules/movies";

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});

store.dispatch("initMoviesStore");

export default store;
