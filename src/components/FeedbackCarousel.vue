<template>
  <div class="feedback-carousel-container">
    <!-- carousel -->
    <div class="title">Enjoy your lifestyle.</div>
    <carousel
      :per-page="4"
      :navigation-enabled="true"
      navigation-prev-label="<"
      navigation-next-label=">"
    >
      <slide v-for="feedback in feedbacks" :key="feedback.id">
        <div class="feedback-card-container">
          <div class="picture">
            <img :src="feedback.cardimage" alt="" />
          </div>
          <div class="user">
            <div class="profile">
              <div class="icon">
                <img :src="feedback.usericon" alt="lifehacker" class="image" />
              </div>
              <div class="name">{{ feedback.username }}</div>
            </div>
            <div class="message">
              {{ feedback.message }}
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbacks: [
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@zaki.0207",
          message:
            "ポスト投函で受け取りました！受け取った時からコーヒーの良い香りでテンションあがります。",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "riff______",
          message:
            "コーヒーは好きだけど詳しくはないのでこういうサービスは本当にありがたい。届いたコーヒーに対するフィードバックでより自分好みのコーヒーを選べる！",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@cafict",
          message:
            "@postcoffee.co さんから頂いたコーヒーを何気なく飲んだら、すごく美味しくて心の中で小躍りした！",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@r__kuro.__",
          message:
            "普段なかなかいろいろなコーヒーを試すことが難しいのでこないだ美味しかったのどれだっけ？となってしまう私にはありがたい。",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@mame_no_gohan",
          message:
            "コーヒーボックスが届いた〜！家で手軽に本格的なコーヒーを味わえて贅沢。ボックスには3種類のコーヒ豆の他にコーヒーの淹れ方ガイド、テトラドリップやペーパーフィルター、ステッカーも入ってて大満足でした。",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@rinrin.days",
          message:
            "ポストに届いたコーヒーにチョコレート♡おうち時間も楽しくなりそう♡",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@loglogblue",
          message:
            "新しくなった #postcoffee をやっと飲めました。ホットケーキ焼いてゆったりした朝食に最適。パッケージも味もポストに届く快適さも全て気に入っています。",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@__mika__m",
          message:
            "手軽に本格的なコーヒー楽しめて美味しいおやつ時間となりました！",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@enzo01100315",
          message:
            "質問に答えるだけで自分に合ったテイストのコーヒーを選んでくれるという僕みたいにコーヒーは好きだけど詳しくない方にはピッタリの方法で自宅に届けてくれる！",
        },
        {
          cardimage: "https://placehold.jp/250x230.png",
          usericon: "https://placehold.jp/50x50.png",
          username: "@ustatiron",
          message:
            "飲んでみて、香りの存在感は強く、飲んだ後の満足感もしっかり。苦味と酸味のバランスが良く切れ上がりの良い飲み口に感じられました！",
        },
      ],
    };
  },
  mounted() {
    console.log(this.feedbacks);
  },
  components: {},
};
</script>
<style lang="scss" scoped></style>
