<template>
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
        </tr>
        <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
        </tr>
        </tbody>
        <button @click="userew">adladnsopfnaif</button>
  </table>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { mapState } from 'vuex'


Vue.use(axios);

export default {
    methods:{
		userew(){
			let x = this.$store.state.user.token;
			axios.get(`/api/users?api_token=r6uBZ3Ue4lPuwJ4NMjFTgJmiXfxbyB8rF213ff6hpk6YecHgHnQmhfzCfkoC`)
		 	.then( res => {
                 console.log(res.data.data)
		 	}).catch( err => console.log( err.message ));
		},
    }
}
</script>
