<template>
  <div>
    <!-- first-section -->
    <div class="product-container">
      <div class="picture">
        <img src="@/assets/images/postcoffee_box.png" alt="" class="image" />
      </div>
      <div class="content">
        <div class="title">{{ title }}</div>

        <div class="headline">
          すぐにコーヒーライフを始めるための<br />
          オールインワンボックス<br />
          診断から好みにあったコーヒーが3種類
        </div>
        <div class="text">
          好みに合わせて、豆の挽き方や頻度、分量、シュガー、ミルク <br />
          （クリープ）などカスタマイズ！
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
          <a
            >1分であなた好みのコーヒー診断<br />
            無料でコーヒーを診断
          </a>
        </div>
      </div>
    </div>
    <!-- second-section -->
    <FeedbackCarousel></FeedbackCarousel>
    <!-- third-section -->
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
      mainmessage: ``,
      submessage: ``,
      firstfeature: "マグとお湯を用意するだけでOK！",
      secondfeature: "縛りなしでスキップも簡単！",
      thirdfeature: "ずっと、全国送料無料！",
      ship: "送料無料",
      price: "¥1,480~",
      tax: "（税込¥1,598~）",
      pricediagnosisbutton: ``,
      informations: [
        {
          image: require("@/assets/images/icon_feauter1.png"),
          // srcをバインドさせる時はrequireさせなくてはいけない
          title: "Take the Quiz.",
          mainmessage: "コーヒーを診断する",
          submessage:
            "趣味嗜好に関する簡単な質問に答え\nましょう。コーヒーの知識が\nなくても大丈夫。",
        },
        {
          image: require("@/assets/images/icon_feauter2.png"),
          title: "Customazing for you.",
          mainmessage: "あなた専用にカスタマイズ",
          submessage:
            "約15万通りからあなたに\n合ったコーヒー、淹れ方\nなどを導き出します。",
        },
        {
          image: require("@/assets/images/icon_feauter3.png"),
          title: "Get the Coffee Box.",
          mainmessage: "美味しいコーヒーが届く",
          submessage:
            "あなた専用にカスタマイズされた\nコーヒーBOXが届きます。\nコーヒージャーニーの始まりです。",
        },
        {
          image: require("@/assets/images/icon_feauter4.png"),
          title: "Let's give them feedback.",
          mainmessage: "フィードバックしよう",
          submessage:
            "フィードバックをすることで\nお届けするオーヒー豆が\n更に更に好みの味に近づきます。",
        },
      ],
    };
  },
  mounted() {},
};
</script>
