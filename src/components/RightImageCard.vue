<template>
  <div class="right-image-card-container">
    <div class="info">
      <div class="title">{{ RightImageCard.title }}</div>
      <div class="headline">{{ RightImageCard.mainmessage }}</div>
      <div class="text">{{ RightImageCard.submessage }}</div>
      <div class="addition">{{ RightImageCard.additionmessage }}</div>
    </div>
    <div class="picture">
      <img :src="RightImageCard.image" alt="" classs="image" />
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
  props: ["RightImageCard", "test"],
  mounted() {
    console.log(this.test);
    console.log(this.RightImageCard);
    console.log(this.RightImageCard.title);
  },
};
</script>
