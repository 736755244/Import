import Vue from 'vue'
import Router from 'vue-router'
import imp from '@/components/Import'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'imp',
      component: imp
    }
  ]
})
