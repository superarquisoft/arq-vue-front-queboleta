import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';
import LoginView from './views/LoginView.vue';
import WelcomeView from './views/WelcomeView.vue';
import DashboardView from './views/DashboardView.vue';
import BuyTicket from './views/Options/BuyTicket.vue';
import SeeTicket from './views/Options/SeeTicket.vue';

const routes = [
    { path: '/', name: 'welcome', component: WelcomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
    { path: '/buy-ticket', name: 'buyTicket', component: BuyTicket },
    { path: '/see-ticket', name: 'seeTicket', component: SeeTicket },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
