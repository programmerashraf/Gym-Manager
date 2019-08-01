<template>
    <div>
        {{Navbar}}
        <p>MOhammed</p>
    </div>
</template>

<script>
export default {
    computed:{
        Navbar: {
            get(){
                return this.$store.state.sections.Navbar
            },
            set(payload){
                this.$store.commit('EditNavbar', payload)
            }
        }
    }
}
</script>
