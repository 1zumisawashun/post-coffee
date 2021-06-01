<template>
  <div>
    <div class="header-container">
      <div class="header-logo-block">
        <img src="@/assets/images/postcoffeelogo.png" alt="" class="image">
      </div>
      <div class="header-left-block">
        <div class="about">ABOUT</div>
        <div class="store">STORE</div>
        <div class="faq">FAQ</div>
        <div class="magagine">MAGAGINE</div>
        <div class="instagram">
          <img src="@/assets/images/sns_instagram.png" alt="instagtram" class="sns-icon">
        </div>
        <div class="twitter">
           <img src="@/assets/images/sns_twitter.png" alt="twitter" class="sns-icon">
        </div>
      </div>
      <div class="header-right-block">
        <div class="hr-diagnosis-button">
        <DiagnosisButton></DiagnosisButton>
        </div>
        <a class="login-button">LOGIN</a>
      </div>
    </div>
  </div>
</template>

<script>

import DiagnosisButton from "@/components/DiagnosisButton.vue"
import "@/assets/scss/header-container.scss"
export default {
components:{
  DiagnosisButton
}
};
</script>

<style lang="scss" scoped>


</style>