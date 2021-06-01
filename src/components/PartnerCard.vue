<template>
  <div class="partner-card-container">
    <div v-for="card in cards" :key="card.id" class="card">
      <div class="picture">
        <img :src="card.image" alt="" class="image" />
      </div>
      <div class="info">
        <div class="name">{{ card.name }}</div>
        <div class="prefecture">{{ card.prefecture }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/partner-card-container.scss";
export default {
  data() {
    return {
      cards: [
        {
          image: "https://placehold.jp/150x100.png",
          name: "And Coffee Roasters",
          prefecture: "（熊本県）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "Life Size Cribe",
          prefecture: "（東京都）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "COFFEE COUNTV",
          prefecture: "（福岡県）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "Craftsman Coffee",
          prefecture: "（山口県）",
        },
        {
          image: "https://placehold.jp/150x100.png",
          name: "ETHICUS coffee",
          prefecture: "（静岡県）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "GLITCH COFFEE & ROASTERS",
          prefecture: "（東京都）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "LEAVES COFFEE ROASTERS",
          prefecture: "（東京都）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "LIGHT UP COFFEE",
          prefecture: "（東京都）",
        },
        {
          image: "https://placehold.jp/150x100.png",
          name: "MANLY COFFEE",
          prefecture: "（福岡県）",
        },

        {
          image: "https://placehold.jp/150x100.png",
          name: "NAGASAWA COFFEE",
          prefecture: "（岩手県）",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>