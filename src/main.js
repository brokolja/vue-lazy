// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

// Split each route's components into a separate chunk, and only load them when the route is visited.
// Hint: Component chunks can also be grouped: http://router.vuejs.org/en/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
const router = new VueRouter({
  routes: [
      {
        name: 'root',
        path: '/',
        component: resolve => require(['./components/Root.vue'], resolve)
      },
      {
        name: 'hello',
        path: '/hello',
        component: resolve => require(['./components/Hello.vue'], resolve)
      },
      {
        name: 'bye',
        path: '/bye',
        component: resolve => require(['./components/Bye.vue'], resolve)
      }
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
