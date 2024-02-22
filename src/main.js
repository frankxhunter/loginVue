import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import vuetify from './plugins/vuetify'
import axiosPlugin from './plugins/axios'


Vue.use(BootstrapVue);
Vue.use(axiosPlugin);

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.directive('forUpdated', {
  componentUpdated(el, binding, vnode) {
    // Llamar a la función después de que se actualice el v-for
    //vnode.context[binding.value]();
    const scroll = document.getElementById("scroll");
    scroll.scrollTop = scroll.scrollHeight;
  },
});


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
