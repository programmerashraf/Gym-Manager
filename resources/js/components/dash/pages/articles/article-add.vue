<template>
    <div id="box">
        <div class="box-body pad">
			<div class="row">

			
				<div class="input-group col-xs-5">
					<label for="articleName">Article Name</label>
					<input v-model="article.title" type="text" class="form-control" placeholder="Article Name">
				</div>
				
				<div class="input-group col-xs-5">
					<label for="articleName">Auther Name</label>
					<input v-model="article.auther" type="text" class="form-control" placeholder="Auther Name">
				</div>

				<div class="input-group col-xs-5">
					<label for="articleName">Article image</label>
					<input v-model="article.img" type="text" class="form-control" placeholder="Enter URL">
				</div>

				<div class="form-group col-xs-6">
					<label for="articleinfo">Article Info</label>
					<textarea v-model="article.info" class="form-control" placeholder="Article info" id="articleinfo"
						rows="2" style="resize: none"></textarea>
				</div>

				<div class="col-md-12 box">
					<div class="box" @click="get_body($event)">
						<div class="box-header">
							<h3 class="box-title">Article body</h3>
						</div>
						<!-- /.box-header -->
						<div class="box-body pad">
							<form>
								<textarea class="mohammed" placeholder="Place some text here"
									style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
							</form>
						</div>
					</div>
				</div>
				<!-- /.col-->

            </div>


            <!-- Main content -->

        </div>
        <!-- /.content-wrapper -->

        <button class="btn btn-warning" @click="perview=!perview">Preview</button>
        <button class="btn btn-success" @click="sendArticle">Done</button>

     <div class="row" v-if="perview">
        <div class="container">
            <div class="preview">

                <div class="article-thumb col-xs-2">
                    <img :src="article.img" class="img-responsive" alt="img">
                </div>
                <div class="article-info col-xs-10">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.body }}</p>
                    <span>{{ article.auther }} - time</span>
                    <button class="btn btn-success">READ MORE</button>
                </div>

            </div>
        </div>
    </div> 
</div>

</template>

<style lang="scss">
    .preview {
		margin-top: 20px;
        border-radius: 20px;
        overflow: hidden;
        background-color: #FFF;
        max-height: 200px;
        -webkit-box-shadow: 7px -2px 17px 0px rgba(0, 0, 0, 0.41);
        -moz-box-shadow: 7px -2px 17px 0px rgba(0, 0, 0, 0.41);
        box-shadow: 0px -2px 17px 0px rgba(0, 0, 0, 0.41);

        .article-thumb {
            padding: 0;
            margin: 0
        }

        .article-info,
        .box-body {
            button {
                float: right;
            }
        }

    }

    .form-group, .input-group{
        margin-top: 20px;
    }
    .form-group, .box{
        padding: 0;

    }

</style>


<script>
    export default {
        data() {
            return {
                perview: false,
                article: {
                    img: '',
                    title: '',
                    body: '',
                    info: '',
                    time: '',
                    auther: '',
                }
            }
        },
        methods: {
            Upload_img(e) {
                this.article.img = e.target.value
            },
            sendArticle() {
                this.$store.state.articles.push(this.article);
                console.log(this.$store.state.articles)
            },
            get_body(e) {
				let text = $('.mohammed').val();
				this.article.body = text;
            }
        },
        mounted() {
            //bootstrap WYSIHTML5 - text editor
            $('.mohammed').wysihtml5()
        }
    }

</script>
