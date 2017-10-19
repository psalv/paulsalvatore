var file = new Audio("assets/audio/Django.m4a");
$("#togglePlay").on("click", function () {
    var state = $('#playState');
    if (state.hasClass("fa-play")) {
        file.play();
        state.removeClass("fa-play");
        state.addClass("fa-pause");
    }
    else {
        file.pause();
        state.removeClass("fa-pause");
        state.addClass("fa-play");
    }
});
