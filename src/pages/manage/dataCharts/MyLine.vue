<template>
  <div class="myItem myLine">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Line1</h1>
          </div>
          <div class="chartDiv">
            <Line1 :MyLineId="MyLineId1" :Height="320" :myData="[]"></Line1>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Line2</h1>
          </div>
          <div class="chartDiv">
            <Line2 :MyLineId="MyLineId2" :Height="320" :myData="[]"></Line2>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Line3</h1>
          </div>
          <div class="chartDiv">
            <Line3 :MyLineId="MyLineId3" :Height="320" :myData="[]"></Line3>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Line4</h1>
          </div>
          <div class="chartDiv">
            <Line4 :MyLineId="MyLineId4" :Height="320" :myData="[]"></Line4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Line1 from '../../../components/FunctionalUnit/charts/line/Line1'
import Line2 from '../../../components/FunctionalUnit/charts/line/Line2'
import Line3 from '../../../components/FunctionalUnit/charts/line/Line3'
import Line4 from '../../../components/FunctionalUnit/charts/line/Line4'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      MyLineId1: 'line1',
      MyLineId2: 'line2',
      MyLineId3: 'line3',
      MyLineId4: 'line4'
    }
  },
  components: {
    Line1,
    Line2,
    Line3,
    Line4
  },
  mounted () {
    this.choiceMenuId('Line')
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
