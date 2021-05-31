<template>
  <div class="product-container">
    <!-- first-section -->
    <div class="product-block">
      <div class="product-left-block">
        <img src="@/assets/postcoffee_box.png" alt="" class="postcoffeebox" />
      </div>
      <div class="product-right-block">
        <div class="title-box">
          <div class="title">あなた専用のコーヒーボックス</div>
          <hr class="hr" />
        </div>
        <div class="main-message">
          すぐにコーヒーライフを始めるためのールインワンボックス
          診断から好みにあったコーヒーが3種類
        </div>
        <div class="sub-message">
          好みに合わせて、豆の挽き方や頻度、分量、シュガー、ミルク（クリープ）などカスタマイズ！
        </div>
        <div class="feature-block">
          <div class="first-feature">マグとお湯を用意するだけでOK！</div>
          <div class="second-feature">縛りなしでスキップも簡単！</div>
          <div class="third-feature">ずっと、全国送料無料！</div>
        </div>
        <div class="price-block">
          <div class="ship">送料無料</div>
          <div class="price">¥1,480~</div>
          <div class="tax">（税込¥1,598~）</div>
        </div>
        <div class="price-diagnosis-button">
        <a>
          1分であなた好みのコーヒー診断 <br />
          無料でコーヒーを診断
        </a>
        </div>
      </div>
    </div>
    <!-- second-section -->
    <FeedbackCarousel></FeedbackCarousel>
    <!-- third-section -->
    <div class="bg-wrapper">
    <div class="information-container">
    <div
      v-for="(information, index) in informations"
      :key="index"
    >
      <Information :information="information"></Information>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/Product.scss";
// import DiagnosisButton from "@/components/DiagnosisButton.vue"
import Information from "../components/Information.vue";
import FeedbackCarousel from "../components/FeedbackCarousel.vue";
export default {
  components: {
    //DiagnosisButton,
    Information,
    FeedbackCarousel,
  },
  props: [""],
  data() {
    return {
      informations: [
        {
          image: require("@/assets/icon_feauter1.png"),
          // srcをバインドさせる時はrequireさせなくてはいけない
          title: "Take the Quiz.",
          mainmessage: "コーヒーを診断する",
          submessage:
            "趣味嗜好に関する簡単な質問に答えましょう。コーヒーの知識がなくても大丈夫。",
        },
        {
          image: require("@/assets/icon_feauter2.png"),
          title: "Customazing for you.",
          mainmessage: "あなた専用にカスタマイズ",
          submessage:
            "約15万通りからあなたに合ったコーヒー、淹れ方などを導き出します。",
        },
        {
          image: require("@/assets/icon_feauter3.png"),
          title: "Get the Coffee Box.",
          mainmessage: "美味しいコーヒーが届く",
          submessage:
            "あなた専用にカスタマイズされたコーヒーBOXが届きます。コーヒージャーニーの始まりです。",
        },
        {
          image: require("@/assets/icon_feauter4.png"),
          title: "Let's give them feedback.",
          mainmessage: "フィードバックしよう",
          submessage:
            "フィードバックをすることでお届けするオーヒー豆が更に更に好みの味に近づきます。",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style scoped>
</style>