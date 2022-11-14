<template>
  <div>pagination</div>
</template>

<script>
export default {
  name: "MoviesPagination",

  data() {
    return {
      currentPage: 1,
      total: 100,
      perPage: 12,
    };
  },
};
</script>

<style scoped></style>
