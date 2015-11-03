$(document).ready(function() {
    $('.shop-slider').slick({
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
        slidesToScroll: 4,
        draggable: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
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