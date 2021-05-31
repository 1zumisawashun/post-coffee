<template>
  <div class="price-container">
    <div class="description-block">
      <div class="title-box">
        <div class="title">様々なコーヒーライフスタイルに</div>
        <hr class="hr" />
      </div>
      <div class="main-message">例えばこんなカスタマイズ</div>
    </div>

    <div class="price-card-container">
      <div v-for="price in prices" :key="price.id">
        <PriceCard :price="price"></PriceCard>
      </div>
    </div>

    <!-- <div class="cp-bg-wrapper"> -->
    <div class="description-block">
      <div class="title-box">
        <div class="title">すぐに始められるコーヒーライフ</div>
        <hr class="hr" />
      </div>
      <div class="main-message">あなたのカスタマイズで始めよう！</div>
    </div>
    <div class="custom-price">月々¥1,480~（税込¥1,598~）</div>
    <div class="four-cps">
      <hr />
      <div class="cps">4つの特典</div>
      <hr />
    </div>
    <div class="cp-block">
      <div class="cp-box" v-for="cp in cps" :key="cp.id">
        <div class="cp-title">{{ cp.title }}</div>
        <div class="cp-message">{{ cp.message }}</div>
      </div>
    </div>
    <div class="cp-diagnosis-button-container">
      <div class="cp-diagnosis-button">
        <a>無料でコーヒー診断をする</a>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import PriceCard from "@/components/PriceCard.vue";
//import DiagnosisButton from "@/components/DiagnosisButton.vue";
import "@/assets/scss/Price.scss";
export default {
  components: {
    PriceCard,
    //DiagnosisButton,
  },
  data() {
    return {
      prices: [
        {
          title: "コーヒーライフをはじめたい",
          mainmessage:
            "カフェ巡りが大好き。でも家のコーヒーはインスタント。そろそろ美味しいコーヒーをはじめたい。",
          image: "https://placehold.jp/300x180.png",
          firstcustom: "ハンドドリップ",
          secondcustom: "浅煎りを中心に、カフェでよく目にするコーヒーたち",
          thirdcustom: "砂糖なし/ミルクなし",
          forthcustom: "各3杯、計9杯分/月1回",
          price: "¥1,480/月",
          tax: "（税込¥1,598）",
        },
        {
          title: "忙しいあなたに",
          mainmessage:
            "美味しいコーヒーだったら何でも好き。でも毎日忙しいから、できるだけ手軽に楽しみたい。",
          image: "https://placehold.jp/300x180.png",
          firstcustom: "コーヒーバック",
          secondcustom: "浅煎りから深煎りまで。サラッと飲めるコーヒーたち",
          thirdcustom: "砂糖なし/ミルクなし",
          forthcustom: "各3杯、計9杯分/月1回",
          price: "¥1,720/月",
          tax: "（税込¥1,858）",
        },
        {
          title: "コーヒーラバーのあなたに",
          mainmessage:
            "コーヒーにハマって3年。とにかく色んな種類を飲みたい。来るもの拒まず、コーヒーを冒険してみたい。",
          image: "https://placehold.jp/300x180.png",
          firstcustom: "エアロプレス",
          secondcustom: "コーヒー屋でも見かけないクセと特徴のあるコーヒーたち",
          thirdcustom: "砂糖なし/ミルクなし",
          forthcustom: "各5杯、計15杯分/月1回",
          price: "¥2,280/月",
          tax: "（税込¥2,462）",
        },
      ],
      cps: [
        {
          title: "特典1",
          message: "ずっと全国送料無料",
        },
        {
          title: "特典2",
          message: "折りたたみドリッパープレゼント",
        },
        {
          title: "特典3",
          message: "スタートブックプレゼント",
        },
        {
          title: "特典4",
          message: "オリジナルステッカープレゼント",
        },
      ],
    };
  },
  mounted() {
    console.log(this.prices);
  },
};
</script>

<style scoped>
</style>