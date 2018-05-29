import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Layout from '@/views/layout/Layout'

Vue.prototype.$http = axios
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'create',
    children: [{
      path: '404',
      component: resolve => require(['@/views/errorPage/404'], resolve),
      name: '404',
      meta: {title: '404'}
    }],
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: '401',
    children: [{
      path: '401',
      component: resolve => require(['@/views/errorPage/401'], resolve),
      name: '401',
      meta: {title: '401'}
    }],
    hidden: true
  },
  { path: '/login', component: resolve => require(['@/views/login'], resolve), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'create',
    children: [{
      path: 'create',
      component: resolve => require(['@/views/form/create'], resolve),
      name: 'create',
      meta: { title: '文章发布', icon: 'article', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'user',
    children: [{
      path: 'user',
      component: resolve => require(['@/views/user'], resolve),
      name: 'user',
      meta: { title: '用户列表', icon: 'user', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    children: [{
      path: 'icon',
      component: resolve => require(['@/views/svg-icons'], resolve),
      name: 'icons',
      meta: { title: '图标', icon: 'icon', noCache: true }
    }]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'charts',
    meta: {
      title: '报表分析',
      icon: 'chart'
    },
    children: [
      {path: 'keyboard', component: resolve => require(['@/views/charts/keyboard'], resolve), name: 'keyboardChart', meta: { title: '键盘图表', noCache: true }},
      {path: 'line', component: resolve => require(['@/views/charts/line'], resolve), name: 'lineChart', meta: { title: '折线图', noCache: true }},
      {path: 'mixchart', component: resolve => require(['@/views/charts/mixChart'], resolve), name: 'mixChart', meta: { title: '混合图表', noCache: true }}
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table/complex-table',
    name: 'example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {path: 'mixin', component: resolve => require(['@/views/example/mixin/index'], resolve), name: 'mixin', meta: { title: 'mixin', noCache: true }},
      {path: 'tab', component: resolve => require(['@/views/example/tab/index'], resolve), name: 'tab', meta: { title: 'tab', noCache: true }},
      {path: 'back-to-top', component: resolve => require(['@/views/example/backToTop'], resolve), name: 'backToTop-demo', meta: { title: 'backToTop' }},
      {path: 'drag-dialog', component: resolve => require(['@/views/example/dragDialog'], resolve), name: 'dragDialog-demo', meta: { title: 'dragDialog' }}
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
]
