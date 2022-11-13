<template>
  <div>
    <movies-list :list="moviesList"></movies-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "App",

  components: {
    MoviesList,
  },

  methods: {
    ...mapActions("movies", ["fetchMovies"]),
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
