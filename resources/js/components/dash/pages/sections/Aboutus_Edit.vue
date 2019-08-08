<template>
    <div class="container">

    <div class="row">
        <label for="image">Image</label>
        <div class="input-group">
            <input type="file" id="image" class="form-control" @change="get_image($event)">
        </div>
        <br>
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
            </div>
        </div>
        <!-- /.col-->
        <button class="btn btn-success" @click="get_body">Done</button>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                body: '',
                image: ''
            }
        },
        methods: {
            get_image(e){

                let fileReader = new FileReader();

                fileReader.readAsDataURL(e.target.files[0]);

                fileReader.onload = (e) => {
                    this.image = e.target.result;
                }

            },
            get_body() {
                console.log($('.mohammed').val());
                this.body = String($('.mohammed').val())
            }
        },
        mounted() {
            $('.mohammed').wysihtml5();
        }
    }

</script>

<style>

</style>
