<template>
<div id="navbar">
	<nav class="navbar navbar-expand-md navbar-dark">
	<div class="container"><a class="navbar-brand" href="#">لوجو</a>
		<button class="navbar-toggler" @click="show()"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse justify-content-end d-lg-flex">
		<ul class="navbar-nav">
			<li class="nav-item ml-3">
				<router-link to="/" active-class="active" class="nav-link" exact>الرئيسية<span class="sr-only">(current)</span></router-link>
			<li class="nav-item ml-3">
				<router-link to="/profile" active-class="active" class="nav-link" exact>حسابك<span class="sr-only">(current)</span></router-link>
			</li>
			<li class="nav-item ml-3">
				<router-link to="/lo" active-class="active" class="nav-link" exact>آخر الأخبار<span class="sr-only">(current)</span></router-link>
			</li>
			<li class="nav-item">
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2 mb-sm-3" v-model="user.mail" type="email" placeholder="البريد الإلكتروني"
				aria-label="تسجيل الدخول" />
				<input class="form-control ml-4 mr-sm-2 mb-sm-3" v-model="user.password" type="password"
				placeholder="كلمة المرور" aria-label="كلمة المرور" />
				<button class="btn our-btn my-2 my-sm-0" type="submit">سجل</button>
			</form>
			</li>
		</ul>
		</div>
	</div>
	</nav>
</div>
</template>

<script>
export default {
name: 'HelloWorld',
	data() {
		return {
		user: {
			name: '',
			mail: '',
			passowrd: ''
		}
		}
	},
	methods: {
		show() {
		$('nav .collapse').toggleClass('show')
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
	background-color: rgb(242, 58, 46);

	button.navbar-toggler {
	outline: none;
	border: none;
	color: black;
	}
	.collapse {
	color: white !important;

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

	button {
		background-color: #fff;
		color: black;

	}
	}

	.collapse:not(.show) {
	display: block
	}
}
.active{
	color: white !important; 
}

* {
	text-align: right
}

@media (max-width: 576px) {
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
	}

	&.show {
		right: 0;
		background-color: #FFF;
		color: black !important;
		transform: translate(-0%);

		ul {

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
