<template>
    <div id="article">
        <Navabr3/>
            
            <div class="row">
                <div class="col-8">
                    <p>
                        {{ article[0] }}    
                    </p>
                    
                    <div class="article-body">
                        
                    </div>
                </div>

                <div class="col-4">

                </div>
            </div>

        <Footer3/>
    </div>
</template>

<script>
import Navabr3 from "../blocks/Nav";
import Footer3 from "../blocks/Footer";

export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    computed:{
        article(){
            return this.$store.getters.article(this.id)
        }
    },
    mounted(){
        console.log(this.article.body);

        $('.article-body').html(this.article[0].body)
    },
    components:{
        Navabr3,
        Footer3
    }
}
</script>

