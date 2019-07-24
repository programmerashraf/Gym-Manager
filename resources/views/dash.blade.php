<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href=" {{ asset('Admin/css/bootstrap.min.css') }} ">
    
    <link rel="stylesheet" href=" {{ URL::asset('Admin/css/AdminLTE.min.css') }}  ">
    <link rel="stylesheet" href=" {{ URL::asset('Admin/css/ionicons.min.css') }}  ">
    <link rel="stylesheet" href=" {{ URL::asset('Admin/css/skin-blue.min.css') }}  ">
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
        
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>

    <title>Admin Panel</title>
</head>
<body class="hold-transition skin-blue sidebar-mini">

    <div id="dash">
        <dashboard></dashboard>
    </div>

</body>

    <script src="{{ asset('js/app.js') }}"></script>

    <script src="https://kit.fontawesome.com/7ccf14bcd9.js"></script>
    <script src="{{ asset('Admin/js/jquery.min.js') }}"></script>
    <script src="{{ asset('Admin/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('Admin/js/adminlte.min.js') }}"></script>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>

</html>