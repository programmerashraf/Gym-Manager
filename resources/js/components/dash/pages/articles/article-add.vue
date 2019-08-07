<template>
    <div id="box">
        <div class="box-body pad">
			<div class="row">
				
				<div class="input-group col-xs-5">
					<label for="articleName">Article title</label>
					<input v-model="article.title" type="text" class="form-control" placeholder="Article title">
				</div>

				<div class="input-group col-xs-5">
					<label for="articleimage">Article image</label>
                    <input type="file" id="img" accept="image/*" @change="get_image($event)">
				</div>

				<div class="form-group col-xs-6">
					<label for="articleinfo">Article Info</label>
					<textarea v-model="article.info" class="form-control" placeholder="Article info" id="articleinfo"
						rows="2" style="resize: none"></textarea>
				</div>

				<div class="col-md-12 box">
					<div class="box">
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
                        <button class="btn btn-primary" @click="get_body">Done</button>
					</div>
				</div>
				<!-- /.col-->

            </div>


            <!-- Main content -->

        </div>
        <!-- /.content-wrapper -->

        <!-- <button class="btn btn-warning" @click="perview=!perview">Preview</button> -->
        <button class="btn btn-success" @click="sendArticle">Done</button>

     <!-- <div class="row" v-if="perview">
        <div class="container">
            <div class="preview">

                <div class="article-thumb col-xs-2">
                    <image :src="article.image" class="image-responsive" alt="image">
                </div>
                <div class="article-info col-xs-10">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.body }}</p>
                    <span>{{ article.auther }} - time</span>
                    <button class="btn btn-success">READ MORE</button>
                </div>

            </div>
        </div>
    </div>  -->
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
import Axios from 'axios';
    export default {
        data() {
            return {
                perview: false,
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                article: {
                    img: '',
                    title: '',
                    body: '',
                    info: '',
                }
            }
        },
        methods: {
            get_body(){
                console.log($('.mohammed').val());
                this.article.body = String($('.mohammed').val())
            },
            get_image(e){

                let fileReader = new FileReader();

                fileReader.readAsDataURL(e.target.files[0]);

                fileReader.onload = (e) => {
                    this.article.img = e.target.result;
                }

            },
            sendArticle() {
                 Axios.post(`api/addArticle`,{
                    
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer '+ this.$store.state.AdminPanel.token
                    },

                    article: this.article
                })
                .then(res => {
                    console.log(res)
                }).catch(err => err.message);
            },
           
        },
        mounted() {
            console.log(this.$store.state.AdminPanel.token);
            //bootstrap WYSIHTML5 - text editor
            $('.mohammed').wysihtml5();
        }
    }

</script>
