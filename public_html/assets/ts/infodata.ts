

// TODO !! NEED TO ADD THE infoDATAACTIVE class so I know which one is currentlty beign displayed!!!
function changeInfoData(currentData: any, nextData: any, direction: String): void{
    let currentCarMove: String;
    let vertical = false;
    switch(direction){
        case 'up':
            currentCarMove = '-100%';
            vertical = true;
            nextData.css({
                'top': '100%'
            });
            break;
        case 'down':
            currentCarMove = '100%';
            vertical = true;
            nextData.css({
                'top': '-100%'
            });
            break;
    }

    nextData.removeClass('hidden');
    currentData.stop().animate({
        top: currentCarMove
    }, 750);

    nextData.stop().animate({
        top: '0'
    }, 750);

    setTimeout(function () {
        currentData.addClass('hidden');
    }, 750);
}


/* TODO
function moveCar(key: number){
    if(key == 37){
        // left
        let currentCar = $('.traincar-active').first();
        currentCar.promise().done(function (this) {

            let currentPosition = parseInt(this.attr('data-car-id'));
            changeTrainCar(this, $('#car-' + ((((currentPosition - 1) % 4) + 4) % 4).toString()), 'left');
        });

    } else if (key == 39){
        let currentCar = $('.traincar-active').first();
        currentCar.promise().done(function (this) {

            let currentPosition = parseInt(this.attr('data-car-id'));
            changeTrainCar(this, $('#car-' + ((((currentPosition + 1) % 4) + 4) % 4).toString()), 'right');
        });
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
*/