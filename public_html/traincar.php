
<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="assets/less/main.css">

<div class="traincar-car traincar-active" data-car-id='0' id="car-0">
    <?php include "html_elements/hexagons.php" ?>
</div>

<div class="traincar-car" data-car-id='1' id="car-1">
    second car
</div>

<div class="traincar-car" data-car-id='2' id="car-2">
    third car
</div>

<div id="toggle-car-1" style="top: 500px; position: absolute; color: white">
    switch-towards-down
</div>

<div id="toggle-car-2" style="top: 540px; position: absolute; color: white">
    switch-towards-right
</div>

<script src="assets/js/jquery.min.js" type="text/javascript"></script>
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/ts/traincar.js" type="text/javascript"></script>

<script type="text/javascript">

</script>


<!--

-class to indicate if #2 or #3 is in focus currently
    -can just find this class for finding left of #1 and right of #4
    -class changes for down of #2 (#2 should get class removed, #3 added), and the reverse
    -left #1 is always going to #4 and vice versa.

-->