var NUM_CARDS = 4;
function changeInfoData(currentData, nextData, direction) {
    currentData.removeClass("infoData-active");
    nextData.addClass("infoData-active");
    var currentCardMove;
    var vertical = false;
    switch (direction) {
        case 'up':
            currentCardMove = '-100%';
            vertical = true;
            nextData.css({
                'top': '100%'
            });
            break;
        case 'down':
            currentCardMove = '100%';
            vertical = true;
            nextData.css({
                'top': '-100%'
            });
            break;
    }
    nextData.removeClass('hidden');
    currentData.stop().animate({
        top: currentCardMove
    }, 750);
    nextData.stop().animate({
        top: '1%'
    }, 750);
    setTimeout(function () {
        currentData.addClass('hidden');
    }, 750);
}
function moveCard(key) {
    if (key == 38) {
        var currentCar = $('.infoData-active').first();
        if (currentCar.length == 0) {
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'up');
        }
        else {
            currentCar.promise().done(function () {
                var currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition - 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), 'up');
            });
        }
    }
    else if (key == 40) {
        var currentCar = $('.infoData-active').first();
        if (currentCar.length == 0) {
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'down');
        }
        else {
            currentCar.promise().done(function () {
                var currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition + 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), 'down');
            });
        }
    }
}
$('body').on('keydown', function (e) {
    var key = e.which || e.keyCode;
    if (key == 38 || key == 40) {
        moveCard(key);
    }
});
