function changeTrainCar(currentCar, nextCar, direction) {
    var currentCarMove;
    var vertical = false;
    switch (direction) {
        case 'up':
            currentCarMove = '-100%';
            vertical = true;
            nextCar.css({
                'left': '0%',
                'top': '100%'
            });
            break;
        case 'down':
            currentCarMove = '100%';
            vertical = true;
            nextCar.css({
                'left': '0%',
                'top': '-100%'
            });
            break;
        case 'left':
            currentCarMove = '100%';
            nextCar.css({
                'left': '-100%',
                'top': '0%'
            });
            break;
        case 'right':
            currentCarMove = '-100%';
            nextCar.css({
                'left': '100%',
                'top': '0%'
            });
            break;
    }
    nextCar.addClass('traincar-active');
    if (vertical) {
        currentCar.stop().animate({
            top: currentCarMove
        });
        nextCar.stop().animate({
            top: '0'
        });
    }
    else {
        currentCar.stop().animate({
            left: currentCarMove
        }, 750);
        nextCar.stop().animate({
            left: '0'
        }, 740);
    }
    setTimeout(function () {
        currentCar.removeClass('traincar-active');
    }, 750);
}
function moveCar(key) {
    if (key == 37) {
        // left
        var currentCar = $('.traincar-active').first();
        currentCar.promise().done(function () {
            // TODO ! Was experimenting with ways to prevent the bugginess of fast traincar changes.
            // currentCar = $('.traincar-active').first();
            var currentPosition = parseInt(this.attr('data-car-id'));
            changeTrainCar(this, $('#car-' + ((((currentPosition - 1) % 4) + 4) % 4).toString()), 'left');
        });
    }
    else if (key == 39) {
        var currentCar = $('.traincar-active').first();
        currentCar.promise().done(function () {
            // currentCar = $('.traincar-active').first();
            var currentPosition = parseInt(this.attr('data-car-id'));
            changeTrainCar(this, $('#car-' + ((((currentPosition + 1) % 4) + 4) % 4).toString()), 'right');
        });
    }
}
$('body').on('keydown', function (e) {
    var key = e.which || e.keyCode;
    moveCar(key);
});
$('#navigation-left').on('click', function () {
    moveCar(37);
});
$('#navigation-right').on('click', function () {
    moveCar(39);
});
