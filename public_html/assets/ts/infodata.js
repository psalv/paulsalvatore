var NUM_CARDS = 4;
function changeInfoData(currentData, nextData, direction) {
    currentData.removeClass("infoData-active");
    $('#card-' + currentData.attr('data-card-id')).removeClass("infoDataTitle-active");
    nextData.addClass("infoData-active");
    $('#card-' + nextData.attr('data-card-id')).addClass("infoDataTitle-active");
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
        var currentCard = $('.infoData-active').first();
        if (currentCard.length == 0) {
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'down');
        }
        else {
            currentCard.promise().done(function () {
                var currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition - 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), 'down');
            });
        }
    }
    else if (key == 40) {
        var currentCard = $('.infoData-active').first();
        if (currentCard.length == 0) {
            changeInfoData($('#infoCard-1'), $('#infoCard-0'), 'up');
        }
        else {
            currentCard.promise().done(function () {
                var currentPosition = parseInt(this.attr('data-card-id'));
                changeInfoData(this, $('#infoCard-' + ((((currentPosition + 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), 'up');
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
$('.infoCardTitle').on('click', function () {
    var currentCard = $('.infoData-active').first();
    var nextID = parseInt($(this).attr('data-card-id'));
    if (currentCard.length == 0) {
        changeInfoData($('#infoCard-' + ((((nextID - 1) % NUM_CARDS) + NUM_CARDS) % NUM_CARDS).toString()), $('#infoCard-' + nextID.toString()), 'up');
    }
    else {
        currentCard.promise().done(function () {
            var currentID = parseInt(this.attr('data-card-id'));
            if (currentID > nextID) {
                changeInfoData(this, $('#infoCard-' + nextID.toString()), 'down');
            }
            else if (currentID < nextID) {
                changeInfoData(this, $('#infoCard-' + nextID.toString()), 'up');
            }
        });
    }
});
