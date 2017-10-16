
/******************************************** HEXAGON SCALING + GRID **************************************************/

var ADJACENT = Math.sqrt(3)/2;  // Used for calculating size of side adjacent to 30degree angle
var OPPOSITE = 0.5;             // Used for calculating size of side opposite to 30degree angle

var NUM_HEX = 10;               // Total number of hexagons
var SPACER = 8;                 // Spacer between each hexagon

var HEX_SIDE_LENGTH;
var HEX_WIDTH;
var HEX_HEIGHT;

var windowHeight;
var windowWidth;

function resizeEvent() {
    windowWidth = $('#car-0').width();
    windowHeight = $(this).height();

    /* Use these parameters to make a complete grid fit to the size of the screen */
    HEX_SIDE_LENGTH = Math.floor(windowWidth/(NUM_HEX/1.1));
    HEX_WIDTH = HEX_SIDE_LENGTH + 2*HEX_SIDE_LENGTH*OPPOSITE;
    HEX_HEIGHT = 2*HEX_SIDE_LENGTH*ADJACENT;

    var points = (HEX_SIDE_LENGTH*OPPOSITE) + ",0 "+ (HEX_SIDE_LENGTH + HEX_SIDE_LENGTH*OPPOSITE) + ",0 " +
        (HEX_WIDTH) + "," + (HEX_SIDE_LENGTH*ADJACENT) + " " +
        (HEX_SIDE_LENGTH + HEX_SIDE_LENGTH*OPPOSITE) + "," + (HEX_HEIGHT) + " " +
        (HEX_SIDE_LENGTH*OPPOSITE) + "," + (HEX_HEIGHT) + " 0," + (HEX_SIDE_LENGTH*ADJACENT);

    $('.hexagon').attr('points', points);
    $('#svgHex').attr({width: windowWidth, height: HEX_HEIGHT*2 + SPACER});


    $('#hex0').attr({
        width: HEX_WIDTH,
        height: HEX_HEIGHT,
        transform: "translate(" + (windowWidth/25 + windowWidth/2 - 2*HEX_SIDE_LENGTH) + "," + windowHeight/20 + ")"
    });

    $('#hex1').attr({
        width: HEX_WIDTH,
        height: HEX_HEIGHT,
        transform: "translate(" + (windowWidth/25 + windowWidth/2 - 2*HEX_SIDE_LENGTH) + "," + (windowHeight/20 + HEX_HEIGHT + SPACER) + ")"
    });

    $('#hex2').attr({
        width: HEX_WIDTH,
        height: HEX_HEIGHT,
        transform: "translate(" + (windowWidth/25 + windowWidth/2 + SPACER - HEX_SIDE_LENGTH/2) + "," + (windowHeight/20 + HEX_HEIGHT/2) + ")"
    });

}

// Whenever a window is resized we need to update the sizes of the hexagons.
$(function jQueryResize (){
    $(window).resize(function(){
        resizeEvent();
    });
});


// Since we use absolute positioning, we need to resize when the website is loaded in order to fit to the current screen size.
$(function (){
    resizeEvent();
});
