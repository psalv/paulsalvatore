
$('#direction-tooltip').on('click', function () {
    $('#direction-tooltip').fadeOut(1000);
});

function toolTipResize(){
    let width = $(this).width();

    let tooltip1 = $('#direction-tooltip');
    let tooltip2 = $('#card-tooltip');

    let widthTip1 = tooltip1.width();
    let widthTip2 = tooltip2.width();
    tooltip1.css("left", ((width - widthTip1)/2).toString() + "px");
    tooltip2.css("left", ((width - widthTip2)/2).toString() + "px");
}
$(function jQueryResize (){
    $(window).resize(function(){
        toolTipResize();
    });
});

$(function () {
    toolTipResize();
    $('#direction-tooltip').fadeIn(2000);
});