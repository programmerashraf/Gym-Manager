<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href=" {{ asset('Admin/css/bootstrap.min.css') }} ">
    
    <link rel="stylesheet" href=" {{ URL::asset('Admin/font-awesome/css/font-awesome.min.css') }}  ">
    <link rel="stylesheet" href=" {{ URL::asset('Admin/css/AdminLTE.min.css') }}  ">
    <link rel="stylesheet" href=" {{ URL::asset('Admin/css/ionicons.min.css') }}  ">
    <link rel="stylesheet" href=" {{ URL::asset('Admin/css/skin-blue.min.css') }}  ">
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <title>Dashboard</title>
</head>
<body class="hold-transition skin-blue sidebar-mini">

    <div id="dash">
        <dashboard></dashboard>
    </div>

</body>

    <script src="{{ asset('js/app.js') }}"></script>

  
    <script src="{{ asset('Admin/js/jquery.min.js') }}"></script>
    <script src="{{ asset('Admin/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('Admin/js/adminlte.min.js') }}"></script>

</html>