<template>
    <div class="box box-info">  
        <div class="container">

        
        <div class="box-header with-border">
            <h3 class="box-title">Add User</h3>
        </div>
        <!-- /.box-header -->
            <!-- form start -->
            <form class="form-horizontal">
                <div class="box-body">

                    <div class="form-group">
                        <label class="font-wieght-bold"  >User name</label>
                        <input type="text" class="form-control" v-model.lazy="get_user_name" placeholder="User Name">
                    </div>

                    <div class="form-group">
                        <label for="inputEmail3" class="font-wieght-bold control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail3" v-model.lazy="get_user_email" placeholder="Email">
                    </div>

                    <div class="form-group">
                        <label for="inputPassword3" class="font-wieght-bold control-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword3" v-model.lazy="get_user_password" placeholder="Password">
                    </div>

                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    <button class="btn btn-success" role="button" @click="register()">ADD USER</button>
                </div>
                <!-- /.box-footer -->
            </form>
        </div>
    </div>
          
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mapState } from 'vuex'

Vue.use(axios);

export default {
    computed:{
        get_user_name:{
			get() {
				return this.$store.state.user.name;
			},
			set(value){
				this.$store.commit('get_user_name', value)
			}
		},
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
		}
    },
    methods: {
		register() {
			// Send the request
			axios.post('/api/register', {
				name: this.$store.state.user.name,
				email: this.$store.state.user.email,
				password: this.$store.state.user.password
			})
			.then(res => {
				// Todo
				if(res.data.code == 200){
					this.$store.state.user.name = res.data.data.user.name;
					this.$store.state.user.admin = res.data.data.user.admin;
					this.$store.state.user.email = res.data.data.user.email;

					this.$store.state.loged = true;
					console.log('done');
				}
			}).catch( err => console.log( err.message ) )
		}
    }
}
</script>


<style scoped>
.form-group{
    max-width: 500px;
}

.box-footer{
    display: flex;
    align-items: center
}
</style>
