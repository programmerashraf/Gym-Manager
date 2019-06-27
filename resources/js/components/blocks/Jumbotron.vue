<template>
<div class="jumbotron rounded-none mt-5">
    <h1 class="display-4">أهلاً {{ user.name }}</h1>
    <p class="lead">باق على انتهاء الإشتراك : </p>
    <hr class="my-4">
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'registerState',
            'user',
            'loged'
        ])
    },
}
</script>

<style lang="scss" scoped>
.jumbotron{
    text-align: right;
    background-color: rgb(242, 58, 46);
    color: white
}
</style>
