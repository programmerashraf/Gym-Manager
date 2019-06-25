<template>
<div id="home">
    <Nav></Nav>
    <Carousel></Carousel>
    <Feats></Feats>
    <About></About>
    <Owl></Owl>
    <Trainers></Trainers>
    <Footer></Footer>
</div>
</template>

<script>
import Nav from "../blocks/Nav";
import Carousel from "../blocks/Carousel";
import Feats from "../blocks/Features";
import About from "../blocks/About";
import Owl from "../blocks/FeaturedClass";
import Trainers from "../blocks/Trainers";
import Footer from "../blocks/Footer";
export default {
    components: {
        Nav,
        Carousel,
        Feats,
        About,
        Owl,
        Trainers,
        Footer
    }
}
</script>
