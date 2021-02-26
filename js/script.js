$(".burger").on("click", function(){
    $(".fas, aside").toggleClass("show");
})

$('.start').on("click", function(){
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 500)
})

$('.mobilestart').on("click", function(){
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 500)
})

$('.serv').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s1').offset().top
    }, 500)
})

$('.mobile1').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s1').offset().top
    }, 500)
})

$('.btn').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s2').offset().top
    }, 500)
})

$('.aboutus').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s3').offset().top
    }, 500)
})

$('.mobile3').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s3').offset().top
    }, 500)
})

$('.contactus').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s4').offset().top
    }, 500)
})

$('.mobile4').on('click', function(){
    $('body, html').animate({
        scrollTop: $('.s4').offset().top
    }, 500)
})


$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $(".boxup").addClass('show');
    } else {
        $(".boxup").removeClass('show');
    }
})

$(".boxup").on('click', function(e){
e.preventDefault();
$('html, body').animate({scrollTop: 0}, '300');
})
