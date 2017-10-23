$('#direction-tooltip').on('click', function () {
    $('#direction-tooltip').fadeOut(1000);
});
function toolTipResize() {
    var width = $(this).width();
    var tooltip1 = $('#direction-tooltip');
    var widthTip1 = tooltip1.width();
    tooltip1.css("left", ((width - widthTip1) / 2).toString() + "px");
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
