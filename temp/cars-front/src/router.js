import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarList
    },
    {
      path: '/car',
      name: 'car',
      component: CarForm
    }
  ]
})
