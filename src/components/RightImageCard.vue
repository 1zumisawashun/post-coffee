<template>
  <div class="right-image-card-container">
    <div class="info">
      <div class="title">{{ RightImageCard.title }}</div>
      <div class="mainmessage">{{ RightImageCard.mainmessage }}</div>
      <div class="submessage">{{ RightImageCard.submessage }}</div>
      <div class="addition">{{ RightImageCard.additionmessage }}</div>
    </div>
    <div class="picture">
      <img :src="RightImageCard.image" alt="" classs="image" />
    </div>
  </div>
</template>

<script>
import "@/assets/scss/right-image-card-container.scss";
export default {
  data() {
    return {
      card: [],
    };
  },
  props: ["RightImageCard", "test"],
  mounted() {
    console.log(this.test);
    console.log(this.RightImageCard);
    console.log(this.RightImageCard.title);
  },
};
</script>

<style>
</style>