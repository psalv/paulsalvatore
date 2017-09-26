
function changeTrainCar(currentCar: any, nextCar: any, direction: String): void{
    let currentCarMove: String;

    let vertical = false;
    switch(direction){
        case 'up':
            currentCarMove = '-100%';
            vertical = true;
            break;
        case 'down':
            currentCarMove = '100%';
            vertical = true;
            break;
        case 'left':
            currentCarMove = '-100%';
            break;
        case 'right':
            currentCarMove = '100%';
            break;
    }

    nextCar.addClass('traincar-active');
    if(vertical) {
        currentCar.animate({
            top: currentCarMove
        });

        nextCar.animate({
            top: '0'
        });
    } else {
        currentCar.animate({
            left: currentCarMove,
        });

        nextCar.animate({
            left: '0',
        });
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

// $(function () {
//     $('#toggle-car-1').on('click', function () {
//         changeTrainCar($('.traincar-active').first(), $('#car-2'), 'down');
//     });
//
//     $('#toggle-car-2').on('click', function () {
//         changeTrainCar($('.traincar-active').first(), $('#car-3'), 'right');
//     });
// });