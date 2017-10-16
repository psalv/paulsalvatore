
<!--

For a regular hexagon each angle is 120degrees.
This allows use to form a right angle triangle with 30degrees and 60degrees as it's angles.

If we make each side of the hexagon length r (the hypotenuse) then we can calculate the two sides:
1) the longer side (adjacent to the 30degrees)  = r * cos(30deg)
2) the shorter side (opposite to the 30degrees) = r * sin(30deg)

-->

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svgHex">

    <defs>
        <!-- Regular Hexagon -->
        <clipPath id="hexClip">
            <polygon points="50,0 150,0 200,86.60254037844386 150,173.20508075688772 50,173.20508075688772 0,86.60254037844386" class="hexagon">
        </clipPath>
    </defs>

    <image xlink:href='assets/img/hex1.png' clip-path='url(#hexClip)' class='svgHex' id='hex0'></image>
    <image xlink:href='assets/img/hex1.png' clip-path='url(#hexClip)' class='svgHex' id='hex1'></image>
    <image xlink:href='assets/img/hex1.png' clip-path='url(#hexClip)' class='svgHex' id='hex2'></image>

</svg>
