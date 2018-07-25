import Vue from 'vue'
import Router from 'vue-router'
import random from '@/components/random'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:classlevel_nums/:classlevel_rooms/:classnumbers',
      name: 'random',
      component: random
    }
  ]
})
