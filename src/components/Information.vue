<template>
  <div class="information-block">
    <div class="left-information-block">
      <img :src="information.image" alt="" class="information-image" />
    </div>
    <div class="right-information-block">
      <div class="title">{{ information.title }}</div>
      <div class="main-message">{{ information.mainmessage }}</div>
      <div class="sub-message">{{ information.submessage }}</div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/Information.scss"
export default {
  props: ["information"],
  mounted() {
    console.log(this.information);
  },
};
</script>

<style lang="scss" scoped>

</style>