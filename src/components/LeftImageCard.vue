<template>
  <div class="left-image-card-container">
    <div class="image-block">
        <img :src="LeftImageCard.image" alt="" />
    </div>
      <div class="info-block">
        <div class="title-box">
        <div class="title">{{ LeftImageCard.title }}</div>
        <hr class="hr">
        </div>
        <div class="main-message">{{ LeftImageCard.mainmessage }}</div>
        <div class="sub-message">{{ LeftImageCard.submessage }}</div>
        <div class="addition-message">{{ LeftImageCard.additionmessage }}</div>
      </div>
    </div>
</template>

<script>

import "@/assets/scss/LeftImageCard.scss";
export default {
  data(){
    return{
card:[]
    }
  },
  props:["LeftImageCard","test"],
  mounted(){
    console.log(this.test);
    console.log(this.LeftImageCard);
    console.log(this.LeftImageCard.title);
    
    
  }
};
</script>

<style>
</style>