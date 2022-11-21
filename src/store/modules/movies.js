import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_top";
import mutations from "../mutations";

function normalizeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;

    return acc;
  }, {});
}

const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,

  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
  },

  getters: {
    moviesList: ({ movies }) => movies,
    slicedIDs:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    moviesLength: ({ top250IDs }) => Object.keys(top250IDs).length,
  },

  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
  },

  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },

    async fetchMovies({ getters, commit }) {
      try {
        const { slicedIDs, currentPage, moviesPerPage } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);

        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));

        const response = await Promise.all(requests);
        const movies = normalizeResponse(response);
        commit(MOVIES, movies);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default moviesStore;
