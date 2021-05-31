<template>
  <div class="topic-container">
    <div class="message-block">
      <div class="sub-message-box">
        <div class="message">{{message}}</div>
        <hr class="hr" />
      </div>
      <div class="main-message whitespace" v-text="mainmessage"></div>
    </div>
    <!-- carousel -->
    <TopicCarousel></TopicCarousel>
    
    <div class="media-block">
      <div class="media" v-for="i in 42" :key="i.id">
        <img src="https://placehold.jp/100x60.png" alt="スライド1" />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/Topic.scss";
import TopicCarousel from "@/components/TopicCarousel.vue";
export default {
  data() {
    return {
      message:"今話題のサブスク",
      mainmessage:`様々なテレビやメディアで
話題になっています`
    };
  },
  components: {
    TopicCarousel,
  },
  mounted(){
    console.log(this.message);
    console.log(this.mainmessage);
  }
};
</script>

<style scoped>
</style>