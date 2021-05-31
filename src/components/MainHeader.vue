<template>
  <div class="image-container">
    <img src="@/assets/postcoffeeheader.jpeg" alt="" class="image" />

    <div class="message-block">
      <div class="sub-message">
        コーヒー診断であなたにぴったりのコーヒーが毎月届く
      </div>
      <div class="main-message">コーヒーの定期便パーソナライズコーヒーBOX</div>
      <div class="mh-diagnosis-button-container">
        <div class="mh-diagnosis-button">
          <DiagnosisButton></DiagnosisButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/MainHeader.scss";
import DiagnosisButton from "@/components/DiagnosisButton.vue";
export default {
  components: {
    DiagnosisButton,
  },
};
</script>

<style scoped>
</style>