<template>
  <div class="myInfoLists">
    <div class="contentCenter">
      <h1 class="contentTitle">
        信息列表：
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
      <Pages :page="page" @handleCurrentChange="handleCurrentChange"></Pages>
    </div>
  </div>
</template>

<script>
import Pages from '../../../components/pageUnit/pages/Pages'
export default {
  name: 'InfoLists',
  data () {
    return {
      page: {
        pageNum: 1,
        pageSize: 10,
        totalPage: 1
      }
    }
  },
  components: {
    Pages
  },
  methods: {
    // 分页
    handleCurrentChange (pagenum) {
      this.page.pageNum = pagenum
      this.reqInfos()
    },
    // 获取对应页数的信息列表
    reqInfos () {
      console.log(this.page.pageNum)
    }
  }
}
</script>

<style lang="less">
  .myInfoLists{
    .contentCenterDiv{
      .contentCenter{
        .contentDiv{
          min-height: calc(100vh - 15rem);
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .myInfoLists{
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
