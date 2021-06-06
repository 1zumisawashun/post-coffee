<template>
  <div class="common-container">
    <div class="description-block">
      <div class="info">
        <div class="title">すぐに始められるコーヒーライフ</div>
        <div class="message">
          あなたの<br />
          カスタマイズで始めよう！
        </div>
      </div>
    </div>

    <div class="campaign-container">
      <div class="price">月々¥1,480~（税込¥1,598~）</div>
      <div class="title">4つの特典</div>

      <div class="campaign">
        <div class="item" v-for="cp in cps" :key="cp.id">
          <div class="name">{{ cp.title }}</div>
          <div class="message">{{ cp.message }}</div>
        </div>
      </div>
      <div class="wrapper">
        <div class="diagnosis-button">
          <a>無料でコーヒー診断をする</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style></style>
