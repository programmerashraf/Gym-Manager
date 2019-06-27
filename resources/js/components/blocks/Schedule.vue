<template>
<div class="py-5" id="Schedule">
    <div class="container">
        <p class="h1 text-white">جدولك الأسبوعي</p>
        <hr>
        <ul class="nav nav-pills mb-3 pr-0" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">السبت</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">الأحد</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">الإثنين</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">الثلاثاء</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">الأربعاء</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">الخميس</a>
            </li>
        </ul>
        <div class="tab-content pr-0" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <ul>
                    <li class="p-3">
                        شيء ما
                    4</li>
                    <li class="p-3">
                        شيء ما
                    4</li>
                    <li class="p-3">
                        شيء ما
                    4</li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <ul>
                    <li class="p-3">
                        2شيء ما
                    </li>
                    <li class="p-3">
                        2شيء ما
                    </li>
                    <li class="p-3">
                        2شيء ما
                    </li>
                </ul>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <ul>
                    <li class="p-3">
                        شيء ما
                    </li>
                    <li class="p-3">
                        شيء ما
                    </li>
                    <li class="p-3">
                        شيء ما
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

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
                padding: none;
                li{
                    background-color: #fff;
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
