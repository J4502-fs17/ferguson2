$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('.nav').slideToggle(500);
  });
  $(window).resize(function(){
    if ($(window).width()>500){
      $('.nav').removeAttr('style');
    }
  });
});
