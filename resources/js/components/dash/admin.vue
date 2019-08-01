<template>
<div>
    <loginPage v-if="!admin"></loginPage>

    <div>
        <Header v-if='admin' ></Header>
        <!-- Left side column. contains the logo and sidebar -->
        <Sidebar></Sidebar>
        <!-- Content Wrapper. Contains page content -->
        <div v-if='admin' class="content-wrapper">
            <!-- Main content -->
            <section class="content">
                <transition name="fade" mode="out-in">
                    <component :is="currentPage"></component>
                </transition>
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <footer v-if='admin' class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 2.4.13
            </div>
            <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
            reserved.
        </footer>

    </div>
    <!-- ./wrapper -->
</div>
</template>

<style>
    .content-header {
        padding: 0 !important;
        margin-bottom: 20px;
    }
</style>


<script>
    import Header from './blocks/Header';
    import Sidebar from './blocks/Sidebar';

    import loginPage from './pages/login';
    import dashboard from './pages/dashboard';

    import userAdd from './pages/users/user-add';
    import userAll from './pages/users/user-all';
    import userEdit from './pages/users/user-edit';
    import tasks from './pages/users/Tasks';
    import articleAll from './pages/articles/article-all';
    import articleAdd from './pages/articles/article-add';

    export default {
        components: {
            dashboard,
            Header,
            Sidebar,
            loginPage,
            userAdd,
            userAll,
            userEdit,
            tasks,
            articleAdd,
            articleAll
        },
        computed: {
            admin() {
                return this.$store.state.AdminPanel.loged
            },
            currentPage() {
                return this.$store.state.AdminPanel.currentPage
            },
            user_data() {
                return this.$store.state.user
            }
        }
    }

</script>
