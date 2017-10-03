$(document).ready(function() {
  var nb = $(".nav-bar");

  $(window).scroll(function(){
    if( $(this).scrollTop() > 570 ) {
      nb.addClass(".nav-bar-scrolled");
    }
    else {
      nb.removeClass(".nav-bar-scrolled");
    }
  });
});
