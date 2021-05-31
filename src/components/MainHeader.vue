<template>
  <div class="image-container">
    <img src="@/assets/postcoffeeheader.jpeg" alt="" class="image" />

    <div class="message-block">
      <div class="sub-message">
        {{ submessage }}
      </div>
      <div class="main-message whitespace" v-text="mainmessage"></div>

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