<template>
  <div class="movies-pagination d-flex justify-content-center">
    <paginate
      v-model="currentPage"
      :page-count="total"
      :page-range="perPage"
      :prev-text="prevText"
      :next-text="nextText"
      :click-handler="clickCallback"
    />
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
  name: "MoviesPagination",

  components: {
    Paginate,
  },

  data() {
    return {
      currentPage: 1,
      total: 100,
      perPage: 5,
      prevText: "&laquo;",
      nextText: "&raquo;",
    };
  },

  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    },
  },
};
</script>

<style scoped>
.movies-pagination {
  margin-top: 30px;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  border-color: #fff;
  background-color: #fff;
  color: #000;
}
</style>
