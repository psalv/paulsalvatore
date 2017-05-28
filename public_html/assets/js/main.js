

var adj = Math.sqrt(3)/2;
var opp = 0.5;
// var HEX_SIDE_LENGTH = 100;
var r = 100;
var points = (r*opp) + ",0 "+ (r + r*opp) + ",0 " + (r + 2*r*opp) + "," + (r*adj) + " " + (r + r*opp) + "," + (2*r*adj) +
            " " + (r*opp) + "," + (2*r*adj) + " 0," + (r*adj);

console.log(points);
