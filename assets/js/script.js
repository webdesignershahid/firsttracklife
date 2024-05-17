(function ($) {
    "use strict";
    
    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });

    function mobile_menu(selector, actionSelector) {
        var mobile_menu = $(selector);
        mobile_menu.on("click", function() {
            $(selector).toggleClass('is-menu-open');
        });
        
        var hamburgerbtn = $(selector);
        hamburgerbtn.on("click", function() {
            $(actionSelector).toggleClass('is-menu-open');
        });
        var navLink = $('.mobile-menu .nav a');
        navLink.on("click", function() {
            $(actionSelector).removeClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(mobile_menu);
            if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                $(actionSelector).removeClass("is-menu-open");
                $(selector).removeClass("is-menu-open");
            }          
        });
    
    };
    mobile_menu('.menu-toggler, .close-menu', '.expanded__menu');   
    
    $('.expanded__menu ul li.menu-item-has-children > a').on('click', function () {
        var link = $(this);
        var closestUl = link.closest("ul");
        var parallelActiveLinks = closestUl.find(".active")
        var closestLi = link.closest("li");
        var linkStatus = closestLi.hasClass("active");
        var count = 0;

        closestUl.find("ul").slideUp(function () {
            if (++count == closestUl.find("ul").length)
                parallelActiveLinks.removeClass("active");
        });

        if (!linkStatus) {
            closestLi.children("ul").slideDown();
            closestLi.addClass("active");
        }
    });

})(jQuery);

