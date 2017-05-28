

<!--

For a regular hexagon each angle is 120degrees.
This allows use to form a right angle triangle with 30degrees and 60degrees as it's angles.

If we make each side of the hexagon length r (the hypotenuse) then we can calculate the two sides:
1) the longer side (adjacent to the 30degrees)  = r * cos(30deg)
2) the shorter side (opposite to the 30degrees) = r * sin(30deg)

-->




<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10000" height="10000" id="svg1">
    <defs>

        <!-- Regular Hexagon -->
        <clipPath id="hexClip">
            <polygon points="50,0 150,0 200,86.60254037844386 150,173.20508075688772 50,173.20508075688772 0,86.60254037844386" class="hexagon">
        </clipPath>

    </defs>

    <?php

    $imageLocations = ['assets/img/stock/stockIm1.min.png'];
    for($i = 0; $i < 18; $i++){
        echo "<image xlink:href='" . $imageLocations[0] . "' clip-path='url(#hexClip)' class='svgHex' id='hex" . $i . "'></image>";
    }

    ?>


</svg>
