import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';
import { store } from './components/store/store';

import App from './components/App.vue';
import Home from "./components/pages/Home.vue";
import Profile from "./components/pages/Profile.vue";
import News from "./components/pages/News.vue";




import dash from "./components/dash/dash_home.vue";

import dashboard from "./components/dash/dash_home"


// import A from "./component/dash/blocks"

Vue.use(axios);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        },
        {
            path: "/news",
            name: "news",
            component: News
        }
    ]
})

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
});

<<<<<<< HEAD

const app = new Vue({
    el: '#dash',
    store,
    components: {dash}
});


const dash = new Vue({
    el: '#dash',
    store,
    components: {dashboard}
});

