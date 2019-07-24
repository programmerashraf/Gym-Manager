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
                        <label class="font-wieght-bold">User name</label>
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


                    <div class="bootstrap-iso">
                        <div class="container-fluid">
                            <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12">

                                <!-- Form code begins -->
                                <form method="post">
                                <div class="form-group"> <!-- Date input -->
                                    <label class="control-label" for="date1">Start date</label>
                                    <input class="form-control" id="date1" name="date" placeholder="MM/DD/YYY" type="text" v-model="user_subscription_start"/>
                                </div>

                                </form>
                                <!-- Form code ends --> 

                                </div>
                            </div>    
                        </div>
                    </div>


                    <div class="bootstrap-iso">
                        <div class="container-fluid">
                            <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12">

                                <!-- Form code begins -->
                                <form>
                                <div class="form-group"> <!-- Date input -->
                                    <label class="control-label" for="date2">End Date</label>
                                    <input class="form-control" id="date2" name="date" placeholder="MM/DD/YYY" type="text" v-model="user_subscription_end"/>
                                </div>

                                </form>
                                <!-- Form code ends --> 

                                </div>
                            </div>    
                        </div>
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
        },
        user_subscription_start:{
            get() {
                return this.$store.state.user.subscription.start
            },
            set(value){
                this.$store.commit('subscriptionDateStart', value)
            }
        },
        user_subscription_end:{
            get() {
                return this.$store.state.user.subscription.end
            },
            set(value){
                this.$store.commit('subscriptionDateStart', value)
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
    },
    mounted(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
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
