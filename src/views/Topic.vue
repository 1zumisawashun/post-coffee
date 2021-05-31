<template>
  <div class="topic-container">
    <div class="message-block">
      <div class="sub-message-box">
        <div class="message">今話題のサブスク</div>
        <hr class="hr" />
      </div>
      <div class="main-message">様々なテレビやメディアで話題になっています</div>
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
  date() {
    return {};
  },
  components: {
    TopicCarousel,
  },
};
</script>

<style scoped>
</style>