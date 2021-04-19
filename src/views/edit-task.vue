<template>
  <div class="page">
    <EditTask :task="task" is-edit />
  </div>
</template>

<script>
import EditTask from '@/components/Tasks/Add'

export default {
  name: 'edit-task',
  components: {
    EditTask
  },
  computed: {
    task () {
      return this.$store.state.tasks.find(task => task.id === this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.page {
  margin-top: 40px;
}
</style>
