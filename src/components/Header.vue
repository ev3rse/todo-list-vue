<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <a class="navbar-item" href="/">Task List</a>
      </div>
      <div class="header__btns">
        <base-button green @click="addTask">Add task</base-button>
        <base-button green @click="clearSessionStorage">Clear</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from './base/BaseButton'
export default {
  name: 'header-component',
  components: { BaseButton },
  methods: {
    addTask () {
      this.$router.push('/add')
    },
    clearSessionStorage () {
      this.$store.dispatch('clearStorage')
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: grey;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .3);

  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    margin-right: 100px;
  }

  &__btns {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

.navbar-item {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
</style>
