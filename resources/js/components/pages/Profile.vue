<template>
<div >
    <Nav1></Nav1>
    <Jumbotron></Jumbotron>
    <Schedule></Schedule>
    <Footer1></Footer1>
</div>
</template>

<script>
import Nav1 from "../blocks/Nav";
import Footer1 from "../blocks/Footer";
import Jumbotron from "../blocks/Jumbotron";
import Schedule from "../blocks/Schedule";

export default {
    components: {
        Nav1,
        Footer1,
        Jumbotron,
        Schedule
    }
}
</script>
