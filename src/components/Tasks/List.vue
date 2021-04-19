<template>
  <div>
    <div v-if="getTasks && getTasks.length" class="list-group">
      <Task :task="task" v-for="task in getTasks" :key="task.id" />
    </div>
    <div v-else class="no-tasks">No Tasks.</div>
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'task-list',
  components: { Task },
  created () {
    const existingTasks = this.$store.getters.getTasksFromStorage

    if (existingTasks) {
      const items = JSON.parse(existingTasks)

      items.forEach(item => {
        this.$store.dispatch('addTask', {
          id: item.id,
          title: item.title,
          desc: item.desc,
          status: item.status,
          time: item.time,
          completed: item.completed
        })
      })
    }
  },
  computed: {
    getTasks () {
      return this.$store.getters.getTasks
    }
  }
}
</script>

<style lang="scss" scoped>
.no-tasks {
  font-size: 20px;
  font-weight: bold;
  color: red;
  text-align: center;
  padding: 20px 0 40px;
}
</style>
