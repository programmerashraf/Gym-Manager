<template>
<div id="navbar">
	<nav class="navbar navbar-expand-xl navbar-dark">
		<div class="container"><a class="navbar-brand" href="#">لوجو</a>
			<button class="navbar-toggler" @click="show()"><span class="navbar-toggler-icon"></span></button>

			<div class="collapse justify-content-end d-lg-flex">
				<button type="button" @click="show()" class="close d-xl-none" data-dismiss="modal">&times;</button>
				<ul class="navbar-nav">
					<li class="nav-item ml-3">
						<router-link to="/" active-class="active" class="nav-link" exact>الرئيسية<span
								class="sr-only">(current)</span></router-link>
					<li class="nav-item ml-3" v-if="loged">
						<router-link to="/profile" active-class="active" class="nav-link" exact>حسابك<span
								class="sr-only">(current)</span></router-link>
					</li>
					<li class="nav-item ml-3">
						<router-link to="/lo" active-class="active" class="nav-link" exact>آخر الأخبار<span
								class="sr-only">(current)</span></router-link>
					</li>
					<li class="nav-item" v-if="!loged">
						<form class="form-inline my-2 my-lg-0">
							<button class="btn btn-secondary rounded-pill ml-3" @click="changeRegisterState('l')" data-toggle="modal" data-target="#myModal" type="button" >سجل دخول</button>
							<button class="btn btn-success rounded-pill" @click="changeRegisterState('r')" data-toggle="modal" data-target="#myModal" type="button">سجل حساب</button>
						</form>
					</li>
					<li class="nav-item" v-if="loged">
						<span>{{ user.name }}</span>
						<button class="btn btn-danger rounded-pill mr-2" @click="logout()">تسجيل الخروج</button>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<!-- The Modal -->
	<div class="modal fade" id="myModal">
		<div class="modal-dialog">
			<div class="modal-content">

				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">قائمة التسجيل</h4>
					<button type="button" class="close float-left" data-dismiss="modal">&times;</button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<div class="login">
						<input class="form-control mb-4" v-model.lazy="get_user_name" v-if="register" type="text" placeholder="الاسم" />
						<input class="form-control mb-4" v-model.lazy="get_user_email" type="email" placeholder="البريد الإلكتروني" />
						<input class="form-control mb-4" v-model.lazy="get_user_password" type="password" placeholder="كلمة المرور" />
					</div>
				</div>

				<!-- Modal footer -->
				<div class="modal-footer">
					<button class="btn btn-secondary rounded-pill ml-3" @click="login()" v-if="!register" data-dismiss="modal" type="button">سجل دخول</button>
					<button class="btn btn-success rounded-pill" @click="register()" v-if="register" data-dismiss="modal" type="button">سجل حساب</button>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mapState } from 'vuex'

Vue.use(axios);

export default {
	name: 'Nav',
	computed: {
		// Get user
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
		...mapState([
			'register',
			'user',
			'loged'
		])
	},
	methods: {
		show() {
			$('nav .collapse').toggleClass('show');
		},
		changeRegisterState(button){
			this.$store.commit('changeRegisterState', button)
		},
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
					

				}
				console.log(res.data);
			})
		},
		login() {
			// Send the request
			axios.post('/api/login', {
				email: this.$store.state.user.email,
				password: this.$store.state.user.password
			})
			.then( res => {
				this.$store.state.user.name = res.data.data.user.name;
				this.$store.state.loged = true;
				if (res.data.data == null){

				}
				console.log(res.data);
			})
		},
		logout(){
			this.$store.state.user.name = '';
			this.$store.state.user.password= '';
			this.$store.state.user.emial = '';

			this.$store.state.loged = false;

		}
	}
}
</script>

<style lang="scss" scoped>
$main-red: rgb(242, 58, 46);
nav {
	background-color: $main-red;

	button.navbar-toggler {
		outline: none;
		border: none;
		color: black;
	}

	.collapse {
		color: white !important;

		&:not(.show) {
			display: block
		}

		input.form-control {
			background-color: transparent;
			border-radius: 4px;
			border: 1px solid #fff;
			transition: all 0.4s ease;
			width: 200px;

			&::placeholder {
				color: black;
				font-weight: bolder
			}

			&:active,
			&:focus {
				box-shadow: none;
			}
		}
	}
}

.modal {
	.modal-header{
		.close{
			position: absolute;
			display: block;
			left: 0px;
			font-weight: bolder;
			outline: none;
		}
	}
}
.active {
	color: white !important;
}

* {
	text-align: right
}

@media (max-width: 1025px) {
	.active {
		color: black !important;
	}

	nav .collapse {
		position: fixed;
		right: -75%;
		z-index: 999999;
		display: block;
		top: 0;
		height: 100%;
		width: 75%;
		transition: all 0.4s ease;

		input.form-control {
			border: 1px solid #000;
			margin-bottom: 10px
		}

		button {
			margin-bottom: 10px;

			&.close {
				position: absolute;
				display: block;
				top: 50px;
				right: 20px;
				font-size: 50px;
				font-weight: bolder;
				outline: none;
			}
		}

		&.show {
			right: 0;
			background-color: #FFF;
			color: black !important;
			transform: translate(-0%);

			ul {
				li form {
					min-width: 200px;
				}

				li a,
				a.nav-link {
					color: black;
					font-size: 25px;
				}
			}
		}

		ul {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
