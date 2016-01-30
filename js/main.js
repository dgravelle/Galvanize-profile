$(document).ready(function(){
    // button to trigger page slide
    var moreAbout = $('.more-about');

    // slide page to elements href location
    moreAbout.on('click', function(e) {
      e.preventDefault();

	     var $this = $(this)
       , scrollToSctn = $this.attr('href');

        $('html, body').animate({
            scrollTop: $(scrollToSctn).offset().top
        }, 1000);

    // close mobile nav menu if on a screen smaller than 768px
    var width = $(window).width();
    // console.log( width );
    if( width < 768 ) {
    	$(navMenu).slideToggle();
    	$(navIcon).toggleClass('fa-close');
    	$(navIcon).toggleClass('fa-bars');
    }
	});



});
