<template>
<div id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p class="h1 mb-4">معلومات عن <span> مركزنا </span></p>
                <p class="lead"> وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينجدو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا. ,كونسيكتيتور أدايبا يسكينج أليايت,سيت</p>
                <p class="h6 d-none d-lg-block"> دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم. دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم. دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم.</p>
                <ul class="mt-3 list-unstyled">
                <li><i class="fas fa-check"></i>
                    <p>دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا .</p>
                </li>
                <li><i class="fas fa-check"></i>
                    <p>دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا .</p>
                </li>
                <li><i class="fas fa-check"></i>
                    <p>دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا .</p>
                </li>
                <li><i class="fas fa-check"></i>
                    <p>دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا .</p>
                </li>
                <li><i class="fas fa-check"></i>
                    <p>دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا .</p>
                </li>
                </ul>
                <button class="btn btn-danger rounded-pill px-3 mt-5">اقرأ المزيد</button>
            </div>
            <div class="col-md-6 my-5"><img class="img-fluid" height="200" src="../../assets/about.jpg"/></div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.row{
    text-align: right;
}

ul{
    padding: 0 20px 0 0;
    li{
        position: relative;
        i{
            position: absolute;
            color: #28a745;
            right: -25px;
            top: 1px
        }
        p{
            font-size: 18px;
        }
    }
}

p{

    &.h1{
        font-weight: 400;
        span{
            font-weight: bolder !important;
        }
    }
    &.h6,&.lead{
        line-height: 1.5;
        color: #656556
    }

    &.lead{
        font-size: 16px;
    }
    &.h6{
        font-size: 14px
    }
}
</style>
