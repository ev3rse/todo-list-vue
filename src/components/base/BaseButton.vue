<template>
  <button
    type="button"
    class="btn"
    :class="{
              'btn--disabled': disabled,
              'btn--red': red,
              'btn--blue': blue,
              'btn--green': green,
    }"
    @click="!disabled && $emit('click', $event)"
    :disabled="disabled"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    red: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  height: 36px;
  color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.2);
  }

  &--red {
    background-color: #ff4949;
  }

  &--blue {
    background-color: #50bfff;
  }

  &--green {
    background-color: #13ce66;
  }

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
