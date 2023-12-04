//add active class based on url
jQuery(function($) {
  var path = window.location.href; 
 jQuery('a').each(function() {
    if (this.href === path) {
     jQuery(this).addClass('active');
    }
  });
});
//add active class based on url END


//===sticky HEADER START
jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() >= 1) {
     jQuery('header').addClass('fixed');
  }
  else {
     jQuery('header').removeClass('fixed');
  }
});
//===sticky HEADER END



// Menu Bar
jQuery('.menu09').click(function(){
  jQuery(this).toggleClass("menu_open");
});
// Menu Bar

// Mouse Cursor Move
var jQuerycircle = jQuery('.circle');
function moveCircle(e) {
	TweenLite.to(jQuerycircle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}
jQuery(window).on('mousemove', moveCircle);
// Mouse Cursor Move

// Slick _________________
// Slider JS
setTimeout(function(){
jQuery('.homescreen-slick').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,

});
}, 8000); 
// Slider JS END


// Logo Slider
jQuery('.logos-sldier').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {breakpoint: 862,
    settings: {slidesToShow: 2,}
    },]});
// Logo Slider End



// Share Post

var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, '%26');
function fbs_click() { window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
    
function tbs_click() { window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function lbs_click() { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
// Share Post End

// Slick End_________________
