<template>
    <div>
        <Nav3></Nav3>
        <sidebar></sidebar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import sidebar from "./blocks/Sidebar";
import Nav3 from "../blocks/Nav";

export default {
    components: {
        sidebar,
        Nav3
    }
}
</script>

<style <style lang="scss" scoped>

</style>
