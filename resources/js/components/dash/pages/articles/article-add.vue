<template>
    <div class="box">
        <div class="box-body pad">
			<div class="input-group">
				<label for="articleName">Article Name</label>
				<input v-model="article.adress" type="text" class="form-control" placeholder="Article Name" aria-describedby="basic-addon1">
			</div>

			<div class="input-group">
				<label for="articleName">Article image</label>
				<input v-model="article.img" type="text" class="form-control" placeholder="Enter URL" aria-describedby="basic-addon1">
				<input type="file" name="mido" id="oo" @change="Upload_img">
			</div>
			
			<br>

			<div class="form-group purple-border">
				<label for="articleinfo">Article Info</label>
				<textarea v-model="article.info" class="form-control" placeholder="Article info" id="articleinfo" rows="2" style="resize: vertical"></textarea>
			</div>
	
			<br>

			<div class="form-group purple-border">
				<label for="articleBody">Article Body</label>
				<textarea v-model="article.body" class="form-control" placeholder="Article body" id="articleBody" rows="10" style="resize: vertical"></textarea>
			</div>

			<button class="btn btn-warning" @click="perview=!perview">Preview</button>
			<button class="btn btn-success" @click="sendArticle">Done</button>
        </div>

		<div class="row"  v-if="perview">
			<div class="container">
				<div class="preview">

					<div class="article-thumb col-xs-4">
						<img :src="article.img" class="img-responsive" alt="img">
					</div>
					<div class="article-info col-xs-8">
						<h1>{{ article.adress }}</h1>
						<p>{{ article.info }}</p>
						<button class="btn btn-success">READ MORE</button>
					</div>

				</div>
			</div>
		</div>
    </div>
</template>

<style lang="scss">
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


<script>
export default {
	data(){
		return {
			perview: true,
			article:{
				img: '',
				adress: '',
				body: '',
				info: '',
			}
		}
	},
	methods:{
		Upload_img(e){
			this.article.img = e.target.value
		},
		sendArticle(){
			this.$store.state.articles.push(this.article);
			console.log(this.$store.state.articles)
		},
		logit(e){
			console.log(e.target.value);
		}
	},
	computed:{
		
	}
}
</script>
