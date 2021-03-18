$('.bigslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider'
});

$('.slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.bigslider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
});