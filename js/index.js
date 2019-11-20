$( document ).ready(function() {

  $( ".wrap-carousel" ).pitchCarousel();
  $( "#features" ).subMenu({
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
  });
  $( "#about" ).subMenu();
  $( "#pricing" ).subMenu();
  $( "#reviews" ).subMenu();
  $( "#contact" ).subMenu();

  $('.navigation .nav-item').hover(function () {
    $(this).children('.sub-menu').stop(false, true).fadeIn(300);
  }, function () {
    $(this).children('.sub-menu').stop(false, true).fadeOut(300);
  });

});