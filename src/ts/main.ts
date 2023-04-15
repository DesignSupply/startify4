import '../scss/main.scss';
import $ from 'jquery';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useRouter } from './route';
import App from '../vue/App.vue';

createApp(App)
  .use(createPinia())
  .use(useRouter)
  .mount('#app');

$(function() {
  console.log('jQuery is ready.')
});