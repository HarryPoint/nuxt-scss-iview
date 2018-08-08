<template>
  <div>
      换一换
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverList: []
    };
  },
  mounted() {
    this.$axios
      .get("/cpro/skill.json", {
        params: {
          row: 4,
          pos: "1wd000001",
          channel: "4250155552"
        }
      })
      .then(({ data: { data } }) => {
        this.serverList = data;
      });
  }
};
</script>

<style lang="scss" scoped>
</style>