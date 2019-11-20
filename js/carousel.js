;(function ( $ ) {
  $.fn.pitchCarousel = function(options) {
    let carousel,
      carouselItems,
      itemNumber,
      itemWidth,
      prev,
      next;
    let currentPosition = 0;
    let w;

    let settings = $.extend({
      count: 3
    }, options );
    $(window).resize(function(){
      w = $(window).width();
      if(w>1024){
        carousel[0].style.marginLeft = 0+'px';
        settings.count = 3;
      } else if (w<= 1024 && w> 480){
        settings.count = 2;
      } else if(w <= 480){
        settings.count = 1;
      }
      init();
    });

    let self = $(this);
    self.css({
      overflow: "hidden",
      position: "relative",
      top: "auto"
    });

    function init() {
      carousel = self.children(".carousel");
      carouselItems = carousel[0].children;
      itemNumber = carouselItems.length;
      itemWidth = carouselItems[0].offsetWidth;
      carousel[0].style.width = itemWidth * itemNumber +'px';
      prev = self.children(".prev-btn");
      next = self.children(".next-btn");

      prev[0].onclick = function () {
        currentPosition += itemWidth * settings.count;
        currentPosition = Math.min(currentPosition, 0);
        carousel[0].style.marginLeft = currentPosition + 'px';
      };
      next[0].onclick = function () {
        currentPosition -= itemWidth * settings.count;
        currentPosition = Math.max(currentPosition, -itemWidth * (carouselItems.length - settings.count));
        carousel[0].style.marginLeft = currentPosition + 'px';
      };
    }
    init();
  };

}( jQuery ));