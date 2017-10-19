$('#direction-tooltip').on('click', function () {
    $('#direction-tooltip').fadeOut(1000);
});
function toolTipResize() {
    var width = $(this).width();
    var tooltip1 = $('#direction-tooltip');
    var tooltip2 = $('#card-tooltip');
    var widthTip1 = tooltip1.width();
    var widthTip2 = tooltip2.width();
    tooltip1.css("left", ((width - widthTip1) / 2).toString() + "px");
    tooltip2.css("left", ((width - widthTip2) / 2).toString() + "px");
}
$(function jQueryResize() {
    $(window).resize(function () {
        toolTipResize();
    });
});
$(function () {
    toolTipResize();
    $('#direction-tooltip').fadeIn(2000);
});
