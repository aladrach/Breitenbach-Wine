$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true
    });
});
$(document).ready(function() {
    $('.featured-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true
    });
});
$(document).ready(function() {
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }]
    });

});
$(function(){
    $('.portfolio-items').mixItUp();
});