<!DOCTYPE html>
<html lang="en">

<head>

    <!--=========================================== WEBPAGE METADATA ====================================-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>This is Paul.</title>
    <!-- Favicons
    ================================================== -->
    <link rel="manifest" href="assets/img/favicon/manifest.json">

    <!--=========================================== CSS FILES ===========================================-->
    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">

    <!-- Custom Fonts -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Roboto:100,300,400,500" rel="stylesheet">


    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="assets/less/main.min.css">


</head>

<body>

<!--=========================================== MAIN FILES ==========================================-->
<?php
$page = "index-page";
$hasGmap = true;

include "html_elements/traincar.php";
include "html_elements/navigation.php";

?>

<!--
For the hexagons I want to have three hexagons in the center of the page such that they don't touch sides
I will add the dropshadow in gimp, it will be fine..
-->

<!--=========================================== JS SCRIPTS ==========================================-->
<!-- jQuery -->
<script src="assets/js/jquery.min.js" type="text/javascript"></script>


<!-- Bootstrap Core JavaScript -->
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>

<!-- Plugin JavaScript -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

<!-- Theme JavaScript -->


<!-- Additional JS Files-->
<script src="assets/js/hexagon.min.js" type="text/javascript"></script>
<script src="assets/ts/traincar.js" type="text/javascript"></script>
<script src="assets/ts/changingText.js" type="text/javascript"></script>
<script src="assets/ts/connect.js" type="text/javascript"></script>



</body>
</html>
