<template>
  <div class="bouncing-loading">
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
  @keyframes bouncing-loading {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.5;
      transform: translateY(-1rem);
    }
  }
  .bouncing-loading {
    display: flex;
    justify-content: center;
  }
  .bouncing-loading > div {
    width: 1rem;
    height: 1rem;
    margin: 1rem 0.2rem;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncing-loading 0.6s infinite alternate;
  }
  .bouncing-loading > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .bouncing-loading > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  .bouncing-loading > div:nth-child(4) {
    animation-delay: 0.6s;
  }
</style>
