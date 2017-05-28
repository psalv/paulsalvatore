

var ADJACENT = Math.sqrt(3)/2;  // used for calculating size of side adjacent to 30degree angle
var OPPOSITE = 0.5;             // used for calculating size of side opposite to 30degree angle

var NUM_COL = 3;                // The number of hexagons in the largest column
var NUM_HEX = 13;               // Total number of hexagons
var SPACER = 15;                // Spacer between each hexagon

var HEX_SIDE_LENGTH;
var HEX_WIDTH;
var HEX_HEIGHT;

var windowHeight;
var windowWidth;





function resizeEvent() {
    windowWidth = $(this).width();
    windowHeight = $(this).height();
    HEX_SIDE_LENGTH = Math.floor(windowWidth/8);
    HEX_WIDTH = HEX_SIDE_LENGTH + 2*HEX_SIDE_LENGTH*OPPOSITE;
    HEX_HEIGHT = 2*HEX_SIDE_LENGTH*ADJACENT;

    var points = (HEX_SIDE_LENGTH*OPPOSITE) + ",0 "+ (HEX_SIDE_LENGTH + HEX_SIDE_LENGTH*OPPOSITE) + ",0 " +
        (HEX_WIDTH) + "," + (HEX_SIDE_LENGTH*ADJACENT) + " " +
        (HEX_SIDE_LENGTH + HEX_SIDE_LENGTH*OPPOSITE) + "," + (HEX_HEIGHT) + " " +
        (HEX_SIDE_LENGTH*OPPOSITE) + "," + (HEX_HEIGHT) + " 0," + (HEX_SIDE_LENGTH*ADJACENT);



    $('.hexagon').attr('points', points);

    var secondRow = 0;
    var hexId;
    var pos;
    for(var i = 0; i < 2*NUM_COL - 1; i++){
        var cur = i;
        secondRow = i < NUM_COL ? 0 : 0.5;

        while(cur < NUM_HEX){
            hexId = '#hex' + cur;
            pos = Math.floor(cur/(2*NUM_COL - 1));

            $(hexId).attr({
                // width: 600,
                // height: 600,
                transform: "translate(" + (pos * (HEX_WIDTH+HEX_SIDE_LENGTH + SPACER)) + "," + (i*(HEX_HEIGHT + SPACER)) + ")"
            });



            cur += 2*NUM_COL - 1;
        }
    }



    // var hexId;


    /*
    for(var i = 0; i < NUM_HEX; i++){
        hexId = '#hex' + i;



        $(hexId).attr({
            width: 600,
            height: 600,
            transform: "translate(" + (50*i) + ", 0)"
        });
    }
    */

}













// Whenever a window is resized we need to update the sizes of the triangles (for responsiveness)
$(function jQueryResize (){
    $(window).resize(function(){
        resizeEvent();
    })
});


// Since we use absolute positioning, we need to resize when the website is loaded in order to fit to the current screen size.
$(function (){
    resizeEvent();
});