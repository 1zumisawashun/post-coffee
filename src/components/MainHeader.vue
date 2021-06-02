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

      <div class="wrapper">
        <div class="diagnosis-button">
          <DiagnosisButton></DiagnosisButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/main-header-container.scss";
import DiagnosisButton from "@/components/DiagnosisButton.vue";
export default {
  components: {
    DiagnosisButton,
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