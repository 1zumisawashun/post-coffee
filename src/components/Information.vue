<template>
  <div class="information-block">
    <div class="icon">
      <img :src="information.image" alt="" class="image" />
    </div>
    <div class="info">
      <div class="title">{{ information.title }}</div>
      <div class="headline">{{ information.mainmessage }}</div>
      <div class="text">{{ information.submessage }}</div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/information-block.scss"
export default {
  props: ["information"],
  mounted() {
    console.log(this.information);
  },
};
</script>

<style lang="scss" scoped>

</style>