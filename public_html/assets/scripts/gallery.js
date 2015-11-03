var $container = $('.gallery-view');
$container.imagesLoaded(function() {
    $('.gallery-view').masonry({
        // options
        itemSelector: '.gallery-image',
        columnWidth: 200,
        gutter: 10
    });
});

$("a.view-image").fancybox();
