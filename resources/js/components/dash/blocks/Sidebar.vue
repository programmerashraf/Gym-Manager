<template>
    <div class="container">
        <button @click="toggleSidebar" v-if="!sidebarStatus" class="sidebar-btn left d-lg-none d-xl-none">
            <i class="fas fa-arrow-left"></i>
        </button>
        <div class="row">
            <div class="col-lg-3 sidebar">
                <div class="sidebar-header mb-2">
                    <button @click="toggleSidebar" class="sidebar-btn d-lg-none d-xl-none">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <h2 class="p-3 font-weight-bold">لوحة التحكم</h2>
                    <hr>
                </div>
                <div class="btn-group">
                    <button type="button" @click="toggleDrop" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        الأقسام
                    </button>
                    <div class="nav dropdown-menu   d-none flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link" id="NavbarDash-tab" data-toggle="pill" href="#NavbarDash" role="tab" aria-controls="NavbarDash" aria-selected="false">شريط التنقل</a>
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">معلومات عن المركز</a>
                    </div>
                </div>
            </div>

            <div class="pt-3 mr-3">
                <div class="tab-content" id="v-pills-tabContent">

                    <div class="tab-pane fade show" id="NavbarDash" role="tabpanel" aria-labelledby="NavbarDash-tab">
                        <dashNav></dashNav>
                    </div>

                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import dashNav from "../blocks/Dash_Nav"; 

export default {
    data(){
        return {
            sidebarStatus: true
        }
    },
    components: {
        dashNav
    },
    methods:{
        toggleDrop(){
          $('.dropdown-menu').toggleClass('d-none');
        },
        toggleSidebar(){
            $('.sidebar').toggleClass('opened-sidebar');
             this.sidebarStatus = !this.sidebarStatus;
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
.opened-sidebar{
    transition: all 0.3s ease-in-out; 
    position: fixed; 
    transform: translateX(100%) !important
}

.sidebar-btn{
    border-radius: 0;
    border: 1px solid #fff;
    color: #fff;
    background-color: #000;
    box-shadow: none;
    outline: none;
    position: fixed;
    left: 10px;
    top: 10px;

    &.left{
        top: 90px;
        left: 10px;
    }
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
        position: relative;
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

@media (max-width: 425px){
    
    .sidebar{
        width: 100%;
        position: fixed;
        z-index: 9999;
        height: 100%;
        transition: all 0.3s ease-in-out; 
        transform: translateX(0)
    }
}
@media (min-width: 426px) and (max-width: 1024px){
    .opened-sidebar{
        transform: translateX(104%) !important
    }
    .sidebar{
        width: 100%;
        position: fixed;
        z-index: 9999;
        height: 100%;
        transition: all 0.3s ease-in-out; 
        transform: translateX(23px)
    }
}
</style>
