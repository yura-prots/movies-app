import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies() {
      const response = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=29c1b5e3"
      );
      console.log(response);
    },
  },
};

export default moviesStore;
