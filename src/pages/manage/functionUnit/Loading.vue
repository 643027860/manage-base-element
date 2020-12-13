<template>
  <div class="myItem myLoading">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Loading1</h1>
          </div>
          <div class="chartDiv">
            <Loading1></Loading1>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Loading2</h1>
          </div>
          <div class="chartDiv">
            <Loading2></Loading2>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Loading3</h1>
          </div>
          <div class="chartDiv">
            <Loading3></Loading3>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Loading4</h1>
          </div>
          <div class="chartDiv">
            <Loading4></Loading4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Loading1 from '../../../components/FunctionalUnit/loadings/Loading1'
import Loading2 from '../../../components/FunctionalUnit/loadings/Loading2'
import Loading3 from '../../../components/FunctionalUnit/loadings/Loading3'
import Loading4 from '../../../components/FunctionalUnit/loadings/Loading4'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      // 是否显示加载中
      loading: false
    }
  },
  components: {
    Loading1,
    Loading2,
    Loading3,
    Loading4
  },
  mounted () {
    // 修改侧边导航选中值
    this.choiceMenuId('Loading')
    this.toUploading()
  },
  methods: {
    ...mapActions(['choiceMenuId']),
    // 改变请求状态
    toUploading () {
      this.loading = true
    }
  }
}
</script>

<style lang="less">
  .myItem{
    .itemChart{
      margin: 10px 0;
      border-radius: 10px;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
      border: 2px solid rgb(233, 233, 233);
      border-top-color: #00c0ef;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
      .chartHeader{
        padding: 0.75rem;
        padding: 0.75rem;
        .chartTitle{
          margin: 0;
          font-size: 20px;
          line-height: 24px;
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }
      .chartDiv{
        padding: 10px;
        padding: 0.5rem;
      }
    }
  }
</style>
