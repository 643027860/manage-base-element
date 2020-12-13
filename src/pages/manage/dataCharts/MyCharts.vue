<template>
  <div class="myItems myCharts">
    <div class="myItemContentDiv">
      <div class="contentCenter">
        <h1 class="contentTitle">
          图表列表：
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
  name: 'Charts'
}
</script>

<style lang="less">
  .myItems{
    .myItemContentDiv{
      .contentCenter{
        .contentDiv{
          min-height: calc(100vh - 250px);
          min-height: calc(100vh - 12.5rem);
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .myItems{
      .myItemContentDiv{
        .contentCenter{
          .contentDiv{
            min-height: calc(100vh - 320px);
            min-height: calc(100vh - 16rem);
          }
        }
      }
    }
  }
</style>
