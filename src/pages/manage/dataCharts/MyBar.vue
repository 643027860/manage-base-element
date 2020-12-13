<template>
  <div class="myItem myBar">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Bar1</h1>
          </div>
          <div class="chartDiv">
            <Bar1 :MyBarId="MyBarId1" :Height="320" :myData="[]"></Bar1>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Bar2</h1>
          </div>
          <div class="chartDiv">
            <Bar2 :MyBarId="MyBarId2" :Height="320" :myData="[]"></Bar2>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Bar3</h1>
          </div>
          <div class="chartDiv">
            <Bar3 :MyBarId="MyBarId3" :Height="320" :myData="[]"></Bar3>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Bar4</h1>
          </div>
          <div class="chartDiv">
            <Bar4 :MyBarId="MyBarId4" :Height="320" :myData="[]"></Bar4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bar1 from '../../../components/FunctionalUnit/charts/bar/Bar1'
import Bar2 from '../../../components/FunctionalUnit/charts/bar/Bar2'
import Bar3 from '../../../components/FunctionalUnit/charts/bar/Bar3'
import Bar4 from '../../../components/FunctionalUnit/charts/bar/Bar4'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      MyBarId1: 'bar1',
      MyBarId2: 'bar2',
      MyBarId3: 'bar3',
      MyBarId4: 'bar4'
    }
  },
  components: {
    Bar1,
    Bar2,
    Bar3,
    Bar4
  },
  mounted () {
    this.choiceMenuId('Bar')
  },
  methods: {
    ...mapActions(['choiceMenuId'])
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
