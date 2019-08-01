<template>

    <aside class="main-sidebar" >
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar" >

            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header" v-if='admin'>Header</li>

                <li v-if='admin'>
                    <a role="button" href="/"><i class="fas fa-home"></i>
                        <span>HOME</span></a>
                </li>

                <li v-if='admin'>
                    <a role="button" @click="change_page('dashboard')"><i class="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <li class="treeview" v-if='admin'>
                    <a role="button">
                        <i class="fas fa-edit"></i>
                        <span>Sections</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a role="button" @click="change_page('NavEdit')"><i class="far fa-circle"></i> Navbar</a>
                        </li>
                        <li><a role="button" @click="change_page('SlidersEdit')"><i class="far fa-circle"></i> Slieders</a>
                        </li>
                        <li><a role="button" @click="change_page('AboutusEdit')"><i class="far fa-circle"></i> About us</a>
                        </li>
                        <li><a role="button" @click="change_page('TrainersEdit')"><i class="far fa-circle"></i> Our trainers</a>
                        </li>
                        <li><a role="button" @click="change_page('FooterEdit')"><i class="far fa-circle"></i> Footer</a>
                        </li>
                    </ul>
                </li>

                <li class="treeview" v-if='admin'>
                    <a role="button">
                        <i class="fas fa-users"></i>
                        <span>Users</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a role="button" @click="change_page('userAll')"><i class="far fa-circle"></i> all users</a>
                        </li>
                        <li><a role="button" @click="change_page('userAdd')"><i class="far fa-circle"></i> add user</a>
                        </li>
                    </ul>
                </li>

                <li class="treeview" v-if='admin'>
                    <a href="#">
                        <i class="fas fa-newspaper"></i>
                        <span>Articles</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a role="button" @click="change_page('articleAll')"><i class="far fa-circle"></i> All
                                articles</a></li>
                        <li><a role="button" @click="change_page('articleAdd')"><i class="far fa-circle"></i> add
                                article</a></li>

                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>

</template>

<style lang="scss" scoped>
    i{
        margin-right: 10px;
    }
    .main-sidebar{
        min-height: 124%;
    }
</style>


<script>
    export default {
        methods: {
            change_page(payload) {
                this.$store.commit('change_current_page', payload)
            }
        },computed: {
            admin() {
                return this.$store.state.AdminPanel.loged
            },
        }
    }
</script>
