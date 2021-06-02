<template>
  <div class="price-card-block">
    <div class="content">
      <div class="info">
        <div class="title">{{ price.title }}</div>
        <div class="message">{{ price.mainmessage }}</div>
      </div>
      <div class="picture">
        <img :src="price.image" alt="" />
      </div>
    </div>

    <div class="customize">
      <div class="menu">
        <div class="item">{{ price.firstcustom }}</div>
        <div class="plus">+</div>
        <div class="item">{{ price.secondcustom }}</div>
        <div class="plus">+</div>
        <div class="item">{{ price.thirdcustom }}</div>
        <div class="plus">+</div>
        <div class="item">{{ price.forthcustom }}</div>
      </div>

      <div class="price">
        <div class="excludingtax">{{ price.price }}</div>
        <div class="includingtax">{{ price.tax }}</div>
      </div>
    </div>
  </div>
</template>

<script>
 import "@/assets/scss/price-card-block.scss";
export default {
  data() {
    return {};
  },
  props: ["price"],
};
</script>
