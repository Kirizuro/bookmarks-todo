import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import TodoLocal from '@views/TodoLocal.vue';
import TodoPinia from '@views/TodoPinia.vue';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/pinia', name: 'Pinia', component: TodoPinia },
  { path: '/local', name: 'Local', component: TodoLocal },
  {
    path: '/*',
    redirect: { path: '/' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
