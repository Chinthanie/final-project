
/*global $, console*/
(function () {
    'use strict';
    $(document).ready(function () {
        /* Find the hamburger li and attach a click handler */
        $('nav ul:first-child').click(function () {
            /* toggle the class menu-expanded on the ul
            ** be careful with the "this" context as our selector is a pseudo element and "this" refers to the ul
            **/
            $(this).toggleClass('menu-expanded li');
            
        });
        
        /*SMOOTH SCROLL*/
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    || location.hostname === this.hostname) {

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
    
    
    });
}());