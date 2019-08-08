<template>
    <div>
        <p class="h1">Navbar</p>
        <label for="image">Image</label>
        <div class="input-group">
            <input type="file" id="image" class="form-control" @change="get_image($event)">
        </div>

        <label for="text">title</label>
        <div class="input-group">
            <input type="text" id="text" class="form-control" v-model="text" placeholder="Title" >
        </div>

        <br>
        <button class="btn btn-success">Done </button>
    </div>
</template>

<style lang='scss' scoped>
.input-group{
    margin-top: 0;
}

.inline{
    div{
        margin-right: 10px;
        display: inline-block
    }
}
</style>

<script>
export default {
    data(){
        return {
            image: '' ,
            text: ''
        }
    },
    methods:{
            get_image(e){

                let fileReader = new FileReader();

                fileReader.readAsDataURL(e.target.files[0]);

                fileReader.onload = (e) => {
                this.image = e.target.result;
            }
        }
    }
}
</script>
