import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    loading: false
  },
  getters: {
    getTasks (state) {
      return state.tasks
    },
    getTasksFromStorage (state) {
      const storage = window.sessionStorage
      const items = storage.getItem('todo-list')

      if (items) {
        return items
      }

      return null
    }
  },
  mutations: {
    addTask (state, payload) {
      const newTask = {
        id: (payload.id) ? payload.id : Math.random().toString(32).substr(2, 6),
        title: payload.title,
        desc: payload.desc,
        status: payload.status,
        time: payload.time
      }

      state.tasks.push(newTask)
    },
    updateTask (state, payload) {
      state.tasks = state.tasks.map(task => {
        if (task.id === payload.id) {
          return {
            id: payload.id,
            title: payload.title,
            desc: payload.desc,
            status: payload.status,
            time: payload.time
          }
        } else {
          return task
        }
      })
    },
    deleteTask (state, payload) {
      const itemIndex = state.tasks.findIndex(task => task.id === payload)

      state.tasks.splice(itemIndex, 1)
    },
    updateSessionStorage (state) {
      const storage = window.sessionStorage

      storage.setItem('todo-list', JSON.stringify(state.tasks))
    },
    clearSessionStorage () {
      const storage = window.sessionStorage

      storage.clear()
    }
  },
  actions: {
    async addTask ({ state, commit }, payload) {
      state.loading = true
      commit('addTask', payload)
      commit('updateSessionStorage')

      await loadingPromise()
      state.loading = false
    },
    async updateTask ({ state, commit }, payload) {
      state.loading = true

      commit('updateTask', payload)
      commit('updateSessionStorage')

      await loadingPromise()
      state.loading = false
    },
    deleteTask ({ commit }, payload) {
      commit('deleteTask', payload)
      commit('updateSessionStorage')
    },
    clearStorage ({ commit }) {
      commit('clearSessionStorage')
    }
  }
})

async function loadingPromise () {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000))
}
