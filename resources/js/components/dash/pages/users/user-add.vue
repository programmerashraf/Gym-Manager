<template>
    <div class="box box-info">  
        <div class="container">

        
        <div class="box-header with-border">
            <h3 class="box-title">Add User</h3>
        </div>
        <!-- /.box-header -->
            <!-- form start -->
            <form class="form-horizontal">
                <div class="box-body">

                    <div class="form-group">
                        <label class="font-wieght-bold">User name</label>
                        <input type="text" class="form-control" placeholder="User Name">
                    </div>

                    <div class="form-group">
                        <label for="inputEmail3" class="font-wieght-bold control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>

                    <div class="form-group">
                        <label for="inputPassword3" class="font-wieght-bold control-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                    </div>

                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="text" class="font-wieght-bold form-control" placeholder="Phone Number">
                    </div>

                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    <button class="btn btn-success">ADD USER</button>
                </div>
                <!-- /.box-footer -->
            </form>
        </div>
    </div>
          
</template>

<style scoped>
.form-group{
    max-width: 500px;
}

.box-footer{
    display: flex;
    align-items: center
}
</style>
