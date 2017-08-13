
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
    currentCar.addClass('traincar-active');

}


$(document).ready(function () {
    $('#toggle-car').on('click', function () {
        console.log('q');
        changeTrainCar($('#car-1'), $('#car-2'), 'up');
    });
});