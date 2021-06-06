<template>
  <div class="price-container">
    <div class="description-block">
      <div class="info">
        <div class="title">様々なコーヒーライフスタイルに</div>
        <div class="message">
          例えば<br />
          こんなカスタマイズ
        </div>
      </div>
    </div>
    <div class="price-card-container">
      <div v-for="price in prices" :key="price.id">
        <PriceCard :price="price"></PriceCard>
      </div>
    </div>
  </div>
</template>

<script>
import PriceCard from "@/components/PriceCard.vue";
export default {
  components: {
    PriceCard,
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
    };
  },
  mounted() {
    console.log(this.prices);
  },
};
</script>
