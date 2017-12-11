$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function(){
    if ($(window).width()>500){
      $('nav ul').removeAttr('style');
    }
  });
});

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
