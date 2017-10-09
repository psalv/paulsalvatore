



/******************************************** HEXAGON SCALING + GRID **************************************************/

var ADJACENT = Math.sqrt(3)/2;  // Used for calculating size of side adjacent to 30degree angle
var OPPOSITE = 0.5;             // Used for calculating size of side opposite to 30degree angle

var NUM_COL = 3;                // The number of hexagons in the largest column
var NUM_HEX = 10;               // Total number of hexagons
var SPACER = 8;                 // Spacer between each hexagon

var HEX_SIDE_LENGTH;
var HEX_WIDTH;
var HEX_HEIGHT;

var windowHeight;
var windowWidth;

function resizeEvent() {
    windowWidth = $(this).width();
    windowHeight = $(this).height();

    HEX_SIDE_LENGTH = Math.floor(windowWidth/(NUM_HEX/2));
    HEX_WIDTH = HEX_SIDE_LENGTH + 2*HEX_SIDE_LENGTH*OPPOSITE;
    HEX_HEIGHT = 2*HEX_SIDE_LENGTH*ADJACENT;

    var points = (HEX_SIDE_LENGTH*OPPOSITE) + ",0 "+ (HEX_SIDE_LENGTH + HEX_SIDE_LENGTH*OPPOSITE) + ",0 " +
        (HEX_WIDTH) + "," + (HEX_SIDE_LENGTH*ADJACENT) + " " +
        (HEX_SIDE_LENGTH + HEX_SIDE_LENGTH*OPPOSITE) + "," + (HEX_HEIGHT) + " " +
        (HEX_SIDE_LENGTH*OPPOSITE) + "," + (HEX_HEIGHT) + " 0," + (HEX_SIDE_LENGTH*ADJACENT);

    $('.hexagon').attr('points', points);
    $('#svgHex').attr({width: windowWidth, height: HEX_HEIGHT*2 + SPACER});

    var secondRow;
    var hexId;
    var pos;
    for(var i = 0; i < 2*NUM_COL - 1; i++){
        var cur = i;
        secondRow = i < NUM_COL;

        /* We translate based on the current row.
           There are 2x-1 different possible rows (x being the number of hexagons in the largest column), and their
           starting points will be in the first and second rows.
           Starting points in the first column are not offset, while starting points in the second column are.

           We move everything up and to the left in order to avoid empty space at the top  and sides.
        */
        while(cur < NUM_HEX){
            hexId = '#hex' + cur;
            var hexIdSh = '#hexSh' + cur;
            pos = Math.floor(cur/(2*NUM_COL - 1));

            if(secondRow){
                // $(hexIdSh).attr({
                //     width: HEX_WIDTH,
                //     height: HEX_HEIGHT * 1.17,
                //     transform: "translate(" + (pos * (HEX_WIDTH+HEX_SIDE_LENGTH + SPACER) - HEX_WIDTH/2 + 2) + "," + (i*(HEX_HEIGHT + SPACER) - HEX_HEIGHT/2 + 2) + ")"
                // });

                $(hexId).attr({
                    width: HEX_WIDTH,
                    height: HEX_HEIGHT * 1.17,
                    transform: "translate(" + (pos * (HEX_WIDTH+HEX_SIDE_LENGTH + SPACER) - HEX_WIDTH/2) + "," + (i*(HEX_HEIGHT + SPACER) - HEX_HEIGHT/2) + ")"
                });


            } else {
                // $(hexIdSh).attr({
                //     width: HEX_WIDTH,
                //     height: HEX_HEIGHT * 1.17,
                //     transform: "translate(" + (pos * (HEX_WIDTH+HEX_SIDE_LENGTH + SPACER) + HEX_WIDTH/2 +HEX_SIDE_LENGTH/2 + SPACER/2 - HEX_WIDTH/2 + 2)
                //     + ","
                //     + ((i-NUM_COL)*(HEX_HEIGHT + SPACER) + HEX_HEIGHT/2 + SPACER/2 - HEX_HEIGHT/2 + 2) + ")"
                // });

                $(hexId).attr({
                    width: HEX_WIDTH,
                    height: HEX_HEIGHT * 1.17,
                    transform: "translate(" + (pos * (HEX_WIDTH+HEX_SIDE_LENGTH + SPACER) + HEX_WIDTH/2 +HEX_SIDE_LENGTH/2 + SPACER/2 - HEX_WIDTH/2)
                    + ","
                    + ((i-NUM_COL)*(HEX_HEIGHT + SPACER) + HEX_HEIGHT/2 + SPACER/2 - HEX_HEIGHT/2) + ")"
                });
            }

            cur += 2*NUM_COL - 1;
        }
    }
}

// Whenever a window is resized we need to update the sizes of the hexagons.
$(function jQueryResize (){
    $(window).resize(function(){
        resizeEvent();
    })
});


// Since we use absolute positioning, we need to resize when the website is loaded in order to fit to the current screen size.
$(function (){
    resizeEvent();
});