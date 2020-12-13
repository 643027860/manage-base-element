<template>
  <div class="pages">
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page.pageNum"
        :page-size="page.pageSize"
        :hide-on-single-page="page.totalPage < 0"
        layout="prev, pager, next"
        :total="page.totalPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 分页
    handleCurrentChange (pageNum) {
      this.$emit('handleCurrentChange', pageNum)
    }
  }
}
</script>

<style lang="less">
  // 分页,共2rem;height:1.5rem(30px);padding-top: 0.5rem(10px);
  .pages{
    overflow: hidden;
    height: 30px;
    padding-top: 10px;
    height: 1.5rem;
    padding-top: 0.5rem;
    text-align: center;
  }
</style>
