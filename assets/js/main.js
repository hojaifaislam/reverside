(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();

        $('.home_area').addClass('show');

        if (window.matchMedia('(max-width: 991.98px)').matches) {
            $('.dropdown_wrap>a').click(function(e) {
                e.preventDefault();
                var $this = $(this);
                // $('.drop_box>a').removeClass('open');
                // $this.toggleClass('open');

                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp(350);
                    $('.drop_box>a').removeClass('open');
                    
                } else {
                    $this.parent().parent().find('ul').removeClass('show');
                    $this.parent().parent().find('ul').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.next().slideToggle(350);

                }
            }); 
        }
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        // nice select
        $('select').niceSelect();

        //03. Smoot Scroll Effect
        $('.scroll').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '120';
            $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 600, 'easeInSine');
            event.preventDefault();
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });        

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .menu, header').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        $('.dropdown-menu').on('click', function(event){
            event.stopPropagation();
        });

        // home slider
        var swiper = new Swiper('.swiper', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            loop: true,
            // mousewheelControl: true,
            // parallax: true,
            speed: 600,
            autoplay: 2500,
        });

        // dream slider
        // Slider Initialize
        $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            dots: false,
            navText: [
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ],
        }); 

        // Slider Initialize
        $('.owl-carousel.project_slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            navText: [
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ],
            responsive:{
                0:{
                    margin: 20,
                    items: 1,
                    stagePadding: 30,
                },
                576:{
                    margin: 20,
                    items: 2,
                },
                992:{
                    margin: 20,
                    items: 4,
                },
                1200:{
                    margin: 30,
                    items: 4,
                },
            }
        });        

        $('.owl-carousel.slider2').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            navText: [
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ],
            responsive:{
                0:{
                    margin: 20,
                    items: 1,
                    dots: true,
                },
                576:{
                    margin: 20,
                    items: 3,
                },
                992:{
                    margin: 20,
                    items: 4,
                },
                1200:{
                    margin: 50,
                    items: 4,
                },
            }
        });
        $('.owl-carousel.slider3').owlCarousel({
            loop: false,
            nav: true,
            items: 1,
            margin: 3,
            dots: true,
            mouseDrag: false,
            pullDrag: false,
            touchDrag: false,
            navText: [
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });  

        $('.slider3 a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },        
        });       
    });

})(jQuery);