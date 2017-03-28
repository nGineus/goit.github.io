// ﻿$(function() { // jQuery Запускаем по окончании загрузки страницы
//   // $('carousel-list').carouselka();
//
//   $.fn.carouselka = function() { // К стандартному функционалу джиквери добавляем свой функционал
//
//   }
// });
//
// (function($) { // jQuery плагин
//
//
//   return this;
// })(jQuery);


$(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
          });
