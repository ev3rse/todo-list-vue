import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/add',
    name: 'add-task',
    // route level code-splitting
    // this generates a separate chunk (list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/add-task')
  },
  {
    path: '/edit/:id',
    name: 'edit-task',
    // route level code-splitting
    // this generates a separate chunk (list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/edit-task')
  }
]

const router = new VueRouter({
  routes
})

export default router
