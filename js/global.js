var carousel = {
    config: {
        wrapper: '.owlCarousel',
        items: 1,
        loop: false,
        nav: true,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        margin: 10,
        navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],


    },

    init: function(config) {
        $.extend(carousel.config, config);
        this.cacheDom();
        this.render();
    },
    cacheDom: function() {
        this.$wrapper = $('.owlCarousel')
        this.$item = this.$wrapper.find('.item');
    },
    render: function() {
        this.$wrapper.owlCarousel({
            loop: carousel.config.loop,
            nav: carousel.config.nav,
            items: carousel.config.items,
            autoplay: carousel.config.autoplay,
            autoplayTimeout: carousel.config.autoplayTimeout,
            autoplayHoverPause: carousel.config.autoplayHoverPause,
            margin: carousel.config.margin,
            navText: carousel.config.navText
        });
    },
    setHeight: function() {
        console.log('setHeight');
    },
    destroy: function() {
        this.$wrapper.owlCarousel('destroy');
        this.$wrapper.find('.owl-stage').detach();
    }

};

$(document).ready(function() {

    if ($('.owlCarousel').length) {
        carousel.init({
            items: 3,
            margin: 10,
            navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],
            autoplay: false
        })
    }

    $('.js-popup').click(function() {
        var target = $(this).attr('data-target');
        $('.'+target).addClass('open');
        $('.page-wrapper').addClass('blur');
        return false;
    });

    $('.js-closePopup').click(function(){
        if($(this).parents('.modal-wrapper').hasClass('open')){
            $(this).parents('.modal-wrapper').removeClass('open');
            $('.page-wrapper').removeClass('blur');
        }
    });
});





// accordian
$('.accordion-toggle').on('click', function() {
    $(this).closest('.panel-group').children().each(function() {
        $(this).find('>.panel-heading').removeClass('active');
    });

    $(this).closest('.panel-heading').toggleClass('active');
});

//Initiat WOW JS
// new WOW().init();

// portfolio filter
$(window).load(function() {

});


//goto top
$('.gototop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});