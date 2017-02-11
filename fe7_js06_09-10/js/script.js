$(function() {


    // -------------------------------- CAROUSEL -------------------------------

    var jcarousel = $('.jcarousel');
    jcarousel
        .on('jcarousel:reload jcarousel:create', function() {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

    // -------------------------------- SELECT -----------------------------------------------
    $('select').niceSelect();

});

// -------------------------------- MENU -----------------------------------------------

var site = function() {
    this.navLi = $('.navmenu li').children('ul').hide().end();
    this.init();
};

site.prototype = {
    init: function() {
        this.setMenu();
    },

    setMenu: function() {
        $.each(this.navLi, function() {
            if ($(this).children('ul')[0]) {
                $(this)
                    .append('<span />')
                    .children('span')
                    .addClass('hasChildren');
            }
        });

        this.navLi.hover(function() {
            // mouseover
            $(this).find('> ul').stop(true, true).slideDown('fast');
            $(this).find('> a').css("background", "#959");
        }, function() {
            // mouseout
            $(this).find('> ul').stop(true, true).fadeOut('fast');
            $(this).find('> a').css("background", "");
        });


    }
};

new site();

// ---------------------------- CHECKS ---------------------------------------

$(".customCheck").mousedown(function() {
    changeCheck($(this));
});

$(".customCheck").each(function() {
    changeCheckStart($(this));
});

function changeCheck(el) {
    input = el.find("input").eq(0);
    if (!input.attr("disabled")) {
      if (!input.attr("checked")) {
          el.css("background-position", "0 -17px");
          input.attr("checked", true);
      } else {
          el.css("background-position", "0 0");
          input.attr("checked", false);
      }
    }
    return true;
  }

function changeCheckStart(el) {
    input = el.find("input").eq(0);
    if (input.attr("disabled")) {
        el.css("background-position", "0 -34px");
      }
    else if (input.attr("checked")) {
        el.css("background-position", "0 -17px");
    }
    return true;
  }
