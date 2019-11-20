;(function ( $ ) {
  $.fn.subMenu = function(options) {

    let settings = $.extend({
      topPages: {
        name: ['About', 'Our partners', 'Careers', 'Coutact us'],
        imgUrl: ['img/header/menu_image.png','img/header/menu_image.png','img/header/menu_image.png','img/header/menu_image.png',]
      },
      otherPage: [
        ['Product','API and Datafeed','Platform','Mobile'],
        ['News & Analysis','Reports','Videos','Subscribe to N&A'],
        ['News & Analysis','Reports','Videos','Subscribe to N&A'],
        ['News & Analysis','Reports','Videos']
      ]
    }, options );
    let self = $(this);
    function init(){
      let tmp = '<div class="sub-menu"><div class="wrap-submenu"><ul class="top-page-list"> </ul><ul class="other-page-list"> </ul></div></div>';
      self.append(tmp);
      let top = self.find('.top-page-list');
      let other = self.find('.other-page-list');

      for (let i = 0; i < settings.topPages.name.length; i++) {
        top.append('<li><a href=""><div class="title-top-page">'+ settings.topPages.name[i] +'</div><img src="'+ settings.topPages.imgUrl[i] +'" alt=""></a></li>')
      }
      for (let row = 0; row < settings.otherPage.length; row++) {
        other.append('<li class="other-page-list-item"><ul class="page-list list'+ row +'"></ul></li>');
        let pageList = other.children('li').children('.list' + row +'');
        for (let col = 0; col < settings.otherPage[row].length; col++){
          pageList.append('<li><a href="#">' + settings.otherPage[row][col] + '</a></li>');
        }
      }
    }
    init();
  }
}( jQuery ));