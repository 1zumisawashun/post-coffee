<template>
  <div class="right-image-card-container">
    <div class="info">
      <div class="title">{{ RightImageCard.title }}</div>
      <div class="headline">{{ RightImageCard.mainmessage }}</div>
      <div class="message">{{ RightImageCard.submessage }}</div>
      <div class="wrapper" v-if="isDisplayed">
        <div class="addition">
          <div class="number">{{ RightImageCard.number[0].number }}</div>
          <div class="text">{{ RightImageCard.text[0].text }}</div>
        </div>
        <div class="addition">
          <div class="number">{{ RightImageCard.number[1].number }}</div>
          <div class="text">{{ RightImageCard.text[1].text }}</div>
        </div>
      </div>
      <div class="wrapper" v-if="isNotDisplayed">
        <div class="addition">
          <div class="number">{{ RightImageCard.number }}</div>
          <div class="text">{{ RightImageCard.text }}</div>
        </div>
      </div>
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
      isDisplayed: false,
      isNotDisplayed: true,
      card: [],
    };
  },
  props: ["RightImageCard", "test"],
  mounted() {
    /* eslint-disable */
    if ((this.RightImageCard.number.length = 2)) {
      this.isDisplayed = true;
      this.isNotDisplayed = false;
      console.log("表示することができます。");
    }

    console.log(this.RightImageCard);
    console.log(this.RightImageCard.number);
  },
};
</script>
