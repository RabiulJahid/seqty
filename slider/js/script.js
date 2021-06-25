$(document).ready(function(){

//SLIDER JQ

  $('.lazy').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    speed: 1000, 
    lazyLoad: "ondemand", 
    infinite: true,
    
   });



  //BUTTON
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



});