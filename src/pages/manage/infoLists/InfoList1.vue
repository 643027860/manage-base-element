<template>
  <div class="myInfoList">
    <div class="contentSearch">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="查询姓名">
          <el-input v-model="searchForm.name" clearable placeholder="请输入查询姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="searchForm.sex" clearable  placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="myButton searchButton" @click="searchInfo">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          type="index"
          width="50">
      </el-table-column>
      <el-table-column
          prop="date"
          label="日期"
          min-width="150">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          min-width="120">
      </el-table-column>
      <el-table-column
          prop="province"
          label="省份"
          min-width="120">
      </el-table-column>
      <el-table-column
          prop="city"
          label="市区"
          min-width="120">
      </el-table-column>
      <el-table-column
          label="地址"
          min-width="300">
        <template slot-scope="scope">
          <div class="overPointr2">
            {{scope.row.address}}
          </div>
        </template>
      </el-table-column>
      <el-table-column
          prop="zip"
          label="邮编"
          min-width="120">
      </el-table-column>
      <el-table-column
          label="操作"
          min-width="120">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      searchForm: {
        name: '',
        sex: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  mounted () {
    this.choiceMenuId('InfoList1')
  },
  methods: {
    ...mapActions(['choiceMenuId']),
    // 查询信息表单
    searchInfo () {
      let {name, sex} = this.searchForm
      if (name && sex) {
        console.log(name, sex)
      } else {
        console.log('请输入查询信息')
      }
    },
    // 表格方法
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
  .myInfoList{

  }
</style>
