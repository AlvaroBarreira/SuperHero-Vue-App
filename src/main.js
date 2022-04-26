import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import Main from './stores/Main'
import 'vue-toastification/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@fortawesome/fontawesome-free/js/all'
import Toast from "vue-toastification";
import Vue3Transitions from 'vue3-transitions'

const options = {
  position: "top-center",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: "button",
  icon: true,
  rtl: false
};

createApp(App)
  .use(Vue3Transitions)
  .use(Toast, options)
  .use(Main)
  .use(router)
  .mount('#app')
