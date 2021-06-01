<template>
  <div class="product-container">
    <!-- first-section -->
    <div class="product-block">
      <div class="picture">
        <img
          src="@/assets/images/postcoffee_box.png"
          alt=""
          class="image"
        />
      </div>
      <div class="content">
        <div class="title">{{ title }}</div>

        <div class="mainmessage">
          {{ mainmessage }}
        </div>
        <div class="submessage">
          {{ submessage }}
        </div>
        <div class="feature">
          <div class="item">
            <img src="@/assets/images/icon_check.png" alt="" />
            {{ firstfeature }}
          </div>
          <div class="item">
            <img src="@/assets/images/icon_check.png" alt="" />
            {{ secondfeature }}
          </div>
          <div class="item">
            <img src="@/assets/images/icon_check.png" alt="" />
            {{ thirdfeature }}
          </div>
        </div>
        <div class="price">
          <div class="ship">{{ ship }}</div>
          <div class="excludingtax">{{ price }}</div>
          <div class="includingtax">{{ tax }}</div>
        </div>
        <div class="diagnosis-button">
          <a>{{ pricediagnosisbutton }} </a>
        </div>
      </div>
    </div>
    <!-- second-section -->
    <FeedbackCarousel></FeedbackCarousel>
    <!-- third-section -->
    <div class="information-wrapper">
      <div class="information-container">
        <div v-for="(information, index) in informations" :key="index">
          <Information :information="information"></Information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/product-container.scss";
import "@/assets/scss/information-wrapper.scss";
import Information from "../components/Information.vue";
import FeedbackCarousel from "../components/FeedbackCarousel.vue";
export default {
  components: {
    Information,
    FeedbackCarousel,
  },
  props: [""],
  data() {
    return {
      title: "あなた専用のコーヒーボックス",
      mainmessage: `すぐにコーヒーライフを始めるためのオールインワンボックス
診断から好みにあったコーヒーが3種類`,
      submessage: `好みに合わせて、豆の挽き方や頻度、分量、シュガー、ミルク（クリープ）などカスタマイズ！`,
      firstfeature: "マグとお湯を用意するだけでOK！",
      secondfeature: "縛りなしでスキップも簡単！",
      thirdfeature: "ずっと、全国送料無料！",
      ship: "送料無料",
      price: "¥1,480~",
      tax: "（税込¥1,598~）",
      pricediagnosisbutton: `1分であなた好みのコーヒー診断
無料でコーヒーを診断`,
      informations: [
        {
          image: require("@/assets/images/icon_feauter1.png"),
          // srcをバインドさせる時はrequireさせなくてはいけない
          title: "Take the Quiz.",
          mainmessage: "コーヒーを診断する",
          submessage:
            "趣味嗜好に関する簡単な質問に答えましょう。コーヒーの知識がなくても大丈夫。",
        },
        {
          image: require("@/assets/images/icon_feauter2.png"),
          title: "Customazing for you.",
          mainmessage: "あなた専用にカスタマイズ",
          submessage:
            "約15万通りからあなたに合ったコーヒー、淹れ方などを導き出します。",
        },
        {
          image: require("@/assets/images/icon_feauter3.png"),
          title: "Get the Coffee Box.",
          mainmessage: "美味しいコーヒーが届く",
          submessage:
            "あなた専用にカスタマイズされたコーヒーBOXが届きます。コーヒージャーニーの始まりです。",
        },
        {
          image: require("@/assets/images/icon_feauter4.png"),
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