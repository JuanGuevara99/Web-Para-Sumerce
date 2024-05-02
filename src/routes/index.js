import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomeView.vue';
import LoginPage from '@/pages/LoginPage.vue';
import SignupView from '@/pages/SignupView.vue';

const routes = [
  { path: '/', name: 'home' ,component: HomeView },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/signup', name: 'signup', component: SignupView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;