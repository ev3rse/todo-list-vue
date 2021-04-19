<template>
  <div class="loader">
    <div class="loader__overlay"></div>
    <div class="loader__item">
      <svg viewBox="0 0 32 32">
        <circle class="path" cx="16" cy="16" r="12" fill="none" stroke-width="3"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;

  &__overlay {
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__item {
    svg {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      margin: -50px 0 0 -50px;
      animation: rotate 2s linear infinite;

      & .path {
        animation: dash 1.5s ease-in-out infinite;
        stroke: red;
        stroke-linecap: butt;
      }
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
