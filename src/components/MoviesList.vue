<template>
  <div class="container text-center">
    <h3 class="list-title">IMDB Top 250</h3>
    <div class="row g-4">
      <template v-if="isExist">
        <div class="col-3" v-for="(movie, key) in list" :key="key">
          <movie-item :movieItem="movie"></movie-item>
        </div>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  name: "MoviesList",

  components: {
    MovieItem,
  },

  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
