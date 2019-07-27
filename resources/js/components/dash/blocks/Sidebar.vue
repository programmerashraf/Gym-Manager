<template>
    <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

       <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Nav</span></a></li>
        <li><a href="#"><i class="fa fa-link"></i> <span>About us</span></a></li>
        <li class="treeview" >
          <a href="#" @click="Show(1)"><i class="fa fa-link"></i> <span>Users</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <transition name="fade" mode="out-in">
            <ul v-if='catiShow1'>
              <li><a @click="change_page('userAll')" href="#">All users</a></li>
              <li><a @click="change_page('userAdd')" href="#">Add user</a></li>
            </ul>
          </transition>
        </li>

        <li class="treeview" >
          <a href="#" @click="Show(2)"><i class="fa fa-link"></i> <span>Articles</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <transition name="fade" mode="out-in">
            <ul v-if='catiShow2'>
              <li><a @click="change_page('articleAll')" href="#">All Articles</a></li>
              <li><a @click="change_page('articleAdd')" href="#">Add Article</a></li>
            </ul>
          </transition>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<style lang="scss" scoped>
.treeview{
  ul{
    transition: all 0.4s ease;

    li{
      border-left: 2px solid #3c8dbc;
      padding: 10px;
      margin-bottom: 5px;
      transition: all 0.4s ease;

      &:hover{
        background-color: rgba(0,0,0,0.8);
        color: white
      }
    }
  }
}
</style>


<script>
export default {
    data(){
      return{
        catiShow1: false,
        catiShow2: false
      }
    },
    methods:{
        Show(num){
          if(num == 1) {this.catiShow1 = !this.catiShow1; this.catiShow2 = false}
          else {this.catiShow2 = !this.catiShow2; this.catiShow1 = false}
        },
        change_page(payload){
            this.$store.commit('change_current_page', payload)
        }
    }
}
</script>
