import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        user: {
            id: 0,
            name: '',
            email: '',
            admin: false,
            password: '',
            subscription: {
                start: 0 ,
                end: 0,
            },
        },
        inp: false,
        loged: false,
        // Start Admin Panel
        AdminPanel: {
            currentPage: 'dashboard',
            loged: false,
            token: '',
            userEdit: {}
        },
        articles:[
            {
                img: 'https://imgplaceholder.com/420x320',
				adress: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            },
            {
                img: 'https://imgplaceholder.com/420x320',
				adress: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            },
            {
                img: 'https://imgplaceholder.com/420x320',
				adress: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            },
            {
                img: 'https://imgplaceholder.com/420x320',
				adress: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            }
        ]
    },
    mutations:{
        // Check if loged
        loged: state => {
            state.loged = !state.loged;
        },
        changeRegisterState: (state, payload) => {
            state.inp = (payload=='l') ? false : true
        },
        // Get User
        get_user_name: (state, value) => {
            state.user.name = value;
        },
        get_user_email: (state, value) => {
            state.user.email = value;
        },
        get_user_password: (state, value) => {
            state.user.password = value;
        },
        change_current_page: (state, payload) => {
            state.AdminPanel.currentPage = payload
         },
         subscriptionDateStart: (state, payload) => {
             state.user.subscription.start = payload
         },
         subscriptionDateEnd: (state, payload) => {
             state.user.subscription.end = payload
         },
    }
});