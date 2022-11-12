import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_top";

const moviesStore = {
  namespaced: true,

  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
  },

  getters: {
    slicedIDs:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },

  mutations: {},

  actions: {
    async fetchMovies({ getters }) {
      const { slicedIDs, currentPage, moviesPerPage } = getters;
      const from = currentPage * moviesPerPage - moviesPerPage;
      const to = currentPage * moviesPerPage;
      const moviesToFetch = slicedIDs(from, to);
      console.log(moviesToFetch);

      const response = await axios.get("/", {
        params: {
          i: "tt3896198",
        },
      });
      console.log(response);
    },
  },
};

export default moviesStore;
