<template>
  <div class="left-image-card-container">
    <div class="picture">
      <img :src="LeftImageCard.image" alt="" class="image" />
    </div>
    <div class="info">
      <div class="title">{{ LeftImageCard.title }}</div>
      <div class="headline">{{ LeftImageCard.mainmessage }}</div>
      <div class="message">{{ LeftImageCard.submessage }}</div>
      <div class="message">{{ LeftImageCard.additionmessage }}</div>
      <div class="addition">
        <div class="number">{{ LeftImageCard.number }}</div>
        <div class="text">{{ LeftImageCard.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: [],
    };
  },
  props: ["LeftImageCard", "test"],
  mounted() {
    console.log(this.test);
    console.log(this.LeftImageCard);
    console.log(this.LeftImageCard.title);
  },
};
</script>

<style></style>
