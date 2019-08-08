<template>
    <div>
 
        <p class="h1">NAVBAR</p>
        <br>
        <br>
        <div class="input-group">

            <label for="text">Company Name</label>
            <div class="input-group">
                <input type="text" id="text" class="form-control" v-model="logo.text" placeholder="Company Name" >
            </div>
            
            <br>
            <label for="image">Company logo</label>
            <div class="input-group">
                <input type="file" id="image" class="form-control" @change="get_image($event)" placeholder="Company logo" >
            </div>
            <br>

            <div class="inline">
                <label for="bgc">background color</label>
                <div class="input-group">
                    <input type="color" id="bgc" v-model="colors.background">
                </div>
                
                <label for="fc">font color</label>
                <div class="input-group">
                    <input type="color" id="fc" v-model="colors.font">
                </div>
            </div>

            <br>
            <button class="btn btn-success">Done </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
            logo:{
                text: '',
                image:''
            },
            colors: {
                background: '',
                font: ''
            }
        }
    },
    methods:{
            get_image(e){

                let fileReader = new FileReader();

                fileReader.readAsDataURL(e.target.files[0]);

                fileReader.onload = (e) => {
                this.logo.image = e.target.result;
            }
        }
    }
}
</script>
