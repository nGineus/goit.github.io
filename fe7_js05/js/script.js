$(function() {
  'use strict';

  $('.panel').hide();
  $('.panel1').addClass("active");
  $('div.page_content1').show();

  $('li').click (function() {
    var tab = this.className.substr(5, 1);
      if (!$(this).hasClass("disabled")){
        $('.panel').hide();
        $('.panel1').removeClass("active");
        $('.panel2').removeClass("active");
        $('.panel3').removeClass("active");
        $('.panel4').removeClass("active");
        $(this).addClass("active");
        $('div.page_content' + tab).show();
      }
  });

  $('.form-control').focus(function() {
      $(this).next("div").removeClass("hide");
  });

  $('.form-control').blur(function() {
      $(this).next("div").addClass("hide");
  });

  $('.btn').click (function(){
    var form_name = $(firstname).val();
    if (form_name === 'Вася') {
      $('.panel4').toggleClass("disabled");
  }
});



console.log('Загружено');
});
