<template>
  <div class="manageItem myFunctions">
    <div class="contentNav overPointr">
      <h1 class="itemTitle">功能模块</h1>
      <div class="rightPath">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ name: 'MainPage' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>功能模块</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="contentCenterDiv">
      <div class="contentCenter">
        <h1 class="contentTitle">
          功能列表：
        </h1>
        <div class="contentDiv">
          <transition name="component-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive" />
          </transition>
          <transition name="component-fade" mode="out-in">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Function'
}
</script>

<style lang="less">
  .myFunctions{
    .contentCenterDiv{
      .contentCenter{
        .contentDiv{
          min-height: calc(100vh - 15rem);
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .myFunctions{
      .contentCenterDiv{
        .contentCenter{
          .contentDiv{
            min-height: calc(100vh - 16.5rem);
          }
        }
      }
    }
  }
</style>
