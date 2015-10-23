/*global $, console*/
(function () {
    'use strict';
    $(document).ready(function () {


        /*DROP DOWN HAMBURGER MENU*/
        $('nav ul:first-child').click(function () {
            $(this).toggleClass('menu-expanded li');
        });





        /*SMOOTH SCROLL*/
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


        /*MOUSE OVER ANIMATION*/

        $('.projectframe').mouseover(function () {
            $(this).addClass('animated pulse');
        });

        $('.projectframe').mouseleave(function () {
            $(this).removeClass('animated pulse');
        });

        $('.menu-icon').mouseover(function () {
            $(this).addClass('animated flip');
        });

        $('.menu-icon').mouseleave(function () {
            $(this).removeClass('animated flip');
        });
    });
}());