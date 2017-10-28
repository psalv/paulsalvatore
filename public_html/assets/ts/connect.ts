
let smokeIcon = $('#smokeIcon');
let smokeContainer = $('.smokeContainer');

function placeSmoke() {
    let offset: any = smokeIcon.offset();
    $("#smoke1").css({
        top: offset.top - 25,
        left: offset.left - 8
    }).next().css({
        top: offset.top - 55,
        left: offset.left + 40
    }).next().css({
        top: offset.top - 115,
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
}, 1000);

$('#linkedinIcon').on("mouseover", function () {
    $('#currentLink').html("");
}).on('click', function () {
    window.open( "//www.linkedin.com/in/paul-salvatore/" , '_blank' );
});

$('#githubIcon').on("mouseover", function () {
    $('#currentLink').html("");
}).on('click', function () {
    window.open( "//github.com/psalv" , '_blank' );
});

$('#mailIcon').on("mouseover", function () {
    $('#currentLink').html("paulanthonysalvatore@gmail.com");
});

$('#mediumIcon').on("mouseover", function () {
    $('#currentLink').html("");
}).on('click', function () {
    window.open( "//medium.com/@paulanthonysalvatore/" , '_blank' );
});

smokeIcon.on("mouseover", function () {
    $('#currentLink').html("I am vigilantly on the lookout for smoke signals.");
});

$('#currentLink').on('click', function () {
    if(this.innerHTML.charAt(0) != "I"){
        window.open( this.innerHTML , '_blank' );
    }
});
