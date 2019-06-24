<template>
<div class="my-5" id="feats">
    <div class="container">
        <div class="row">
        <div class="col-md-6 col-lg-3 p-5 k">
            <div class="feat"><img class="mb-2" src="../../assets/001-yoga.svg" width="56" height="56"/>
            <p class="h4">يوجا</p>
            <hr/>
            <p> لوريم ايبسوم دولار سيت أميت أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أيوسمود.</p>
            </div>
        </div>
        <div class="col-md-6 col-lg-3 p-5 k">
            <div class="feat"><img class="mb-2" src="../../assets/002-dumbbell.svg" width="56" height="56"/>
            <p class="h4">خسارة الوزن</p>
            <hr/>
            <p> لوريم ايبسوم دولار سيت أميت أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أيوسمود.</p>
            </div>
        </div>
        <div class="col-md-6 col-lg-3 p-5 k">
            <div class="feat"><img class="mb-2" src="../../assets/003-boxing-gloves.svg" width="56" height="56"/>
            <p class="h4">الملاكمة</p>
            <hr/>
            <p> لوريم ايبسوم دولار سيت أميت أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أيوسمود.</p>
            </div>
        </div>
        <div class="col-md-6 col-lg-3 p-5 k">
            <div class="feat"><img class="mb-2" src="../../assets/004-running.svg" width="56" height="56"/>
            <p class="h4">الركض</p>
            <hr/>
            <p> لوريم ايبسوم دولار سيت أميت أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أيوسمود.</p>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
#feats{
    .k:nth-child(even){
        background-color: #eee !important;
    }
    .feat{
        text-align: right;
        hr{
            width: 25%;
            background-color: rgb(242, 58, 46);
            height: 2px;
            position: relative;
            left: 40%;
        }
    }
}
</style>
