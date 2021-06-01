<template>
  <div class="post-container">
    <div class="title-box">
      <div class="title">メディア掲載情報</div>
      <hr class="hr" />
    </div>
    <perfect-scrollbar>
      <div v-for="i in 20" :key="i.id">
        <div class="ps-block">
          <div class="date">2021.4.28</div>
          <div class="post">
            とりぐら｜一人暮らしの毎日がもっと楽しく / Vol.49 突然過ぎ～！
            ベランダでの休憩中に現れた人は誰？【ハチノスハイム・Room294】
          </div>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import "@/assets/scss/post-container.scss";
import "@/assets/scss/perfect-scrollbar.scss";
export default {};
</script>

<style>
</style>

