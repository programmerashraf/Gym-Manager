import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from "./components/pages/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            name: "Home",
            component: Home
        }
    ]
})

const app = new Vue({
    el: '#app',
    router,
    components: {App}
});
