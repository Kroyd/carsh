import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import MyButton from 'primevue/button';
import MyCard from 'primevue/card';

import "primevue/resources/themes/lara-light-blue/theme.css";    
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";


const app =  createApp(App);
app.use(PrimeVue, {ripple: true});
app.component("MyButton", MyButton);
app.component("MyCard" , MyCard)
app.use(router);
app.mount('#app');
