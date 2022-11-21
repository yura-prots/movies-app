<template>
  <div>
    <poster-bg :poster="posterBg"></poster-bg>
    <movies-list
      :list="moviesList"
      @changePoster="onChangePoster"
    ></movies-list>
    <movies-pagination
      v-model="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
    ></movies-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import PosterBg from "./components/PosterBg.vue";
import MoviesPagination from "./components/MoviesPagination.vue";

export default {
  name: "App",

  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
  },

  data() {
    return {
      posterBg: "",
    };
  },

  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
  },

  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength",
    ]),
    name() {
      return this.data;
    },
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
