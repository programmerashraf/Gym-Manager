<template>
    <div>
        <section class="content-header">
            <h1>
                User
                <small>all</small>
            </h1>
        </section>
        <div id="userTable">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th v-bind:key="col[0]" v-for="col in columns" v-on:click="sortTable(col)">{{col}}
                            <i class="arrow" v-if="col == sortColumn"
                                v-bind:class="[ascending ? 'fas fa-sort-down' : 'fas fa-sort-up']"></i>
                        </th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-bind:key="row[0]" v-for="row in get_rows()">
                        <td v-bind:key="col[0]" v-for="col in columns">{{row[col]}}</td>
                        <td>
                            <button class="btn btn-success"  title="Edit user" @click="change_component($event, 'userEdit')"><i class="fas fa-plus"></i></button>                            
                            <button class="btn btn-danger" title="Delete user"><i class="fas fa-user-minus"></i></button>
                            <button class="btn btn-warning" title="Add tasks" @click="change_component($event, 'tasks')"><i class="fas fa-edit"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul class="pagination">
                <li :key="i" v-for="i in num_pages()" v-bind:class="[i == currentPage ? 'active' : '']"
                    v-on:click="change_page(i)">{{i}}</li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .table {
        th {
            background-color: #3c8dbc;
            color: white;
            transition: all 0.4s ease;
            cursor: pointer;

            &:hover {
                background-color: #226e9b;
            }

            .arrow {
                color: white;
                float: right;
            }
        }
    }

    .pagination {
        li {
            background-color: #3c8dbc;
            color: white;
            transition: all 0.4s ease;
            cursor: pointer;
            padding: 10px;
            margin-left: 10px;

            &.active,
            &:hover {
                background-color: #226e9b;
            }
        }

    }

</style>


<script>
    import Vue from 'vue';
    import axios from 'axios';

    Vue.use(axios);

    export default {
        el: '#userTable',
        data() {
            return {
                currentPage: 1,
                elementsPerPage: 3,
                ascending: false,
                sortColumn: '',
                rows: []
            }

        },
        methods: {
            "sortTable": function sortTable(col) {
                if (this.sortColumn === col) {
                    this.ascending = !this.ascending;
                } else {
                    this.ascending = true;
                    this.sortColumn = col;
                }

                var ascending = this.ascending;

                this.rows.sort(function (a, b) {
                    if (a[col] > b[col]) {
                        return ascending ? 1 : -1
                    } else if (a[col] < b[col]) {
                        return ascending ? -1 : 1
                    }
                    return 0;
                })
            },
            "num_pages": function num_pages() {
                return Math.ceil(this.rows.length / this.elementsPerPage);
            },
            "get_rows": function get_rows() {
                var start = (this.currentPage - 1) * this.elementsPerPage;
                var end = start + this.elementsPerPage;
                return this.rows.slice(start, end);
            },
            "change_page": function change_page(page) {
                this.currentPage = page;
            },
            change_component(e, payload) {
                let id = $(e.target).parents('tr').first().children()[0].innerText;
                let users = this.rows;

                users.forEach(user => {
                    for (let key in user) {
                        if (user[key] == id) {
                            Object.assign(this.$store.state.AdminPanel.userEdit, user);
                            console.log(user);
                        }
                    }
                });

                this.$store.commit('change_current_page', payload);
            }
        },
        computed: {
            "columns": function columns() {
                if (this.rows.length == 0) {
                    return [];
                }
                return Object.keys(this.rows[0])
            }
        },
        mounted() {
            axios.get(`/api/users?api_token=${this.$store.state.AdminPanel.token}`).then(res => {

                res.data.data.forEach(user => {
                    delete user.token;
                })

                res.data.data.forEach(user => {
                    this.rows.push(user)
                });

            }).catch(err => err.message);
        }
    }

</script>
