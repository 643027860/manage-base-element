<template>
  <div class="myNavIcon myAvator">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        <div class="myAvatorInner">
          <img class="noSelect myAvatorImg" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1463578878,1262482751&fm=26&gp=0.jpg" alt="">
          <span class="noSelect myAvatorSpan">{{user.name||'未登录'}}</span>
          <i class="el-icon-caret-bottom myAvatorI"></i>
        </div>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item divided command="out">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '管理员'
      }
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'out') {
        this.$confirm('确定退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          this.$router.replace({name: 'Login'})
          localStorage.setItem('RUANJIANBEI_USER', JSON.stringify(null))
        }).catch(() => {})
      }
    }
  }
}
</script>

<style lang="less">
  .myAvator{
    overflow: hidden;
    height: 50px;
    padding: 0 20px;
    margin-right: 20px;
    height: 2.5rem;
    padding: 0 1rem;
    margin-right: 1rem;
    .myAvatorInner{
      position: relative;
      line-height: 50px;
      line-height: 2.5rem;
      color: #FFF;
      vertical-align: middle;
      .myAvatorImg{
        width: 32px;
        height: 32px;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 10%;
        vertical-align: middle;
        cursor: pointer;
      }
      .myAvatorSpan{
        display: inline-block;
        padding: 5px 10px;
        line-height: 32px;
        padding: 0.25rem 0.5rem;
        line-height: 1.6rem;
        vertical-align: middle;
      }
      .myAvatorI{
        position: absolute;
        right: -8px;
        top: 20px;
        font-size: 12px;
        right: -0.4rem;
        top: 1rem;
        font-size: 0.6rem;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 768px){
    .myAvator{
      margin-right: 10px;
      margin-right: 0.5rem;
    }
  }
</style>
