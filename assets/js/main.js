
$('#carousel-fetures').owlCarousel({
    margin:20,
    dots:true,
    nav: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

$('#carousel-team').owlCarousel({
    margin:20,
    dots:true,
    nav: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
}); 

$(document).ready(function() {
 $('img').lazyload({
    threshold: 200,
    effect: 'fadeIn'
});
});

$('#enviar-form').click(function(event) {
    event.preventDefault();
    $('#form').submit();
});


$('#enviar-email').click(function(event) {
    event.preventDefault();
    $('#form-email').submit();
});

$(document).ready(function() {
    $('.layer')
    .mouseover(function() {
        var number = $(this).find('.layer--hover').attr('id');
        console.log(number);
        $( '#'+number ).css('display', 'block');
    })
    .mouseout(function() {
        var number = $(this).find('.layer--hover').attr('id');
        console.log(number);
        $( '#'+number ).css('display', 'none');
    });
});

$('.list-option li a').click(function(event) {
    $(this).removeClass('active');
    $('.list-option li').removeClass('active');
    event.preventDefault();
    var number = $(this).attr('id');
    $('#'+number).toggleClass('active');
});

$(document).ready(function() {
    $('.media')
    .mouseover(function() {
        var number = $(this).find('.team--hover').attr('id');
        console.log(number);
        $( '#'+number ).css('display', 'block');
        $( this ).addClass('active');
    })
    .mouseout(function() {
        var number = $(this).find('.team--hover').attr('id');
        console.log(number);
        $( this ).removeClass('active');
        $( '#'+number ).css('display', 'none');
    });
});


