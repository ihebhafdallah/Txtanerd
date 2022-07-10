options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(options);

$('.menu-icon').click(function() {
    $('.menu').removeClass('d-none');

});
$('.close-btn').click(function (){
    $('.menu').addClass('d-none')
});

