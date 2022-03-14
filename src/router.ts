import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';
import LoginView from './views/LoginView.vue';
import WelcomeView from './views/WelcomeView.vue';
import DashboardView from './views/DashboardView.vue';

const routes = [
    { path: '/', name: 'welcome', component: WelcomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
