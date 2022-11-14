<template>
  <div>
    <poster-bg :poster="posterBg"></poster-bg>
    <movies-list
      :list="moviesList"
      @changePoster="onChangePoster"
    ></movies-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import PosterBg from "./components/PosterBg.vue";

export default {
  name: "App",

  components: {
    MoviesList,
    PosterBg,
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
    ...mapGetters("movies", ["moviesList"]),
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
