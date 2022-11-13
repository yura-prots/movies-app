<template>
  <div class="movie-item">
    <div class="movie-item-poster-wrap">
      <div class="movie-item-poster" :style="posterBg">
        <div
          class="movie-item-info-wrap d-flex flex-column justify-content-between"
        >
          <div class="movie-item-info">
            <h3 class="movie-title">{{ movieItem.Title }}</h3>
            <span class="movie-year">{{ movieItem.Year }}</span>
          </div>
          <div class="movie-item-controls row row-cols-2">
            <div class="col">
              <button type="button" class="btn btn-outline-light btn-sm">
                Edit
              </button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-outline-light btn-sm">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",

  props: {
    movieItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    posterBg() {
      return {
        "background-image": `url(${this.movieItem.Poster})`,
      };
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 400px;
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

.movie-item-poster {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.movie-item-info-wrap {
  padding: 20px 10px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease;
}

.movie-item:hover .movie-item-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-title {
  font-size: 20px;
  color: #fff;
}

.movie-year {
  font-size: 14px;
  color: #fff;
}
</style>
