<template>
  <div class="partner-container">
    <div class="logo">
      <img src="@/assets/images/roasterpartnerlogo.png" alt="" class="image" />
    </div>
    <div class="headline">{{ mainmessage }}</div>
    <div class="text">{{ submessage }}</div>
    <PartnerCard></PartnerCard>
  </div>
</template>

<script>
import PartnerCard from "@/components/PartnerCard.vue";
export default {
  data() {
    return {
      partnerroasterlogo: "",
      mainmessage:
        "世界中の有名ロースターがパートナーに参画し、\n世界中のコーヒーをあなたの好みを届けるサービスへとアップデート",
      submessage:
        "自宅でも日本全国、また、世界各地のロースターの味を楽しんでいただけるよう、\nロースターパートナーに参画していただき、世界中のコーヒーからあなた好みを届けるサービスへと\nアップデートしました。第一弾となる今回は、日本の屈指のロースター10社から個性豊かな\nコーヒー豆を取り揃えています。",
    };
  },

  components: {
    PartnerCard,
  },
};
</script>
