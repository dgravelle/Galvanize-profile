    window.onload = function() {
        var mainBlock = document.getElementById('mainHeader');

        console.log(mainBlock);
        var requestId;

        function animate(elem) {
            console.log('animating!');
            // console.log(elem);
            // get original position of elem
            // var elemRect = elem.getBoundingClientRect();

            var posTop = elem.style.top;
            // animate elem
            function frame() {

                var posTopNum = parseInt(posTop);
                // console.log(posTopNum);

                    if( parseInt(elem.style.top) < 0 ) {

                       elem.style.top = (parseInt(elem.style.top) + 8) + 'px';
                      //  console.log('updated: ', posTop);
                      //  console.log('e.style.top: ', elem.style.top);
                       requestId = window.requestAnimationFrame(frame);
                        // console.log(posTop);
                    } else {
                       window.cancelAnimationFrame(frame);
                    }
                }

            window.requestAnimationFrame(frame);
            console.log('frame requested');
        }
        animate(mainBlock);
    };
