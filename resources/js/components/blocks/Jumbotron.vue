<template>
    <div class="jumbotron mt-5 pb0">
        <h1 class="display-4">أهلاً {{ user.name }}</h1>
        <p class="lead">ينتهي اشتراكك يوم : {{ user.subscription.end }} </p>
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
