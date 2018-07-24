<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'BYA') }}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="{{ asset('css/app.css') }}?version={{ config('app.version') }}" rel="stylesheet">
    <script src=" {{ asset('js/laroute.js') }}"></script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
</head>
<body>
@yield('content')
<script src="{{ asset('js/app.js') }}?version={{ config('app.version') }}"></script>
</body>
</html>
