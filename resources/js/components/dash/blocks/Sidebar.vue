<template>

    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">


            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">Header</li>

                <li>
                    <a role="button" @click="change_page('dashboard')"><i class="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-files-o"></i>
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

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-pie-chart"></i>
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

</style>


<script>
    export default {
        methods: {
            change_page(payload) {
                this.$store.commit('change_current_page', payload)
            }
        }
    }

</script>
