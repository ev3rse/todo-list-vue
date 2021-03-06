import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const camelCase = require('lodash.camelcase')
const upperFirst = require('lodash.upperfirst')

Vue.config.productionTip = false

const requireComponent = require.context(
  './components/base',
  false,
  /Base[A-Z]\w+\.(vue|ts)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      // @ts-ignore
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
