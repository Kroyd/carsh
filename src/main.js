import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router'

import MyButton from 'primevue/button';
import MyCard from 'primevue/card';
import InputText from 'primevue/inputtext';

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";


const app =  createApp(App);
app.use(router);
app.use(PrimeVue, {ripple: true});

app.component("MyButton", MyButton);
app.component("MyCard", MyCard);
app.component("InputText", InputText); 

app.mount('#app');
