import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/main/goods/goods'
import ratings from '@/components/main/ratings/ratings'
import seller from '@/components/main/seller/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'list-active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
