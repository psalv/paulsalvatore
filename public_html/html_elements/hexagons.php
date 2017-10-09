

<!--

For a regular hexagon each angle is 120degrees.
This allows use to form a right angle triangle with 30degrees and 60degrees as it's angles.

If we make each side of the hexagon length r (the hypotenuse) then we can calculate the two sides:
1) the longer side (adjacent to the 30degrees)  = r * cos(30deg)
2) the shorter side (opposite to the 30degrees) = r * sin(30deg)

-->




<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svgHex">

    <defs>

        <!-- If you don't want a shadow get rid of this filter and the first echoed image, there is also some associated JS (2 blocks) to remove -->
<!--        <filter id="dropshadow" height="130%">-->
<!--            <feGaussianBlur result = "blurOut" in="SourceAlpha" stdDeviation="200"/> <!-- stdDeviation is how much to blur -->-->
<!--        </filter>-->

        <!-- Regular Hexagon -->
        <clipPath id="hexClip">
            <polygon points="50,0 150,0 200,86.60254037844386 150,173.20508075688772 50,173.20508075688772 0,86.60254037844386" class="hexagon">
        </clipPath>
    </defs>

    <?php

    $NUM_HEXAGONS = 10;

    // A better way would be to give the images identical names differing by the end number from 1 to n, n being the total number of images.
    // This allows us to do what we did with the hex, although isn't as easily changeable (it is much cleaner though).
    $imageLocations = ['http://via.placeholder.com/1000x1000/A9A9A9', 'http://via.placeholder.com/1000x1000/00000'];
    for($i = 0; $i < $NUM_HEXAGONS; $i++){
//        echo "<image filter=\"url(#dropshadow)\" xlink:href='" . $imageLocations[1] . "' clip-path='url(#hexClip)' class='svgHex shadow' id='hexSh" . $i . "'></image>";
        echo "<image xlink:href='" . $imageLocations[0] . "' clip-path='url(#hexClip)' class='svgHex' id='hex" . $i . "'></image>";

    }

    ?>

</svg>

