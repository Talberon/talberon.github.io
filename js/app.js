//AngularJS
var app = angular.module('PortfolioApp', []);

//Smooth-scrolling for anchor tags (be sure to exclude the carousel anchors from this)
$(function() {
  $('a[href*="#"]:not([href="#"], [href^="#carousel"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
