<template>
  <div class="store-container">
    <LeftImgaeCard :LeftImageCard="card"></LeftImgaeCard>
  </div>
</template>

<script>
import LeftImgaeCard from "@/components/LeftImageCard.vue";
export default {
  components: {
    LeftImgaeCard,
  },
  data() {
    return {
      card: {
        image: "https://placehold.jp/550x600.png",
        title: "PostCoffee Offline Store",
        mainmessage: "バリスタとともに始める\nコーヒージャーニー",
        submessage:
          "PostCoffee Offline Store（ポストコーヒーオフラインストア）では、\nあなた専用のコーヒーボックスを作る体験ができます。コーヒー診断をして、\nプロのバリスタと一緒にあなたに合ったコーヒーを選び、\nコーヒーの淹れ方を学ぶことができます。3種類のコーヒーとオリジナル\n折りたたみドリッパーの入ったコーヒーボックスを\nお持ち帰りいただけます。",
        additionmessage:
          "2021年4月17日より一時休業とさせていただきます。\n再開についてはWebサイトやSNSをご確認ください。",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
