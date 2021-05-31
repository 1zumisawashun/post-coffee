<template>
  <div class="store-container">
<LeftImgaeCard :LeftImageCard="card"></LeftImgaeCard>
  </div>
</template>

<script>
import LeftImgaeCard from "@/components/LeftImageCard.vue"
export default {
  components:{
    LeftImgaeCard
  },
  data(){
    return{
card:{
image: "https://placehold.jp/550x600.png",
          title: "PostCoffee Offline Store",
          mainmessage: "バリスタとともに始めるコーヒージャーニー",
          submessage:
            "PostCoffee Offline Store（ポストコーヒーオフラインストア）では、あなた専用のコーヒーボックスを作る体験ができます。コーヒー診断をして、プロのバリスタと一緒にあなたに合ったコーヒーを選び、コーヒーの淹れ方を学ぶことができます。3種類のコーヒーとオリジナル折りたたみドリッパーの入ったコーヒーボックスをお持ち帰りいただけます。",
          additionmessage: "2021年4月17日より一時休業とさせていただきます。再開についてはWebサイトやSNSをご確認ください。",
}
    }
  }

}
</script>

<style lang="scss" scoped>

</style>