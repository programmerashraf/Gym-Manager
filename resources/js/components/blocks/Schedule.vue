<template>
<div class="py-5" id="Schedule">
    <div class="container">
        <p class="h1 text-white">جدولك الأسبوعي</p>
        <hr>
        <ul class="nav nav-pills mb-3 p-0" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-one" aria-selected="true">السبت</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-two" aria-selected="false">الأحد</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-three" aria-selected="false">الإثنين</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-four" role="tab" aria-controls="pills-four" aria-selected="false">الثلاثاء</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-five" role="tab" aria-controls="pills-five" aria-selected="false">الأربعاء</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-six" role="tab" aria-controls="pills-six" aria-selected="false">الخميس</a>
            </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-one-tab">
                <ul>
                    <li :key="taskc" v-for="taskc in User_tasks_1.lists ">{{ taskc }}</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-two-tab">
                <ul>
                    <li :key="taskc" v-for="taskc in User_tasks_2.lists ">{{ taskc }}</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-three-tab">
                <ul>
                    <li :key="taskc" v-for="taskc in User_tasks_3.lists ">{{ taskc }}</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-four-tab">
                <ul>
                    <li :key="taskc" v-for="taskc in User_tasks_4.lists ">{{ taskc }}</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-five" role="tabpanel" aria-labelledby="pills-five-tab">
                <ul>
                    <li :key="taskc" v-for="taskc in User_tasks_5.lists ">{{ taskc }}</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-six" role="tabpanel" aria-labelledby="pills-six-tab">
                <ul>
                    <li :key="taskc" v-for="taskc in User_tasks_6.lists ">{{ taskc }}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed:{
        User_tasks_1(){
            return this.$store.state.tasks[0]   
        },
        User_tasks_2(){
            return this.$store.state.tasks[1]   
        },
        User_tasks_3(){
            return this.$store.state.tasks[2]
        },
        User_tasks_4(){
            return this.$store.state.tasks[3]   
        },
        User_tasks_5(){
            return this.$store.state.tasks[4]   
        },
        User_tasks_6(){
            return this.$store.state.tasks[5]   
        },
    },
    mounted(){
        // Git the links
    }
}
</script>


<style lang="scss" scoped>
$main-red: rgb(242, 58, 46);

#Schedule{
    background-image: url('../../assets/hero_bg_1.jpg');
    background-position: top center;
    background-attachment: fixed;
    text-align: right;
    ul{
        .nav-link{
            color: white;
            &.active{
                background-color: $main-red;
            }
        }
    }
    .tab-content {
        .tab-pane{
            ul {
                list-style: none;
                padding: 0;

                li{
                    background-color: #fff;
                    padding: 10px 0px;
                    transition: all 0.2s ease;
                    &:hover{
                        border-left: 10px solid $main-red;
                        border-right: 10px solid $main-red;
                    }
                }
            }
        }
    }
}
</style>
