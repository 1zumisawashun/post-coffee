<template>
  <div class="main-header-container">
    <img src="@/assets/images/postcoffeeheader.jpeg" alt="" class="image" />
    <div class="message">
      <div class="text">
        {{ submessage }}
      </div>
      <div class="headline">
        {{ mainmessage }}
      </div>

      <div class="button">
          <button class="diagnosis-button">コーヒー診断をする</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      submessage: "コーヒー診断であなたにぴったりのコーヒーが毎月届く",
      mainmessage: `コーヒーの定期便
パーソナライズコーヒーBOX`,
    };
  },
};
</script>

<style scoped>
</style>