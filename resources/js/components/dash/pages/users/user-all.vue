<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Start</th>
                <th>Options</th>
            </tr>
        </thead>

        <tbody>
            <tr v-bind:key="row.id" v-for="row in rows">
                <td>{{row.id}}</td>
                <td>{{row.name}}</td>
                <td>{{row.email}}</td>
                <td>{{row.start}}</td>
            </tr>
        </tbody>
  </table>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);

export default {
    data(){
        return {
            rows: [],
        }
    },
    mounted(){
        axios.get(`/api/users?api_token=${this.$store.state.AdminPanel.token}`).then(res =>  {
            
            res.data.data.forEach(user => {
                this.rows.push(user)
            });
            
        }).catch(err => err.message)
    }
}
</script>
