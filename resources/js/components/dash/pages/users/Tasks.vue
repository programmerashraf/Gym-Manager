<template>
    <div id="task">
        <section class="content-header">
            <h1>
                Tasks
            </h1>
        </section>

        <div class="buttons">

            <button class="btn btn-default" @click="one=!one">Saturday</button>
            <button class="btn btn-default" @click="two=!two">Sunday</button>
            <button class="btn btn-default" @click="three=!three">Monday</button>
            <button class="btn btn-default" @click="four=!four">Tuesday</button>
            <button class="btn btn-default" @click="five=!five">Wednesday</button>
            <button class="btn btn-default" @click="six=!six">Thursday</button>
        </div>

        <div class="days">
            <div class="row">
                <div v-if="one" class="col-xs-6 col-md-4 col-lg-3">
                    <div class="day">
                        <h1>Saturday</h1>
                        <ol>
                            <li :key="taskc" v-for="taskc in User_tasks_1.lists ">{{ taskc }}</li>
                        </ol>
                    </div>
                </div>
                <div v-if="two" class="col-xs-6 col-md-4 col-lg-3">
                    <div class="day">
                        <h1>Sunday</h1>
                        <ol>
                            <li :key="taskc" v-for="taskc in User_tasks_2.lists ">{{ taskc }}</li>
                        </ol>
                    </div>
                </div>
                <div v-if="three" class="col-xs-6 col-md-4 col-lg-3">
                    <div class="day">
                        <h1>Monday</h1>
                        <ol>
                            <li :key="taskc" v-for="taskc in User_tasks_3.lists ">{{ taskc }}</li>
                        </ol>
                    </div>
                </div>
                <div v-if="four" class="col-xs-6 col-md-4 col-lg-3">
                    <div class="day">
                        <h1>Tuesday</h1>
                        <ol>
                            <li :key="taskc" v-for="taskc in User_tasks_4.lists ">{{ taskc }}</li>
                        </ol>
                    </div>
                </div>
                <div v-if="five" class="col-xs-6 col-md-4 col-lg-3">
                    <div class="day">
                        <h1>Wednesday</h1>
                        <ol>
                            <li :key="taskc" v-for="taskc in User_tasks_5.lists ">{{ taskc }}</li>
                        </ol>
                    </div>
                </div>
                <div v-if="six" class="col-xs-6 col-md-4 col-lg-3">
                    <div class="day">
                        <h1>Thursday</h1>
                        <ol>
                            <li :key="taskc" v-for="taskc in User_tasks_6.lists ">{{ taskc }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="inputs">

            <div class="row">
                
                <div class="col-lg-6">
                    <label for="one">Saturday</label>
                    <div class="input-group">
                    <input type="text" @change="add_task($event, 0)" class="form-control" id="one" placeholder="Add Task">
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <label for="one">Sunday</label>
                    <div class="input-group">
                    <input type="text" @change="add_task($event, 1)" class="form-control" id="one" placeholder="Add Task">
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <label for="one">Monday</label>
                    <div class="input-group">
                    <input type="text" @change="add_task($event, 2)" class="form-control" id="one" placeholder="Add Task">
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <label for="one">Tuesday</label>
                    <div class="input-group">
                    <input type="text" @change="add_task($event, 3)" class="form-control" id="one" placeholder="Add Task">
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <label for="one">Wednesday</label>
                    <div class="input-group">
                    <input type="text" @change="add_task($event, 4)" class="form-control" id="one" placeholder="Add Task">
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                    <label for="one">Thursday</label>
                    <div class="input-group">
                    <input type="text" @change="add_task($event, 5)" class="form-control" id="one" placeholder="Add Task">
                    </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->

                <button class="btn btn-default" @click="send">Submit</button>
            </div><!-- /.row -->
        </div>
    </div>
</template>


<style lang="scss" scoped>
.buttons{
    margin-bottom: 20px;
}

.days{
    background-color: #222d32;
    padding: 10px;

    .day{
        h1{
            margin-bottom: 10px;

        }
        margin-bottom: 10px;
        background-color: #fff;
        border-radius: 10px;
        text-align: center;
        padding: 10px;
        -webkit-box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.44);
        -moz-box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.44);
        box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.44);
    }

}

.inputs{
    margin-top: 20px;
}
</style>


<script>
import Axios from 'axios';
export default {
    
    data(){
        return {
            one: true,
            two: true,
            three: false, 
            four: false,
            five: false,
            six: false,
        }
    },
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
    methods:{
        add_task(event, list){
            this.$store.state.tasks[list].lists.push(event.target.value)
        },
        send(){
            Axios.post('/addExercises', {
                tasks: this.$store.state.tasks
            })
        }
    },
    mounted(){
        console.log(this.$store.state.tasks[0].lists)
    }
}
</script>


<style lang="scss" scoped>

</style>
