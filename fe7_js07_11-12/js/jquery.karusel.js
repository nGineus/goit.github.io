(function($){
    $.fn.karuselfn = function(options){
    var defaults = {
        pixelsOffset: 125,
        visiblePart: 5 };

    settings = $.extend(defaults, options);
    // console.log('settings:', settings);

    var animationSpeed = 250;
    var padding = 126;
    var elementsList = this.find('.carousel-list');
    var leftUIEl = this.find('.carousel-arrow-left');
    var rightUIEl = this.find('.carousel-arrow-right');
    var elementsCount = this.find('ul li').length;
    var currentLeftValue = 0;

    var minimumOffset = - ((elementsCount - settings.visiblePart) * settings.pixelsOffset);
    var maximumOffset = 0;
    var karusel_width = padding + (settings.visiblePart * settings.pixelsOffset);
    var hider_width = (settings.visiblePart * settings.pixelsOffset) - 25;

    // console.log("minimumOffset: ", minimumOffset);
    // console.log("elementsCount: ", elementsCount);
    $(this).css("width", karusel_width);
    $(this).find(".carousel-hider").css("width", hider_width);
    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
            currentLeftValue += settings.pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, animationSpeed);
        }
    });
    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= settings.pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, animationSpeed);
        }
    });
    return this; // в итоге, метод вернет текущий объект jQuery обратно
  };
})(jQuery);
