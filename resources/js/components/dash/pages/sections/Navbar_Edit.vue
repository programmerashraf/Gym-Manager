<template>
    <div>
        <div class="input-group">
            <p>{{ Navbar }}</p>
            <input type="text" class="form-control" v-model="logo_t" @change="logo('text')" placeholder="logo Text" >
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            logo_t: '',
            colors: {
                background: '',
                font: ''
            }
        }
    },
    methods:{
        logo( payload ){
            this.$store.commit('Edit_Navbar', payload , this.Navbar.logo_t)
        }
    },
    computed:{
        Navbar() {
            return this.$store.state.sections.Navbar
        }
    }
}
</script>
