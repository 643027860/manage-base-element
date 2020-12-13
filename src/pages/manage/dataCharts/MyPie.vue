<template>
  <div class="myItem myPie">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Pie1</h1>
          </div>
          <div class="chartDiv">
            <Pie1 :MyPieId="MyPieId1" :Height="320" :myData="[]"></Pie1>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Pie2</h1>
          </div>
          <div class="chartDiv">
            <Pie2 :MyPieId="MyPieId2" :Height="320" :myData="[]"></Pie2>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Pie3</h1>
          </div>
          <div class="chartDiv">
            <Pie3 :MyPieId="MyPieId3" :Height="320" :myData="[]"></Pie3>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="itemChart">
          <div class="chartHeader">
            <h1 class="chartTitle">Pie4</h1>
          </div>
          <div class="chartDiv">
            <Pie4 :MyPieId="MyPieId4" :Height="320" :myData="[]"></Pie4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Pie1 from '../../../components/FunctionalUnit/charts/pie/Pie1'
import Pie2 from '../../../components/FunctionalUnit/charts/pie/Pie2'
import Pie3 from '../../../components/FunctionalUnit/charts/pie/Pie3'
import Pie4 from '../../../components/FunctionalUnit/charts/pie/Pie4'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      MyPieId1: 'pie1',
      MyPieId2: 'pie2',
      MyPieId3: 'pie3',
      MyPieId4: 'pie4'
    }
  },
  components: {
    Pie1,
    Pie2,
    Pie3,
    Pie4
  },
  mounted () {
    this.choiceMenuId('Pie')
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
