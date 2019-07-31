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
.preview{
	border-radius: 20px;
	overflow: hidden;
	background-color: #FFF;
	max-height: 200px;
	-webkit-box-shadow: 7px -2px 17px 0px rgba(0,0,0,0.41);
	-moz-box-shadow: 7px -2px 17px 0px rgba(0,0,0,0.41);
	box-shadow: 0px -2px 17px 0px rgba(0,0,0,0.41);

	.article-info , .box-body {
		button{
			float: right;
		}
	}

}
</style>
