<template>
<div>
    <h2 class="font-weight-bold"> معلومات عن مركزنا </h2>
    <hr>

    <form>
         <div class="form-group">
            <label class="font-weight-bold" for="adress">العنوان</label>
            <input type="text" class="form-control" id="adress" placeholder="أكتب عنوان المقطع">
            <br>
            <label class="font-weight-bold" for="details">أكتب الوصف</label>
            <textarea class="form-control" id="details" rows="6"></textarea>
            <br>
            <label class="font-weight-bold" for="feats">المميزات</label>
            <input type="text" class="form-control" id="feats" placeholder="أكتب الميزة الي تريد إضافتها" v-model="feat">
            <br>
            <button class="btn btn-success" type='button' @click='addFeat'>إضافة</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            feat: '',
            feats: []
        }
    },
    methods: {
        addFeat(){
            this.feats.push(this.feat);
            this.feat = '';
        }
    }
}
</script>
