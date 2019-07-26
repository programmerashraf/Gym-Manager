<template>
    <div id="news">
        <Nav2></Nav2>
        <div class="jumbotron mt-5 pb0">
            <h1 class="display-6 text-right">المقالات</h1>
        </div>
        <div class="container">
            <div class="article">
                <div class="article-thumb">

                </div>

                <div class="article-info">
                    
                    <p class="h3 py-2">Article Adress</p>
                    
                        
                </div>

                <div class="atricle-footer">

                </div>
            </div>
        </div>
        <Footer2></Footer2>
    </div>    
</template>

<script>
import Nav2 from "../blocks/Nav";
import Footer2 from "../blocks/Footer";

export default {
    components:{
        Nav2,
        Footer2
    }
}
</script>

<style lang="scss" scoped>
#news{
    text-align: right
}
    .article{
        border: 1px solid #000;
        border-radius: 40px;
        
    }
</style>
