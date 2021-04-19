<template>
  <div class="todo-list-item"
       :class="{
          'todo-list-item--new': task.status === 'new',
          'todo-list-item--in-progress': task.status === 'in-progress',
          'todo-list-item--completed': task.status === 'completed'
       }"
  >
    <div class="todo-list-item__info">
      <div class="todo-list-item__title">{{ task.title }}</div>
      <div class="todo-list-item__desc">{{ task.desc }}</div>
      <div class="todo-list-item__status">{{ task.status }}</div>
    </div>
    <div class="todo-list-item__btns-group">
      <base-button blue @click.prevent="editTask(task.id)">
        <span>Edit</span>
      </base-button>
      <base-button v-if="task.status === 'completed'" red @click.prevent="deleteTask(task.id)" style="margin-left: 10px;">
        <span>Delete</span>
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-item',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTask (id) {
      this.$store.dispatch('deleteTask', id)
    },
    editTask (id) {
      this.$router.push(`/edit/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &__info {
    width: 400px;
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
    padding: 5px 0;
  }

  &__desc {
    font-size: 14px;
    padding-bottom: 15px;
  }

  &__status {
    font-size: 12px;
  }

  &__btns-group::v-deep {
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &--new {
    background-color: dodgerblue;
  }

  &--in-progress {
    background-color: #ffd861;
  }

  &--completed {
    background-color: #13ce66;
  }
}
</style>
