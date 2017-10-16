

// TODO !! NEED TO ADD THE infoDATAACTIVE class so I know which one is currentlty beign displayed!!!
function changeInfoData(currentData: any, nextData: any, direction: String): void{
    currentData.removeClass("infoData-active");
    nextData.addClass("infoData-active");

    let currentCardMove: String;
    let vertical = false;
    switch(direction){
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

    console.log(currentCardMove);

    nextData.removeClass('hidden');
    currentData.stop().animate({
        top: currentCardMove
    }, 750);

    nextData.stop().animate({
        top: '1%'
    }, 750);

    // setTimeout(function () {
    //     currentData.addClass('hidden');
    // }, 750);
}


function moveCard(key: number){
    if(key == 38){
        let currentCar = $('.infoData-active').first();
        if(currentCar.length == 0){
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'up');
        } else {
            currentCar.promise().done(function (this) {

                let currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition - 1) % 5) + 5) % 5).toString()), 'up');
            });
        }

    } else if (key == 40){
        let currentCar = $('.infoData-active').first();
        if(currentCar.length == 0){
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'down');
        } else {
            currentCar.promise().done(function (this) {

                let currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition + 1) % 5) + 5) % 5).toString()), 'down');
            });
        }
    }
}

$('body').on('keydown', function (e) {
    let key = e.which || e.keyCode;
    if(key == 38 || key == 40){
        moveCard(key);
    }
});