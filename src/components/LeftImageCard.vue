<template>
  <div class="left-image-card-container">
    <div class="picture">
        <img :src="LeftImageCard.image" alt="" class="image" />
    </div>
      <div class="info">
        <div class="title">{{ LeftImageCard.title }}</div>
        <div class="headline">{{ LeftImageCard.mainmessage }}</div>
        <div class="text">{{ LeftImageCard.submessage }}</div>
        <div class="addition">{{ LeftImageCard.additionmessage }}</div>
      </div>
    </div>
</template>

<script>

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