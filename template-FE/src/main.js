import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// UI Libraries & Icons
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import VueSweetalert2 from 'vue-sweetalert2'
import vSelect from 'vue-select'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import VCalendar from 'v-calendar'

// Global Styles
import './styles/sweetalert2.css'
import 'vue-select/dist/vue-select.css'
import 'v-calendar/style.css'
import '@/components/StandAloneStyle.vue'

// Initialize the Vue Application
const app = createApp(App)

// Register Plugins
app.use(router)
app.use(store)
app.use(CoreuiVue)
app.use(VueSweetalert2)
app.use(HighchartsVue, { highcharts: Highcharts })
app.use(VCalendar, {})

// Global Component & Dependency Injection
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('v-select', vSelect)

// Mount the app to the DOM
app.mount('#app')