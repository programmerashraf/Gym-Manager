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
            currentPage: 'articleAdd',
            loged: false,
            token: '',
            userEdit: {}
        },
        // Start Articles
        articles:[
            {
                id: 1,
                img: 'https://imgplaceholder.com/420x320',
				title: 'This is headerd',
				body: '<p><b>This is body This is body This is body This is body This is body</b></p>',
				info: 'This is some info',
            },
            {
                id: 2,
                img: 'https://imgplaceholder.com/420x320',
				title: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            },
            {
                id: 3,
                img: 'https://imgplaceholder.com/420x320',
				title: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            },
            {
                id: 4,
                img: 'https://imgplaceholder.com/420x320',
				title: 'This is headerd',
				body: 'This is body This is body This is body This is body This is body',
				info: 'This is some info',
            }
        ],
        // Start Tasks
        tasks: [
            
            {day: 0, lists: ['Some thing98','Some thing15','Some thing1']},
            {day: 1, lists: ['Some thing98','Some thing15','Some thing2']},
            {day: 2, lists: ['Some thing98','Some thing15','Some thing3']},
            {day: 3, lists: ['Some thing98','Some thing15','Some thing4']},
            {day: 4, lists: ['Some thing98','Some thing15','Some thing5']},
            {day: 5, lists: ['Some thing98','Some thing15','Some thing6']},
     
        ],
        // Start Sections
        sections:{
            Navbar: {
                logo: {
                    name: 'لوجو',
                    img: ''
                },
                colors:{
                    background: '#f23a2e',
                    font: 'white'
                } 
            }
        }
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


        // Edit_Navbar: (state, payload){

        //  }
    },
    getters: {
        article: (state) => (id) => {
            return state.articles.filter(function(v){ return v["id"] == id })
        }
    }
});