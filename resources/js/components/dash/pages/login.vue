<template>
    <div id="login">
        <div class="container">
            <div class="login-form">
                    
                <h1>Login</h1>
                <hr>

                <div class="form-group">
                    <label for="loginMail">Email</label>
                    <input type="email" placeholder="Type your email" v-model.lazy="get_user_email" id="loginMail" class="form-control">
                </div>

                <br>

                <div class="form-group">
                    <label for="loginPass">Password</label>
                    <input type="Password" placeholder="Type your Password" v-model.lazy="get_user_password" id="loginPass" class="form-control">
                </div>
                
                <br>
                <div class="login-form-footer">
                    <button class="btn btn-primary" @click="login()" type="button">login</button>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);

export default {
    computed:{
		// Get user
		get_user_email:{
			get() {
				return this.$store.state.user.email;
			},
			set(value){
				this.$store.commit('get_user_email', value)
			}
		},
		get_user_password:{
			get() {
				return this.$store.state.user.password;
			},
			set(value){
				this.$store.commit('get_user_password', value)
			}
		},
    },
    methods:{
        login() {
			// Send the request
			axios.post('/api/login', {
				email: this.$store.state.user.email,
				password: this.$store.state.user.password
			})
			.then( res => {
				// Get user
                this.$store.state.AdminPanel.token = res.data.data.user.token;
				this.$store.state.AdminPanel.loged = true;
			}).catch( err => {
                Swal.fire({
                    title: 'email or password is un correct',
                    text: 'Please make sure you are signed up',
                    type: 'error',
                    confirmButtonText: 'ok'
                });
            })
		}
    }
}
</script>



<style lang="scss" scoped>
#login{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #367fa9;

    .login-form{
        hr{
            width: auto;
            background-color: #eee;
            height: auto;
            position: static;
            left: auto;
        }

        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px;
        width: 50%;
        transform: translate(-50%, -50%);
        min-height: 400px;
        background: rgba(0,0,0,0.7);
        border-radius: 40px;
        color: white;

        &-footer{
            position: relative;
            margin-top: 30px;

            button{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 50%;
                height: 40px;
                text-align: center;
                background-color: firebrick;
                font-size: 20px;
                font-weight: bold;
                margin: auto
            }
        }
        
    }

}

@media (max-width: 425px){
    .login-form{ width: 80% !important}
}
</style>
