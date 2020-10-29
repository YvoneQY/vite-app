<template>
  <div class="video-bar" v-if="videoEle">
    <span class="progress-bar">
      <el-slider
        class="elslide"
        v-model="videoState.percentage"
        :format-tooltip="formatTooltip"
        @change="setPlayTime"
      ></el-slider>
    </span>

    <div class="video_bottom">
      <div class="video_bottom_left">
        <i  class="iconfont iconkuaijin3" @click="subSpeed(videoEle)"></i>
        <i  class="iconfont" @click="play" :class="isPlay()"></i>
        <i  class="iconfont iconkuaijin3-copy" @click="addSpeed(videoEle)"></i>
        <span class="alltime">
          <span>{{videoState.currentTime}}/{{videoState.playDuration}}</span>
        </span>
      </div>
      <div class="video_bottom_right">
        <span class="progress-volume" :style="{color:activeVolume}">
          <i  class="iconfont iconyinliang" @click="getVolume()"></i>
          {{videoState.volume}}%
          <span class="verticalSlide" v-show="isVolume">
            <el-slider vertical height="100px" v-model="videoState.volume" @input="changVolume"></el-slider>
          </span>
        </span>
        <el-tooltip class="item" effect="dark" content="循环" placement="top-start">
          <i

            class="iconfont icondanxunhuan"
            :style="{color:activeColor}"
            @click="getLoop()"
          ></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="全屏" placement="top-start">
          <i  class="iconfont iconfangda-copy" @click="fullSctreen(videoEle)"></i>
        </el-tooltip>
        <span class="speedbox">
          <div class="speedlayer" v-if="isSpeed">
            <i
              tag="span"
              class="speedItem"
              v-for="item in options"
              :key="item"
              @click="fullSctreen1(item)"
              :style="{color:currentSpeed==item?'#b78433':'white'}"
            >{{item}}</i>
          </div>
          <el-tooltip class="item" effect="dark" content="倍速" placement="top-start">
            <i

              :style="{color:activeSpeedColor}"
              class="iconfont iconfanbei"
              @click="getSpeed(videoEle)"
            ></i>
          </el-tooltip>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "PlayerBar",
  props: ["videoDom"],
  data() {
    return {
      //播放倍速相关调整
      options: [0.5, 0.8, 1, 1.2, 1.5, 1.8, 2],
      currentSpeed: 1,
      //   speedVal: 1,
      isSpeed: false,
      isloop: false, //循环
      activeColor: "white",
      activeVolume: "white",
      isVolume: false,
      activeSpeedColor: "white",
      videoState: {
        play: false, //播放状态
        playState: false, //记录播放状态
        playDuration: "00:00", //视频总时长
        currentTime: "00:00", //当前播放时长
        pecertage: 0, //播放进度条数
        volume: 50, //设置播放音量
        isScreenFull: false
      },
      videoEle: null
    };
  },
  methods: {
    /**
    开进
     */
    addSpeed(videoEle) {
      this.videoEle.currentTime = this.videoEle.currentTime + 20;
    },
    /**
    快退
     */
    subSpeed(videoEle) {
      if (this.videoEle.currentTime >= 20) {
        this.videoEle.currentTime = this.videoEle.currentTime - 20;
      } else {
        this.videoEle.currentTime = 0;
      }
    },
    currentValue(item) {
      return {
        color: this.currentSpeed == item ? "rgb(247, 209, 148)" : "white"
      };
    },
    /**
      是否倍速播放
     */
    getSpeed() {
      this.isSpeed = !this.isSpeed;
      this.activeSpeedColor = this.isSpeed ? "#b78433" : "white";
    },

    /**
    是否循环播放
     */
    getLoop() {
      this.isloop = !this.isloop;
      this.videoEle.loop = this.isloop;
      this.activeColor = this.isloop ? "#b78433" : "white";
    },
    getVolume() {
      console.log(this.isVolume);
      this.isVolume = !this.isVolume;
      this.activeVolume = this.isVolume ? "#b78433" : "white";
    },
    /**
     * 格式化时间显示
     */
    formatTooltip(val) {
      let currentPlayTime;
      let currentTime;
      if (val) {
        currentPlayTime = (val * this.videoEle.duration) / 100;
        currentTime = this.timeTanslate(currentPlayTime);
      } else {
        currentTime = 0;
      }
      return currentTime;
    },

    //修改当前播放的内容
    setPlayTime(e) {
      let currentPlayTime = (e * this.videoEle.duration) / 100;
      this.videoEle.currentTime = currentPlayTime;
    },

    changVolume() {
      this.videoEle.volume = this.videoState.volume / 100;
      sessionStorage.volume = this.videoEle.volume;
    },
    /**
     * 播放及暂停时的iconfont切换
     */
    isPlay() {
      return this.videoState.playState ? "iconiconstop" : "iconbofang101";
    },
    //播放暂停功能
    play() {
      if (this.videoState.playState) {
        this.videoEle.pause(); //暂停
        this.videoState.playState = false;
      } else {
        this.videoEle.play(); //播放
        this.videoState.playState = true;
      }

      // this.$emit("getPause", this.videoState.playState);

    },

    /**获取视频总时长，总时长05:00转换为00:00格式显示
     *
     * **/
    timeTanslate(t) {
      let m = Math.floor(t / 60);
      m < 10 && (m = "0" + m);
      return m + ":" + ((t % 60) / 100).toFixed(2).slice(-2);
    },
    /**初始化video相关事件
     * loadeddata	当浏览器已加载音频/视频的当前帧时
     * loadedmetadata	当浏览器已加载音频/视频的元数据时
     * 	当目前的播放位置已更改时   timeupdate
     * */
    initVedio() {
      //修改音量为50
      this.changVolume();

      //获取视频总时长
      this.videoEle.addEventListener("loadedmetadata", () => {
        this.videoState.playDuration = this.timeTanslate(
          this.videoEle.duration
        );
      });
      // 监听视频播放过程中的时间
      this.videoEle.addEventListener("timeupdate", () => {
        this.videoState.currentTime = this.timeTanslate(
          this.videoEle.currentTime
        );
        this.videoState.percentage = Math.round(
          (100 * this.videoEle.currentTime) / this.videoEle.duration
        );
      });
      //检测是否播放完成
      this.videoEle.addEventListener("ended", e => {
        this.videoState.playState = !this.videoState.playState;
        let tempPlay = this.videoState.playState ? "play" : "pause";
        this.$emit("getPause", this.videoState.playState);
      });

      //检测是否发送网络错误
      this.videoEle.addEventListener("error", () => {
        Message.info("视频资源丢失或网络原因导致，请重试");
      });
      this.videoEle.addEventListener("οnended", () => {
        console.log("播放结束了e");
      });
      this.videoEle.addEventListener("onerror", e => {
        console.log("监听播放过程网络故障");
      });
    },

    fullSctreen1(value) {
      this.currentSpeed = value;
      this.videoEle.playbackRate = value;
      this.getSpeed();
    },
    changeSpeed(value) {
      if (this.videoEle) {
        this.videoEle.playbackRate = value;
      }
    },

    //是否全屏显示
    fullSctreen(ele) {
      this.isScreenFull = !this.isScreenFull;
      if (this.isScreenFull) {
        if (ele.requestFullscreen) {
          ele.requestFullscreen();
        } else if (ele.mozRequestFullScreen) {
          ele.mozRequestFullScreen();
        } else if (ele.webkitRequestFullscreen) {
          ele.webkitRequestFullscreen();
        } else if (ele.msRequestFullscreen) {
          ele.msRequestFullscreen();
        }
      } else {
        if (ele.exitFullScreen) {
          ele.exitFullScreen();
        } else if (ele.mozCancelFullScreen) {
          ele.mozCancelFullScreen();
        } else if (ele.webkitExitFullscreen) {
          ele.webkitExitFullscreen();
        } else if (ele.msExitFullscreen) {
          ele.msExitFullscreen();
        }
      }
    },

    updateBar() {
      this.videoState.percentage = 0;
      this.videoState.playState = false;
      this.initVedio();
      this.$emit("updateFreshBar", 0);
    }
  },
  watch: {

    /**
     * video元素获取
     */
    videoDom(value, oldvalue) {
      if (value) {
        this.videoEle = value;
        this.initVedio();
      }
    },
    //音频控制播放暂停
    isVedio(value, oldvalue) {
      if (value == "play") {
        this.videoState.playState = false;
        this.play();
      } else if (value == "pause") {
        this.videoState.playState = true;
        this.play();
      }
    }
  },

  mounted() {
    this.videoState.playState = false;
    if (sessionStorage.volume) {
      this.videoState.volume =
        parseFloat(sessionStorage.volume).toFixed(2) * 100;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.el-slider.elslide {
  position: relative;
  z-index: 3;
}

.speedbox {
  position: relative;
  .speedlayer {
    position: absolute;
    top: -294px;
    left: -40px;
    background: rgba(43, 37, 37, 0.34);
    transition: 1s all;
    right: -27px;
    border-radius: 1px;
    .speedItem {
      font-size: 18px;
      margin: 0;
      text-align: center;
      line-height: 40px;
      height: 40px;
    }
    .speedItem:hover {
      font-size: 18px;
      cursor: pointer;
      background: #b7894f;
    }
  }
}
.video-bar {
  width: 100%;
  background: rgba(43, 37, 37, 0.34);
  border-radius: 0px 0px 10px 10px;
  // padding: 14px 18px;
  display: flex;
  // align-items: center;
  font-size: 23px;
  // box-sizing: border-box;
  color: white !important;
  // border-radius: 0 0 15px 15px;
  flex-direction: column;
  padding-bottom: 10px;

  .video_bottom {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    .video_bottom_right {
      display: flex;
      align-items: center;
    }
    .video_bottom_bottom {
      display: flex;
      align-items: center;
    }
  }

  span {
    margin: 0 10px;
  }
  .progress-bar {
    flex: 1;
    display: inline-block;
  }
  .progress-volume {
    // width: 37%;
    width: 96px;
    display: flex;
    align-items: center;
    position: relative;
    .verticalSlide {
      position: absolute;
      bottom: 72px;
      left: -13px;
    }
  }
  .iconfont {
    font-size: 35px;
  }
}

.showSpeed {
  position: relative;
}
.speedList {
  position: absolute;
  width: 105px;
  z-index: 9;
  bottom: 49px;
  background: rgba(128, 128, 128, 0.78);
  left: -58px;
}
.speedItem {
  display: inline-block;
  width: 100%;
  font-size: 35px;
}
.indicator {
  position: absolute;
  bottom: 27px;
  left: -2px;
  color: rgba(128, 128, 128, 0.78);
}
</style>

