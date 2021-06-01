<template>
  <div class="right-image-card-container">
    <div class="info-block">
      <div class="title-box">
        <div class="title">{{ RightImageCard.title }}</div>
        <hr class="hr" />
      </div>
      <div class="main-message">{{ RightImageCard.mainmessage }}</div>
      <div class="sub-message">{{ RightImageCard.submessage }}</div>
      <div class="addition-message">{{ RightImageCard.additionmessage }}</div>
    </div>
    <div class="image-block">
      <img :src="RightImageCard.image" alt="" />
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