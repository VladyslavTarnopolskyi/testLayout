$(document).ready(function(){
  $('.tab button').click(function(){
    let tab_id = $(this).attr('data-tab');
    $('.tab button').removeClass('active');
    $('.tabcontent').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });

});