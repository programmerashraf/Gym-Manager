import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';
import { store } from './components/store/store';

import dash from "./components/dash/dash_home.vue";

Vue.use(axios);
Vue.use(VueRouter);


const app = new Vue({
    el: '#dash',
    store,
    components: {dash}
});
