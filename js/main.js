$(document).ready(function(){    

    var whereToBtn = $('.whereTo');

    // add class to trigger CSS3 transition
    whereToBtn.on('click',function(e) {
        console.log(e);
        e.preventDefault();
        var goingTo = this.getAttribute('href');

        $('.site-wrapper').addClass('transition');
         $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    console.log(event);
  });

        // $('.site-wrapper').animate(
        //     {left:'-3000px'}
        //     , 600
        //     , function() {
        //         // console.log($(this));
        //         window.location = goingTo;
        //     });

        // setTimeout(function(){
        //     window.location = goingTo;
        //     },300);

        });

});