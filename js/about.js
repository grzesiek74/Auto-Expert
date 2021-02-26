$(document).on('scroll', function(){
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    // drugie zdjęcie
    const $img2 = $('.img2');
    const img2FromTop = $img2.offset().top
    const img2Height = $img2.outerHeight();

    // trzecie zdjęcie
    const $img3 = $('.img3');
    const img3FromTop = $img3.offset().top
    const img3Height = $img3.outerHeight();

    // drugi opis
    const $dscr2 = $('.dscr2');
    const dscr2FromTop = $dscr2.offset().top
    const dscr2Height = $dscr2.outerHeight();

    // trzeci opis
    const $dscr3 = $('.dscr3');
    const dscr3FromTop = $dscr3.offset().top
    const dscr3Height = $dscr3.outerHeight();

    // animacja zdjęć
    if(scrollValue > img2FromTop + img2Height - windowHeight) {
        $img2.addClass('active');
    }

    if(scrollValue > img3FromTop + img3Height - windowHeight) {
        $img3.addClass('active');
    }

    // animacja opisów
    if(scrollValue > dscr2FromTop + dscr2Height - windowHeight) {
        $dscr2.addClass('active');
    }

    if(scrollValue > dscr3FromTop + dscr3Height - windowHeight) {
        $dscr3.addClass('active');
    }

    // usuwanie klasy active (znikanie zdjęć i opisów po scrollu do góry)

    if(scrollValue < 80) {
        // console.log("wyjazd");
        $img2.removeClass('active');
    }
    if(scrollValue < 80) {
        // console.log("wyjazd");
        $img3.removeClass('active');
    }
    if(scrollValue < 80) {
        // console.log("wyjazd");
        $dscr2.removeClass('active');
    }
    if(scrollValue < 80) {
        // console.log("wyjazd");
        $dscr3.removeClass('active');
    }
})

$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $(".goToUp").addClass('show');
    } else {
        $(".goToUp").removeClass('show');
    }
})

$(".goToUp").on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
    })