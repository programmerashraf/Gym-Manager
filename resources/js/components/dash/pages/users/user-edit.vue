<template>
    <div class="box box-info">
        <div class="container">


        <div class="box-header with-border">
            <h3 class="box-title">Edit User</h3>
        </div>
        <!-- /.box-header -->
            <!-- form start -->
            <form class="form-horizontal">
                <div class="box-body">

                    <div class="form-group">
                        <label class="font-wieght-bold">User name</label>
                        <input type="text" class="form-control" v-model.lazy="get_edited.name" placeholder="User Name">
                    </div>

                    <div class="form-group">
                        <label for="inputEmail3" class="font-wieght-bold control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail3" v-model.lazy="get_edited.email" placeholder="Email">
                    </div>

                    <div class="form-group">
                        <label for="DateStart" class="font-wieght-bold control-label">Date Start</label>
                        <input type="date" class="form-control" id="DateStart"  v-model="get_edited.start" placeholder="DD/MM/YYY">
                    </div>

                    <div class="form-group">
                        <label for="DateEnd" class="font-wieght-bold control-label">Date End</label>
                        <input type="date" class="form-control" id="DateEnd"  v-model="get_edited.end" placeholder="DD/MM/YYY">
                    </div>

                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    <button class="btn btn-success" type="button" @click="update_user">Edit USER</button>
                </div>
                <!-- /.box-footer -->
            </form>
        </div>


        <p>{{ get_edited }}</p>
    </div>

</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mapState } from 'vuex';

Vue.use(axios);

export default {
    data(){
      return {
          date_start: 0,
          date_end: 0
      }
    },
    computed:{
        get_edited(){
            return this.$store.state.AdminPanel.userEdit;
        }
    },
    methods: {
		update_user(){
            
            // Send the request
			axios.post('/api/register', {
				 name: this.$store.state.user.name,
				 email: this.$store.state.user.email,
                 password: this.$store.state.user.password,
                 date_start: this.date_start,
                 date_end: this.date_end,
			})
			.then(res => {
				// Todo
				if(res.data.code == 200){
					Swal.fire({
                        title: 'you Edited user',
                        text: null,
                        type: 'success',
                        confirmButtonText: 'Cool!'
                    });

                    this.$store.state.user.name = '';
                    this.$store.state.user.email = '';
                    this.$store.state.user.password = '';
                    this.date_start = '';
                    this.date_end = '';

                    console.log(res);
                }
            }).catch(err => console.log(err))
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
