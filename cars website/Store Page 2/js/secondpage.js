function newzotye()
{
document.getElementById("zotye").src="images/zotye.jpg";
}
function oldzotye()
{
document.getElementById("zotye").src="images/firstcar.jpg";
}
function newarrizo()
{
document.getElementById("arrizo").src="images/arrizo.jpg";
}
function oldarrizo()
{
document.getElementById("arrizo").src="images/third.png";
}
function newnissan()
{
document.getElementById("nissan").src="images/nissan2.jpg";
}
function oldnissan()
{
document.getElementById("nissan").src="images/nissan.png";
}
function newkia()
{
document.getElementById("kia").src="images/kia2.jpg";
}
function oldkia()
{
document.getElementById("kia").src="images/kia.jpg";
}
$(function() {

    //settings for slider
    var width = 550;
    var animationSpeed = 1000;
    var pause = 1500;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});