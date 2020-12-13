<template>
  <div class="myHeader noSelect clearFloat">
    <div class="leftIconDiv">
      <div :class="['systemLogo', sliceClass]">
        海创
      </div>
    </div>
    <div :class="['rightIconDiv', statusClass]">
      <ControlMenu></ControlMenu>
      <div class="rightIcon">
        <Avator></Avator>
      </div>
    </div>
  </div>
</template>

<script>
import Avator from './avator/Avator'
import ControlMenu from './controlMenu/ControlMenu'
import {mapState} from 'vuex'
export default {
  name: 'myHeader',
  components: {
    Avator,
    ControlMenu
  },
  computed: {
    ...mapState(['slideStatus']),
    // 返回侧边导航栏是否展开的相应样式
    sliceClass: function () {
      return this.slideStatus ? 'openLftLogo' : 'closeLeftLogo'
    },
    statusClass: function () {
      return this.slideStatus ? 'closeNav' : 'openNav'
    }
  }
}
</script>

<style lang="less">
  // 解决hover影响移动端,图标悬浮时改变背景色
  @media (any-hover: hover){
    .myHeader{
      .myNavIcon:hover{
        background-color: rgba(0,0,0,0.1);
        cursor:pointer;
      }
    }
  }
  .myHeader{
    // 左边系统名及Logo，高2.5rem(50px)
    .leftIconDiv{
      float: left;
      line-height: 50px;
      line-height: 2.5rem;
      .systemLogo{
        background-color: rgba(0,0,0,0.2);
        color: #FFF;
        font-size: 18px;
        letter-spacing: 8px;
        font-size: 0.9rem;
        letter-spacing: 0.4rem;
        text-align: center;
        transition: 0.3s;
      }
      // nav左边距，最大12.5rem(250px),最小3.5rem(70px)
      .openLftLogo{
        width: 250px;
        width: 12.5rem;
      }
      .closeLeftLogo{
        width: 70px;
        width: 3.5rem;
      }
    }
    // 右边系统Nav，包括头像等等
    .rightIconDiv{
      height: 50px;
      line-height: 50px;
      height: 2.5rem;
      line-height: 2.5rem;
      transition: 0.3s;
      .rightIcon{
        float: right;
      }
    }
    .openNav{
      margin-left: 70px;
      margin-left: 3.5rem;
    }
    .closeNav{
      margin-left: 250px;
      margin-left: 12.5rem;
    }
  }
  @media screen and (max-width: 768px){
    .myHeader{
      // 左边系统名及Logo独自占一行
      .leftIconDiv{
        .systemLogo{
          width: 100vw;
        }
      }
      // 右边系统Nav，包括头像等等不需要左边距
      .rightIconDiv{
        margin-left: 0;
      }
    }
  }
</style>
