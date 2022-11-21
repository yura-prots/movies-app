<template>
  <div class="movies-pagination d-flex justify-content-center">
    {{ currentPage }}
    <b-pagination
      v-model="currentPage"
      :total-rows="total"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",

  //   data() {
  //     return {
  //       currentPage: "",
  //     };
  //   },

  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    //  clickCallback(pageNum) {
    //    console.log(pageNum);
    //  },
  },

  computed: {
    currentPageModel: {
      get() {
        console.log(this.currentPage);
        return this.currentPage;
      },
      set(value) {
        console.log(value);
      },
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
