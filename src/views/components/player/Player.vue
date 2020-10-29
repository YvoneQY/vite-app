<template>
  <div class="home">
    <video ref="videoRef" src="../../../assets/login.mp4" class="video-play"></video>
    <video-bar :videoDom="videoPlay"></video-bar>
  </div>
</template>

<script>
import PlayerBar from "../player/PlayerBar";
// @ is an alias to /src
export default {
  name: "Player",
  components: {
    "video-bar": PlayerBar
  },
  data() {
    return {
      videoPlay: null,//获取当前video标签
    };
  },
  methods: {
    getVideoDom() {
      this.$nextTick(() => {
        this.videoPlay = this.$refs.videoRef;
      });
    },
  },
  mounted(){
    this.getVideoDom();
  }
};
</script>
<style lang="scss" scoped></style>
