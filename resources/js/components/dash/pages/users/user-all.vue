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
                <td>
                    <button class="btn btn-success tooltip2" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                        <i class="far fa-edit"></i>
                    </button>

                    <button class="btn btn-danger tooltip2">
                        <i class="fas fa-user-slash"></i>
                    </button>

                    <button class="btn btn-warning tooltip2">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </td>
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
            
        }).catch(err => err.message);
    }
}
</script>
