

let smokeIcon = $('#smokeIcon');
let smokeContainer = $('.smokeContainer');

function placeSmoke() {
    let offset: any = smokeIcon.offset();
    $("#smoke1").css({
        top: offset.top - 50,
        left: offset.left - 10
    }).next().css({
        top: offset.top - 80,
        left: offset.left + 40
    }).next().css({
        top: offset.top - 140,
        left: offset.left + 10
    });
}

$(function jQueryResize (){
    $(window).resize(function(){
        placeSmoke();
    })
});

setInterval(function () {
    if(smokeIcon.offset().top > 0){
        placeSmoke();
        smokeContainer.first().removeClass("hidden");
    } else {
        smokeContainer.addClass("hidden");
    }
}, 2000);
