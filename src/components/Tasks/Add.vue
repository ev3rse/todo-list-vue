<template>
  <form @submit.prevent="saveTask" class="form">
    <fieldset>
      <legend>Add a new task</legend>
      <div class="row">
        <div class="form-item">
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="title" class="form-item-input" required />
        </div>
        <div class="form-item">
          <label for="desc">Desc: </label>
          <input type="text" id="desc" v-model="desc" class="form-item-input" />
        </div>
        <div class="form-item">
          <label for="status">Status: </label>
          <select id="status" v-model="status">
            <option value="new">New</option>
            <option value="in-progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <p v-if="task">Created(unixtime): <strong>{{ task.time }}</strong></p>
        <div class="form-item">
          <button type="submit" :disabled="!this.title" class="button">Save</button>
          <button v-if="task" type="submit" :disabled="!this.title" @click.prevent="deleteTask" class="button">Delete</button>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'add-task',
  props: {
    task: {
      type: Object
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    title: null,
    desc: null,
    status: 'new'
  }),
  watch: {
    task: function (val) {
      if (val) {
        this.updateValues()
      }
    }
  },
  created () {
    this.updateValues()
  },
  methods: {
    saveTask () {
      if (this.isEdit) {
        this.updateTask()
      } else {
        this.addTask()
      }
    },
    addTask () {
      this.$store.dispatch('addTask', {
        title: this.title,
        desc: this.desc,
        status: this.status,
        time: new Date().getTime()
      })

      this.$router.push('/')
    },
    updateTask () {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        title: this.title,
        desc: this.desc,
        status: this.status
      })
      this.$router.push('/')
    },
    updateValues () {
      if (this.task) {
        this.title = this.task.title
        this.desc = this.task.desc
        this.status = this.task.status
      }
    },
    deleteTask () {
      this.$store.dispatch('deleteTask', this.task.id)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-weight: bold;
    margin-bottom: 4px;
  }
}
</style>
