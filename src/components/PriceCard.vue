<template>
  <div class="price-card-block">
    <div class="image-block">
      <div class="main-message-box">
        <div class="title">{{ price.title }}</div>
        <hr class="hr" />
      </div>
      <div class="main-message">{{ price.mainmessage }}</div>
      <div class="image">
        <img :src="price.image" alt="" />
      </div>
    </div>

    <div class="price-block">
      <div class="customize-box">
        <div class="one-custom">{{ price.firstcustom }}</div>
        <div class="plus">+</div>
        <div class="second-custom">{{ price.secondcustom }}</div>
        <div class="plus">+</div>
        <div class="third-custom">{{ price.thirdcustom }}</div>
        <div class="plus">+</div>
        <div class="forth-custom">{{ price.forthcustom }}</div>
      </div>

      <div class="price-box">
        <div class="price">{{ price.price }}</div>
        <div class="tax">{{ price.tax }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/PriceCard.scss";
export default {
  data() {
    return {};
  },
  props: ["price"],
};
</script>

<style scoped>
</style>