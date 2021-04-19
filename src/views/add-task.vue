<template>
  <div class="page">
    <AddTask />
  </div>
</template>

<script>
import AddTask from '@/components/Tasks/Add'

export default {
  name: 'add-task',
  components: {
    AddTask
  }
}
</script>

<style scoped>
.page {
  margin-top: 40px;
}
</style>
