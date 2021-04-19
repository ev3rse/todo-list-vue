<template>
  <div id="app">
    <Header />
    <main class="main">
      <TaskList />
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import TaskList from '@/components/Tasks/List'

export default {
  name: 'app',
  components: { Header, TaskList }
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: #2c3e50;
  font-size: 16px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  min-width: 760px;
  padding: 30px 15px;
}

select,
input[type="text"] {
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  padding: 4px 8px;
}

.button {
  width: 150px;
  height: 34px;
  margin: 10px auto 5px;
  cursor: pointer;
}
</style>
