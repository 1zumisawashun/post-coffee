<template>
  <div>
    <div class="header-container">
      <div class="logo">
        <img src="@/assets/images/postcoffeelogo.png" alt="" class="image" />
      </div>
      <div class="link">
        <div class="item">ABOUT</div>
        <div class="item">STORE</div>
        <div class="item">FAQ</div>
        <div class="item">MAGAGINE</div>
        <div class="item">
          <img
            src="@/assets/images/sns_instagram.png"
            alt="instagtram"
            class="icon"
          />
        </div>
        <div class="item">
          <img
            src="@/assets/images/sns_twitter.png"
            alt="twitter"
            class="icon"
          />
        </div>
      </div>
      <div class="button">
        <div class="wrapper">
          <DiagnosisButton></DiagnosisButton>
        </div>
        <a class="login-button">LOGIN</a>
      </div>
    </div>
  </div>
</template>

<script>
import DiagnosisButton from "@/components/DiagnosisButton.vue";
import "@/assets/scss/header-container.scss";
export default {
  components: {
    DiagnosisButton,
  },
};
</script>
