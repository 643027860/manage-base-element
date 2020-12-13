<template>
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
  @keyframes bouncing-loader {
    from {
      opacity: 1;
      background: #4CAF50;
    }
    to {
      opacity: 0.5;
      background: #8385aa;
    }
  }
  .bouncing-loader {
    display: flex;
    justify-content: center;
  }
  .bouncing-loader > div {
    width: 1rem;
    height: 1rem;
    margin: 1rem 0.2rem;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }
  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  .bouncing-loader > div:nth-child(4) {
    animation-delay: 0.6s;
  }
</style>
