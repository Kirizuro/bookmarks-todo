import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import Router from '@/router/index';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(pinia).use(vuetify).use(Router).mount('#app');
