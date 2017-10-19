var smokeIcon = $('#smokeIcon');
var smokeContainer = $('.smokeContainer');
function placeSmoke() {
    var offset = smokeIcon.offset();
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
$(function jQueryResize() {
    $(window).resize(function () {
        placeSmoke();
    });
});
setInterval(function () {
    if (smokeIcon.offset().top > 0) {
        placeSmoke();
        smokeContainer.first().removeClass("hidden");
    }
    else {
        smokeContainer.addClass("hidden");
    }
}, 1000);
$('#linkedinIcon').on("mouseover", function () {
    $('#currentLink').html("");
}).on('click', function () {
    window.open("https://www.linkedin.com/in/paul-salvatore/", '_blank');
});
$('#githubIcon').on("mouseover", function () {
    $('#currentLink').html("");
}).on('click', function () {
    window.open("https://github.com/psalv", '_blank');
});
$('#mailIcon').on("mouseover", function () {
    $('#currentLink').html("paulanthonysalvatore@gmail.com");
});
$('#googleIcon').on("mouseover", function () {
    $('#currentLink').html("");
}).on('click', function () {
    window.open("https://google.ca", '_blank');
});
smokeIcon.on("mouseover", function () {
    $('#currentLink').html("I am vigilantly on the lookout for smoke signals.");
});
$('#currentLink').on('click', function () {
    if (this.innerHTML.charAt(0) != "I") {
        window.open(this.innerHTML, '_blank');
    }
});
