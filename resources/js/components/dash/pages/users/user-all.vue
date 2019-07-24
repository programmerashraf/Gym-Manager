<template>
    <div class='container'>
        <button @click="get_user">add</button>    

        <date label="Start"></date>
    </div>

</template>

<style lang="scss" scoped>


</style>


<script>
import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);
import date from '../../blocks/datepicker' 

export default {
    components: {
        date
    },
    methods: {
       get_user(){
           console.log(user_data)
            // axios.get(`/api/users?token=${this.$store.state.user.token}`)
		 	// .then( res => {
            //      console.log(res.data.data)
		 	// }).catch( err => console.log( err.message ));
       }
    }
}
</script>