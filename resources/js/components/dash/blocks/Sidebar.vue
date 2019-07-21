<template>
    <div class="row">
        <div class="col-3 sidebar h-100">
            <div class="sidebar-header mb-2">
                <h2 class="p-3 font-weight-bold">لوحة التحكم</h2>
                <hr>
            </div>
            <div class="btn-group">
                <button type="button" @click="toggle" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    الأقسام
                </button>
                <div class="nav dropdown-menu d-none flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">شريط التنقل</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">المدربين</a>
                </div>
            </div>
        </div>

        <div class="pt-3 mr-3">
            <div class="tab-content" id="v-pills-tabContent">

                <div class="tab-pane fade show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <h2> Navbar </h2>
                    <form>
                        <div class="form-group">
                            <label class="font-weight-bold" for="image-upload">أضف صورة</label>
                            <input type="file" class="form-control-file" id="image-upload" accept="image/*">
                            <br>
                            <label class="font-weight-bold" for="text">أكتب نصاً</label>
                            <input class="form-control" type="text" placeholder="اكتب اسم الموقع">
                        </div>
                    </form>
                </div>

                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">3</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toggle(){
          $('.dropdown-menu').toggleClass('d-none')  
        },
        open(){
            $('#sidebar').toggleClass('active');
        }
    }
}
</script>


<style <style lang="scss" scoped>

*{
    text-align: right;
}
hr{
    width: auto;
    background-color: #eee;
    height: auto;
    position: static;
    left: 0;

}
.row .sidebar{
    color: white;
    background: #7386D5;
    .btn-group{
        width: 100%;

        .dropdown-toggle{
            cursor: pointer;
            transition: all 0.2s ease-in;
            outline: none;
            background-color: transparent;
            
            &:hover,&:active{
                color: white;
                background-color: #6d7fcc;
            }
        }

        .dropdown-menu{
            width: 100%
        }
    }
}
   
</style>
