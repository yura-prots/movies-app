<template>
  <div>
    <paginate
      v-model="currentPage"
      :page-count="total"
      :page-range="perPage"
      :prev-text="prevText"
      :next-text="nextText"
    />
  </div>
  {{ currentPage }}
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
};
</script>

<style scoped></style>
