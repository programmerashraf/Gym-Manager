<template>
<div class="jumbotron mt-5 pb0" @click="mido()">
    <h1 class="display-4">أهلاً {{ user.name }}</h1>
    <p class="lead">باق على انتهاء الإشتراك : {{ user.subscription.remain }} يوم</p>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'user',
            'loged',
        ])
    },
    methods:{
        mido(){
            this.$store.state.user.subscription.remain = 
            (Math.round ( (new Date(this.$store.getters.subscriptionDateEnd) - new Date(this.$store.getters.subscriptionDateStart) ) * (1.15740741*10**-8)));
        }
    }
}
</script>

<style lang="scss" scoped>
$main-red: rgb(242, 58, 46);
.jumbotron{
    border-radius: 0;
    text-align: right;
    background-color: $main-red;
    color: white
}
</style>
