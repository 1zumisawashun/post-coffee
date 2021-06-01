<template>
  <div class="topic-carousel-container">
    <carousel
      :per-page="1"
      :autoplay="true"
      :autoplayTimeout="5000"
      :loop="true"
      :speed="500"
    >
      <slide v-for="carousel in carousels" :key="carousel.id">
        <div class="carousel-main-message">
          {{ carousel.mainmessage }}
        </div>
        <div class="carousel-sub-message">
          {{ carousel.submessage }}
        </div>
        <div class="line"></div>
        <img :src="carousel.image" :alt="carousel.name" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import "@/assets/scss/topic-carousel-container.scss";
export default {
  data() {
    return {
      carousels: [
        {
          mainmessage: "「話題のコーヒーサブスクPostCoffeeを体験」",
          submessage: `驚いたのは、自分が想像以上に浅煎り好きだとわかったこと！
コーヒー観が変わる貴重な体験ができました。`,
          image: "https://placehold.jp/200x100.png",
          name: "lifehacker",
        },
        {
          mainmessage:
            "「何も考えずに、自分が美味しいと感じるコーヒーを常に飲んでいたい」",
          submessage:
            "そんな願望を持つコーヒー愛好家ならチェックしてみるといいかもしれない。",
          image: "https://placehold.jp/200x100.png",
          name: "techcrunch",
        },
        {
          mainmessage: "「最新毎月何が届くかお楽しみ♪サブスクグルメ」",
          submessage:
            "定額で定期的にサービスが届いてとても楽しいですよね違うのが届くのも楽しみ！！",
          image: "https://placehold.jp/200x100.png",
          name: "めざましテレビ",
        },
        {
          mainmessage: "「おうち生活が楽しくなるハッピートレンド3」",
          submessage:
            "自分好みのコーヒーが届く！「コーヒー診断」ポストコーヒー！",
          image: "https://placehold.jp/200x100.png",
          name: "王様のブランチ",
        },
        {
          mainmessage: `「月イチで3タイプ届くコーヒー豆のチョイスが、
マニアックで面白すぎる」`,
          submessage:
            "味もしっかりしていますし、焙煎も新鮮。いろんな種類を飲めて飽きないのはかなり良いです。",
          image: "https://placehold.jp/200x100.png",
          name: "PEN",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>