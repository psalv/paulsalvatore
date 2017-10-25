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
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Roboto:300,700" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Raleway:300,700" rel="stylesheet">


    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="assets/less/main.css">


</head>

<body>

<!--=========================================== MAIN FILES ==========================================-->
<div class="desktop">
    <?php
    $page = "index-page";
    $hasGmap = true;

    include "html_elements/traincar.php";
    include "html_elements/navigation.php";

    ?>
</div>
<div class="mobile raleway">

    Hello. <br><br>

    My mobile site will be here soon! <br><br>

    Please visit my desktop site in the meantime. <br><br>

    Thanks, <br>

    Paul.<br>

    <hr style="width: 100%; border: 1px solid">

    <div class="row">
        <div class="column col-xs-7 small1">
            <div class="parentCenter">
                <div class="childCenter">
                    paulanthonysalvatore@gmail.com
                </div>
            </div>
        </div>
        <div class="column col-xs-5 small2">
            <div class="parentCenter">
                <div class="childCenter">
                    <div class="text-right">
                        <a href="//linkedin.com/in/paul-salvatore"><i class="fa fa-linkedin-square"></i></a>
                        <a href="//github.com/psalv"><i class="fa fa-github-square"></i></a>
                        <a href="mailto:paulanthonysalvatore@gmail.com"><i class="fa fa-envelope-square"></i></a>
                        <a href="#"><i class="fa fa-google-plus-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>



</div>
<!--=========================================== JS SCRIPTS ==========================================-->
<!-- jQuery -->
<script src="assets/js/jquery.min.js" type="text/javascript"></script>


<!-- Bootstrap Core JavaScript -->
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>

<!-- Plugin JavaScript -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

<!-- Theme JavaScript -->


<!-- Additional JS Files-->
<script src="assets/js/hexagon.js" type="text/javascript"></script>
<script src="assets/ts/traincar.js" type="text/javascript"></script>
<script src="assets/ts/tooltip.js" type="text/javascript"></script>
<script src="assets/ts/changingText.js" type="text/javascript"></script>
<script src="assets/ts/connect.js" type="text/javascript"></script>
<script src="assets/ts/infodata.js" type="text/javascript"></script>
<script src="assets/ts/audio.js" type="text/javascript"></script>



</body>
</html>
