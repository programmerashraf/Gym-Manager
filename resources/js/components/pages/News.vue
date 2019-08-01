<template>
    <div id="news">
        <Nav2></Nav2>
        <div class="jumbotron mt-5 pb0">
            <h1 class="display-6 text-right">المقالات</h1>
        </div>
        <div class="container">
            <div class="preview d-flex row mb-3" :key="article.id" v-for="article in get_articles">

					<div class="article-info col-8">
						<h1>{{ article.title }}</h1>
						<p>{{ article.info }}</p>
						<router-link :to="'/articles/'+article.id"  class="btn btn-success">اقرأ المزيد</router-link >
					</div>

					<div class="article-thumb col-4">
						<img :src="article.img" class="img-fluid" alt="img">
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
    data(){
        return {
            link: ''
        }
    },
    components:{
        Nav2,
        Footer2
    },
    computed:{
        get_articles(){
            return this.$store.state.articles
        }
    }
}
</script>

<style lang="scss" scoped>
#news{
    text-align: right
}
.preview{
	border-radius: 20px;
	overflow: hidden;
	background-color: #FFF;
	max-height: 200px;
	-webkit-box-shadow: 7px -2px 17px 0px rgba(0,0,0,0.41);
	-moz-box-shadow: 7px -2px 17px 0px rgba(0,0,0,0.41);
	box-shadow: 0px -2px 17px 0px rgba(0,0,0,0.41);

    .article-thumb {
        padding: 0;
        margin: 0
    }
    
	.article-info  {

		button{
			float: right;
		}
	}

}
</style>
