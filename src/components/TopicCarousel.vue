<template>
  <carousel
    :per-page="1"
    :autoplay="true"
    :autoplayTimeout="5000"
    :loop="true"
    :speed="500"
  >
    <slide>
      <div class="topic-carousel-container">
        <div class="headline">
          「話題のコーヒーサブスクPostCoffeeを体験」
        </div>
        <div class="text">
          驚いたのは、自分が想像以上に浅煎り好きだとわかったこと！<br />
          コーヒー観が変わる貴重な体験ができました。
        </div>
        <div class="line"></div>
        <img src="https://placehold.jp/200x100.png" alt="lifehacker" />
      </div>
    </slide>
    <slide>
      <div class="topic-carousel-container">
        <div class="headline">
          「何も考えずに、自分が美味しいと感じるコーヒーを常に飲んでいたい」
        </div>
        <div class="text">
          そんな願望を持つコーヒー愛好家ならチェックしてみるといいかもしれない。
        </div>
        <div class="line"></div>
        <img src="https://placehold.jp/200x100.png" alt="techcrunch" />
      </div>
    </slide>
    <slide>
      <div class="topic-carousel-container">
        <div class="headline">
          「最新毎月何が届くかお楽しみ♪サブスクグルメ」
        </div>
        <div class="text">
          定額で定期的にサービスが届いてとても楽しいですよね違うのが届くのも楽しみ！！
        </div>
        <div class="line"></div>
        <img src="https://placehold.jp/200x100.png" alt="めざましテレビ" />
      </div>
    </slide>
    <slide>
      <div class="topic-carousel-container">
        <div class="headline">
          「おうち生活が楽しくなるハッピートレンド3」
        </div>
        <div class="text">
          自分好みのコーヒーが届く！「コーヒー診断」ポストコーヒー！
        </div>
        <div class="line"></div>
        <img src="https://placehold.jp/200x100.png" alt="王様のブランチ" />
      </div>
    </slide>
    <slide>
      <div class="topic-carousel-container">
        <div class="headline">
          「月イチで3タイプ届くコーヒー豆のチョイスが、<br />
          マニアックで面白すぎる」
        </div>
        <div class="text">
          味もしっかりしていますし、焙煎も新鮮。いろんな種類を飲めて飽きないのはかなり良いです。
        </div>
        <div class="line"></div>
        <img src="https://placehold.jp/200x100.png" alt="PEN" />
      </div>
    </slide>
  </carousel>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
