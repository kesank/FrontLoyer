import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Loyer from '../views/Liste.vue';
import Situation from '../views/Bloc.vue';
import Recap from '../views/Recap.vue';
import Login from '../views/Login.vue';
import Depense from '../views/Depense.vue';
import Logement from '../views/Logement.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tableau_loyer',
        name: 'loyer',

        component: Loyer
    },
    {
        path: '/situation',
        name: 'situation',

        component: Situation
    },
    {
        path: '/récapitulatif',
        name: 'recap',

        component: Recap
    },
    {
        path: '/login',
        name: 'login',

        component: Login
    },
    {
        path: '/logement',
        name: 'logement',

        component: Logement
    },
    {
        path: '/depense',
        name: 'depense',

        component: Depense
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
