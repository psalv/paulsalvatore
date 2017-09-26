
function changeTrainCar(currentCar: any, nextCar: any, direction: String): void{
    let currentCarMove: String;
    let vertical = false;
    switch(direction){
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
    if(vertical) {
        currentCar.stop().animate({
            top: currentCarMove
        });

        nextCar.stop().animate({
            top: '0'
        });
    } else {
        currentCar.stop().animate({
            left: currentCarMove
        }, 1000);

        nextCar.stop().animate({
            left: '0',
        }, 1000, );
    }
    currentCar.removeClass('traincar-active');
}

function moveCar(key: number){
    if(key == 37){
        // left
        let currentCar = $('.traincar-active').first();
        let currentPosition = parseInt(currentCar.attr('data-car-id'));
        changeTrainCar(currentCar, $('#car-' + ((((currentPosition - 1) % 4) + 4) % 4).toString()), 'left');
    } else if (key == 39){
        let currentCar = $('.traincar-active').first();
        let currentPosition = parseInt(currentCar.attr('data-car-id'));
        changeTrainCar(currentCar, $('#car-' + ((((currentPosition + 1) % 4) + 4) % 4).toString()), 'right');
    }
}

$('body').on('keydown', function (e) {
    let key = e.which || e.keyCode;
    moveCar(key);
});

$('#navigation-left').on('click', function () {
    moveCar(37);
});

$('#navigation-right').on('click', function () {
    moveCar(39);
});
