import Vue from 'vue'
import VueRouter from 'vue-router'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

