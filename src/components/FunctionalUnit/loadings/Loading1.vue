<template>
  <div class="load_more_box">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
  @keyframes load_more_box {
    0% {
      height:0.375rem;
      background:#9b59b6;
    }
    25% {
      height:1.5rem;
      background:#0081ff;
    }
    50% {
      height:0.375rem;
      background:#9b59b6;
    }
    100% {
      height:0.375rem;
      background:#9b59b6;
    }
  }
  /* 上拉加载 */
  .load_more_box {
    height:3rem;
    line-height:3rem;
    position:relative;
    text-align:center;
  }
  .load_more_box span {
    width:0.375rem;
    height:0.375rem;
    margin:0 0.0625rem;
    display:inline-block;
    vertical-align:middle;
    background:#9b59b6;
    animation:load_more_box 1.5s  infinite ease-in-out;
  }
  .load_more_box span:nth-child(2) {
    animation-delay:.2s;
  }
  .load_more_box span:nth-child(3) {
    animation-delay:.4s;
  }
  .load_more_box span:nth-child(4) {
    animation-delay:.6s;
  }
  .load_more_box span:nth-child(5) {
    animation-delay:.8s;
  }
</style>
