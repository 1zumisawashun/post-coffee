<template>
  <div class="topic-container">
    <div class="description">
        <div class="title">{{message}}</div>
      <div class="headline" v-text="mainmessage"></div>
    </div>
    <!-- carousel -->
    <TopicCarousel></TopicCarousel>
    
    <div class="media">
      <div class="item" v-for="i in 42" :key="i.id">
        <img src="https://placehold.jp/100x60.png" alt="スライド1" />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/topic-container.scss";
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