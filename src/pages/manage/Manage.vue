<template>
  <div class="myManage">
    <el-header class="noPadding headerDiv">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside :class="['leftSlide', sliceClass]">
        <Slide></Slide>
      </el-aside>
      <el-container :class="['rightCotent', statusClass]">
        <el-main class="manageItem noPadding">
          <div class="contentNav overPointr">
            <h1 class="itemTitle">信息列表模块</h1>
            <div class="rightPath">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'MainPage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>信息列表模块</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="contentCenterDiv">
            <transition name="component-fade" mode="out-in">
              <router-view v-if="!$route.meta.keepAlive" />
            </transition>
            <transition name="component-fade" mode="out-in">
              <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
              </keep-alive>
            </transition>
          </div>
        </el-main>
        <el-footer class="noPadding">
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Slide from '../../components/pageUnit/slide/Slide'
import Header from '../../components/pageUnit/header/Header'
import Footer from '../../components/pageUnit/footer/Footer'
import {mapState} from 'vuex'
export default {
  name: 'Manage',
  components: {
    Slide,
    Header,
    Footer
  },
  computed: {
    ...mapState(['slideStatus']),
    // 返回侧边导航栏是否展开的相应样式
    sliceClass: function () {
      return this.slideStatus ? 'openLftSlide' : 'closeLeftSlide'
    },
    statusClass: function () {
      return this.slideStatus ? 'closeContent' : 'openContent'
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/manageItem/manageItem";
  .myManage{
    /* 头部,height:2.5rem(50px) */
    .headerDiv{
      position: fixed;
      top: 0;
      z-index: 111;
      overflow: hidden;
      width: 100%;
      height: 50px!important;
      height: 2.5rem!important;
      background-color: #3c8dbc;
    }
    /* 主体部分 */
    .el-container{
      // 内容部分
      .el-main{
        overflow-x: hidden;
      }
      // 左边导航条样式，最大12.5rem(250px),最小3.5rem(70px)
      .el-aside{
        max-width: 250px;
        max-width: 12.5rem;
      }
      .leftSlide{
        position: fixed;
        top: 50px;
        top: 2.5rem;
        bottom: 0;
        left: 0;
        overflow-x: hidden;
        background-color: #304156;
        transition: 0.3s;
      }
      .openLftSlide{
        width: 250px;
        width: 12.5rem;
      }
      .closeLeftSlide{
        width: 70px!important;
        width: 3.5rem!important;
      }
      // 右边内容区样式，最大左边距12.5rem(250px),最小左边距3.5rem(70px)
      .rightCotent{
        margin-top: 50px;
        margin-top: 2.5rem;
        transition: 0.3s;
        // 底部,height:2rem(40px)
        .el-footer{
          overflow: hidden;
          height: 40px!important;
          height: 2rem!important;
        }
      }
      .openContent{
        margin-left: 70px;
        margin-left: 3.5rem;
      }
      .closeContent{
        margin-left: 250px;
        margin-left: 12.5rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    @import "../../assets/css/manageItem/manageItem-mobile";
    .myManage{
      /* 头部,height:5rem(100px) */
      .headerDiv{
        height: 100px!important;
        height: 5rem!important;
      }
      /* 主体部分 */
      .el-container{
        // 左边导航条样式,距离顶部5rem(100px)
        .leftSlide{
          top: 100px;
          top: 5rem;
        }
        .closeLeftSlide{
          width: 0!important;
        }
        // 右边内容区样式,距离顶部5rem(100px)
        .rightCotent{
          margin-top: 100px;
          margin-top: 5rem;
        }
        .openContent{
          margin-left: 0!important;
        }
        .closeContent{
          margin-left: 250px;
          margin-right: -250px;
          margin-left: 12.5rem;
          margin-right: -12.5rem;
        }
      }
    }
  }
</style>
