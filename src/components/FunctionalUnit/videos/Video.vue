<template>
  <div class="myItemVideo">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :webkit-playsinline="true"
                   :options="videoPlayerOptions"
                   @ended="onPlayerEnded($event)">
    </video-player>
  </div>
</template>

<script>
import {videoPlayer} from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      // 视频类型
      fileType: 'mp4'
    }
  },
  props: {
    videoUrl: {
      type: String,
      required: true
    },
    posterUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    // 视频播完回调
    onPlayerEnded ($event) {
      this.$refs.videoPlayer.player.src(this.videoUrl)
    }
  },
  computed: {
    videoPlayerOptions () {
      const videoPlayerOptions = {
        playbackRates: [0.75, 1.0, 1.25, 1.5, 2.0], // 播放速度
        autoplay: false, // 是否自动播放。
        muted: true, // 是否静音播放，默认情况下将会消除任何音频。
        loop: false, // 是否循环播放。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        // aspectRatio: '16:10', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 是否流体从而按比例缩放以适应其容器。
        flash: {hls: {withCreadentials: false}}, // 可以播放rtmp视频
        html5: {hls: {withCreadentials: false}}, // 可以播放m3u8视频
        sources: [{
          type: 'video/' + this.fileType,
          src: this.videoUrl // 视频url地址
        }],
        objectFit: 'cover',
        poster: this.posterUrl, // 封面地址
        notSupportedMessage: '此视频暂无法播放...', // 当无法播放时允许覆盖Video.js，显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      }
      return videoPlayerOptions
    }
  }
}
</script>

<style lang="less">
 @import "./myVideo";
  // 设置手机端的控制栏
  @media screen and(max-width: 768px){
    .video-js{
      .vjs-control-bar{
        height: 3em!important;
        font-size: 12px!important;
      }
      .vjs-time-control{
        line-height:3em!important;
      }
      .vjs-big-play-button{
        width: 60px!important;
        font-size: 2em!important;
        line-height: 50px!important;
      }
    }
  }
</style>
