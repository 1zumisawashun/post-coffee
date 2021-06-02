<template>
  <div>
    <!-- v-forはルートになれない -->
    <div class="about-container">
      <!-- 間違った箇所でv-forを回すとエラーが出ないしコンパイル（表示）もされない -->
      <LeftImageCard :LeftImageCard="cards[0]"></LeftImageCard>
      <RightImageCard :RightImageCard="cards[1]"></RightImageCard>
      <LeftImageCard :LeftImageCard="cards[2]"></LeftImageCard>
      <RightImageCard :RightImageCard="cards[3]"></RightImageCard>
    </div>
    <div class="information-wrapper">
      <div class="content">
        <div v-for="(information, index) in informations" :key="index">
          <Information :information="information"></Information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import "@/assets/scss/information-wrapper.scss";
import Information from "@/components/Information.vue";
import RightImageCard from "@/components/RightImageCard.vue";
import LeftImageCard from "@/components/LeftImageCard.vue";

export default {
  components: {
    Information,
    RightImageCard,
    LeftImageCard,
  },
  data() {
    return {
      test: "korehatesutodesu",
      cards: [
        {
          image: "https://placehold.jp/550x600.png",
          title: "コーヒー好きのあなたへ",
          mainmessage: "なんとなくでコーヒーを飲んでいませんか？",
          submessage:
            "毎日コーヒーを入れて、毎日のようにコーヒーを飲むあなた。家で飲むコーヒー、適当に買っていませんか？せっかく飲むコーヒーだから、もっと美味しいコーヒーを飲んでコーヒータイムを豊にしてみましょう。きっといつもよりハッピーに過ごせるはず。私たちは、あなたのコーヒーライフをもっと美味しく、スマートにします。",
          additionmessage: "",
        },
        {
          image: "https://placehold.jp/550x600.png",
          title: "マンネリからの解放",
          mainmessage: "いろんなコーヒーを楽しむ壮大なコーヒージャーニー",
          submessage:
            "世界役15カ国から最高品質のスペシャリティコーヒーを厳選。そのほとんどが希少なコーヒーのために毎年の生産はわずかです。いつもあなたに美味しいコーヒーを届けることができるように、わたしたちは、これまでのデータ、フィードバックから最適な豆をセレクトしています。毎月どんなコーヒーが届くか楽しみになるはず",
          additionmessage: "15カ国の農園　30種類のコーヒー豆",
        },
        {
          image: "https://placehold.jp/550x600.png",
          title: "簡単コーヒー診断",
          mainmessage: "約15万通りからあなた好みを導き出します",
          submessage:
            "あなたが好きなスイーツ、お酒、普段のライフスタイルなどから、あなた専用にコーヒーボックスをカスタマイズします。カスタマイズされるのはコーヒーの種類だけではなく淹れ方、飲み方、頻度、価格など様々。あなたに最適なコーヒライフが見つかるはず。",
          additionmessage: "150,000通りの組み合わせ",
        },
        {
          image: "https://placehold.jp/550x600.png",
          title: "あなた専用のコーヒーボックス",
          mainmessage: "3種類のコーヒーと飲み方に応じたオールインワン",
          submessage:
            "コーヒー診断からAIが導き出したコーヒー3種類、好みやカスタマイズに合わせて、フィルター、シュガー、ミルクがセットになって届きます。カスタマイズは変更可能。毎月自分の好きなように調整できます。",
          additionmessage: "3種類のコーヒー",
        },
      ],
      informations: [
        {
          image: require("@/assets/images/icon_feauter1.png"),
          // srcをバインドさせる時はrequireさせなくてはいけない
          title: "",
          mainmessage: "焙煎したての最高品質のコーヒー豆",
          submessage:
            "最新の焙煎機、そして専属の焙煎士が毎日丁寧に焙煎をしています。お届けするコーヒーはいつも新鮮。",
        },
        {
          image: require("@/assets/images/icon_feauter2.png"),
          title: "",
          mainmessage: "ポストへ投函で届く",
          submessage:
            "不在票や再配達に悩むことはありません。あなたのコーヒーBOXをポストへお届けします。",
        },
        {
          image: require("@/assets/images/icon_feauter4.png"),
          title: "",
          mainmessage: "足りなくなったら追加注文",
          submessage:
            "コーヒー豆がなくなっても心配いりません。追加で注文ができ、pストへ届きます。",
        },
        {
          image: require("@/assets/images/icon_feauter3.png"),
          title: "",
          mainmessage: "全て送料無料",
          submessage:
            "定期便のコーヒーボックス、追加注文のコーヒーも全て送料無料。",
        },
      ],
    };
  },
  mounted() {
    console.log(this.messages[0]);
    console.log(this.informations);
  },
};
</script>
<style lang="scss" scoped>
</style>