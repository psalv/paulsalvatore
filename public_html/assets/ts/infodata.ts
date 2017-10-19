
let NUM_CARDS = 4;

function changeInfoData(currentData: any, nextData: any, direction: String): void{
    currentData.removeClass("infoData-active");
    $('#card-' + currentData.attr('data-card-id')).removeClass("infoDataTitle-active");
    nextData.addClass("infoData-active");
    $('#card-' + nextData.attr('data-card-id')).addClass("infoDataTitle-active");

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


function moveCard(key: number){
    if(key == 38){
        let currentCard = $('.infoData-active').first();
        if(currentCard.length == 0){
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'down');
        } else {
            currentCard.promise().done(function (this) {

                let currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition - 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), 'down');
            });
        }

    } else if (key == 40){
        let currentCard = $('.infoData-active').first();
        if(currentCard.length == 0){
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'up');
        } else {
            currentCard.promise().done(function (this) {

                let currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition + 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), 'up');
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

$('.infoCardTitle').on('click', function () {

    let currentCard = $('.infoData-active').first();
    let nextID = parseInt($(this).attr('data-card-id'));

    if(currentCard.length == 0){
        changeInfoData($('#infoCard-' + ((((nextID - 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), $('#infoCard-' + nextID.toString()), 'up');
    } else {
        currentCard.promise().done(function (this) {
            let currentID = parseInt(this.attr('data-card-id'));
            if(currentID > nextID){
                changeInfoData(this, $('#infoCard-' + nextID.toString()), 'down');
            } else if (currentID < nextID){
                changeInfoData(this, $('#infoCard-' + nextID.toString()), 'up');
            }
        });
    }
});

