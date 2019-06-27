<template>
<div >
    <Nav1></Nav1>
    <p @click="update()">{{ $store.state.counter }} i am here</p>
    <Footer1></Footer1>
</div>
</template>

<script>
import Nav1 from "../blocks/Nav";
import Footer1 from "../blocks/Footer";

export default {
    methods: {
        update(){
            this.$store.state.counter++
        }
    },
    components: {
        Nav1,
        Footer1
    }
}
</script>
