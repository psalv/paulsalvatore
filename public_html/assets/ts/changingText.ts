
/*============================================ TRAINCAR-1 ============================================================*/


let enjoyWords = ["guitar.", "yoga.", "learning.", "creating.", "painting.", "Star Trek.", "Wii Dance.", "cooking.", "problem solving."];
let enjoyPosition = 0;
let wii = $('#wii');
setInterval(function () {
    if(enjoyPosition % enjoyWords.length == 6){
        placeFixedText();
        wii.removeClass("hidden");
    } else{
        wii.addClass("hidden");
    }
    $('#enjoyRotation').html(enjoyWords[enjoyPosition++ % enjoyWords.length]);
}, 2300);

let beenWords = ["a researcher.", "quality assurance.", "a unit tester.", "IT support.", "a student.", "a content manager.", "a developer.",];
let beenPosition = 0;
setInterval(function () {
    $('#beenRotation').html(beenWords[beenPosition++ % beenWords.length]);
}, 2000);



function placeFixedText(){
    $('#wii').css('top', ($('#beenRotation').offset().top - 50).toString() + "px");
}

$(function jQueryResize (){
    $(window).resize(function(){
        placeFixedText();
    })
});