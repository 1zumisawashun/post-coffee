<template>
  <div class="common-container">
    <youtube
      :video-id="videoId"
      @playing="playing"
      :player-vars="playerVars"
      :width="width"
      :height="height"
      class="youtube-block"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: "100%",
      height: "650",
      videoId: "y-eh4xx3jPQ",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  methods: {
    playing() {
      console.log("再生中です");
    },
  },
};
</script>
