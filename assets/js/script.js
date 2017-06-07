$(document).ready(function () {
// NOTE: this code to create the sticky nav
  $('.js--section-features').waypoint(function (direction) {
    if (direction =="down") {
      $('nav').addClass('sticky-nav');
      $('nav').removeClass('fixed-nav');
      $('.up-arrow').css('display','block');
    }else {
      $('nav').removeClass('sticky-nav');
      $('nav').addClass('fixed-nav');
      $('.up-arrow').css('display','none');
    }
  }, {offset: '20%;'});

// NOTE: add scroll to the buttons
  $('.js--scroll-to-sites').click(function () {
    $('html ,body').animate({scrollTop: $('.js--section-sites').offset().top}, 1000);
  });

  $('.js--scroll-to-features').click(function () {
    $('html ,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

// NOTE: add scroll action to a tags
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// NOTE: add animation to sections

$('.js-wp-1').waypoint(function (direction) {
  $('.js-wp-1').addClass('animated fadeIn');
}, 
{
  offset: '70%;'
  });
$('.js-wp-2').waypoint(function (direction) {
  $('.js-wp-2').addClass('animated fadeInUp');
}, {
  offset: '70%;'
  });

// NOTE: mobile navigatiob button function
  $('.js-mobile-nav').click(function () {
    var nav = $('.js-main-nav');
    var icon = $('.js-mobile-nav i');
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }

  });
});
