import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';
import LoginView from './views/LoginView.vue';
import WelcomeView from './views/WelcomeView.vue';
import HomeView from './views/HomeView.vue';
import ProfileView from './views/ProfileView.vue';
import BuyTickets from './views/BuyTickets.vue';

const routes = [
    { path: '/', name: 'welcome', component: WelcomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/buy', name: 'buy', component: BuyTickets },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
