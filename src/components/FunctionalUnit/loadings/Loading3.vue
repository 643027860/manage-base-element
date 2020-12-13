<template>
  <div class="font-loader">
    <div>L</div>
    <div>O</div>
    <div>A</div>
    <div>D</div>
    <div>I</div>
    <div>N</div>
    <div>G</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
  @keyframes font-loader {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-0.8rem);
    }
  }
  .font-loader {
    display: flex;
    height: 3rem;
    justify-content: center;
  }
  .font-loader > div {
    margin: 0.5rem 0.2rem;
    font-size: 1.5rem;
    font-weight: 600;
    animation: font-loader 0.6s infinite alternate;
  }
  .font-loader > div:nth-child(1) {
    color: #f44336;
    animation-delay: 0s;
  }
  .font-loader > div:nth-child(2) {
    color: #9C27B0;
    animation-delay: 0.1s;
  }
  .font-loader > div:nth-child(3) {
    color: #f99b0c;
    animation-delay: 0.2s;
  }
  .font-loader > div:nth-child(4) {
    color: #cee007;
    animation-delay: 0.3s;
  }
  .font-loader > div:nth-child(5) {
    color: #00c6b2;
    animation-delay: 0.4s;
  }
  .font-loader > div:nth-child(6) {
    color: #4CAF50;
    animation-delay: 0.5s;
  }
  .font-loader > div:nth-child(7) {
    color: #f44336;
    animation-delay: 0.6s;
  }
</style>
