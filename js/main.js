

    var mousewheelCounter = 0;
    
    $(window).bind('wheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            mousewheelCounter--;
            console.log('Scroll up' + mousewheelCounter);
            if(mousewheelCounter == 0) {
                $('.intro__circle--text').removeClass('transform--1');
            }
            if(mousewheelCounter == 1) {
                $('.intro__circle--text').removeClass('transform--2');
            }
            if(mousewheelCounter == 2) {
                $('.intro__circle--text').removeClass('transform--3');
            }
            if(mousewheelCounter == 3) {
                $('.intro__circle--text').removeClass('transform--4');
            }
            if(mousewheelCounter == 4) {
                $('.intro__circle--text').removeClass('transform--5');
            }
            if(mousewheelCounter == 5) {
                $('.intro__circle--text').removeClass('transform--6');
            }
            if(mousewheelCounter == 6) {
                $('.intro__circle--text').removeClass('transform--7');
            }
            if(mousewheelCounter == 7) {
                $('.intro__circle--text').removeClass('transform--8');
            }
            if(mousewheelCounter == 8) {
                $('#intro').removeClass('scale--5').addClass('scale--2');
                setTimeout(function(){
                    $('#intro').fadeIn().removeClass('scale--2').addClass('scale--1');
                },300)
                setTimeout(function(){
                    $('#cards--1').fadeOut();
                },500)       
             }
             if(mousewheelCounter == 9) {
                $('.intro__circle--text').removeClass('transform--8');
            }
            if(mousewheelCounter == 13) {
                $('#scale-1').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8').addClass('scale--0');
            }
            if(mousewheelCounter == 16) {
                $('#scale-1').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-2');
            }
            if(mousewheelCounter == 19) {
                $('#scale-1').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-4');
            }
            if(mousewheelCounter == 22) {
                $('#scale-1').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-6');
            }
            if(mousewheelCounter == 25) {
                $('#scale-1').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-8');
            }
     
            if(mousewheelCounter == 27) {
                $('#overlay-1, #fade-text-1').removeClass('opacity--1');
            }
            if(mousewheelCounter === 30) {
                $('#cards--1').removeClass('scale--2').addClass('scale--1');
                setTimeout(function(){
                    $('#cards--1').fadeIn();
                },500)
                setTimeout(function(){
                    $('#cards--2').fadeOut();
                },500)
            }
    
            if(mousewheelCounter == 33) {
                $('#scale-2').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8').addClass('scale--0');
            }
            if(mousewheelCounter == 36) {
                $('#scale-2').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-2');
            }
            if(mousewheelCounter == 39) {
                $('#scale-2').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-4');
            }
            if(mousewheelCounter == 42) {
                $('#scale-2').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-6');
            }
            if(mousewheelCounter == 45) {
                $('#scale-2').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-8');
            }
            if(mousewheelCounter == 48) {
                $('#overlay-2, #fade-text-2').removeClass('opacity--1');
            }
            if(mousewheelCounter === 51) {
                $('#cards--2').removeClass('scale--2').addClass('scale--1');
                setTimeout(function(){
                    $('#cards--2').fadeIn();
                },500)
                setTimeout(function(){
                    $('#cards--3').fadeOut();
                },500)
            }


            if(mousewheelCounter == 54) {
                $('#scale-3').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8').addClass('scale--0');
            }
            if(mousewheelCounter == 57) {
                $('#scale-3').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-2');
            }
            if(mousewheelCounter == 60) {
                $('#scale-3').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-4');
            }
            if(mousewheelCounter == 63) {
                $('#scale-3').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-6');
            }
            if(mousewheelCounter == 66) {
                $('#scale-3').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-8');
            }
            if(mousewheelCounter == 69) {
                $('#overlay-3, #fade-text-3').removeClass('opacity--1');
            }
            if(mousewheelCounter === 72) {
                $('#cards--3').removeClass('scale--2').addClass('scale--1');
                setTimeout(function(){
                    $('#cards--3').fadeIn();
                },500)
                setTimeout(function(){
                    $('#cards--4').fadeOut();
                },500)
            }

            if(mousewheelCounter == 75) {
                $('#scale-4').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8').addClass('scale--0');
            }
            if(mousewheelCounter == 78) {
                $('#scale-4').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-2');
            }
            if(mousewheelCounter == 81) {
                $('#scale-4').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-4');
            }
            if(mousewheelCounter == 84) {
                $('#scale-4').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-6');
            }
            if(mousewheelCounter == 87) {
                $('#scale-4').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-8');
            }
            if(mousewheelCounter == 90) {
                $('#overlay-4, #fade-text-4').removeClass('opacity--1');
            }
            if(mousewheelCounter === 93) {
                $('#cards--4').removeClass('scale--2').addClass('scale--1');
                setTimeout(function(){
                    $('#cards--4').fadeIn();
                },500)
                setTimeout(function(){
                    $('#cards--5').fadeOut();
                },500)
            }

        

            if(mousewheelCounter == 97) {
                $('#scale-5').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8').addClass('scale--0');
            }
            if(mousewheelCounter == 100) {
                $('#scale-5').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-2');
            }
            if(mousewheelCounter == 103) {
                $('#scale-5').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-4');
            }
            if(mousewheelCounter == 106) {
                $('#scale-5').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-6');
            }1
            if(mousewheelCounter == 109) {
                $('#scale-5').removeClass('scale--0-2 scale--0-4 scale--0-6 scale--0-8 scale--0 scale--1').addClass('scale--0-8');
            }
            if(mousewheelCounter == 112) {
                $('#overlay-5, #fade-text-5').removeClass('opacity--1');
            }
            if(mousewheelCounter === 115) {
                $('#cards--5').removeClass('scale--2').addClass('scale--1');
                setTimeout(function(){
                    $('#cards--5').fadeIn();
                },500)
                // setTimeout(function(){
                //     $('#cards--6').fadeOut();
                // },500)
            }
        }
    
        else {
            console.log('Scroll down');
            mousewheelCounter++;
    
            if(mousewheelCounter == 1) {
                $('.intro__circle--text').addClass('transform--1');
            }
            if(mousewheelCounter == 2) {
                $('.intro__circle--text').addClass('transform--2');
            }
            if(mousewheelCounter == 3) {
                $('.intro__circle--text').addClass('transform--3');
            }
            if(mousewheelCounter == 4) {
                $('.intro__circle--text').addClass('transform--4');
            }
            if(mousewheelCounter == 5) {
                $('.intro__circle--text').addClass('transform--5');
            }
            if(mousewheelCounter == 6) {
                $('.intro__circle--text').addClass('transform--6');
            }
            if(mousewheelCounter == 7) {
                $('.intro__circle--text').addClass('transform--7');
            }
            if(mousewheelCounter == 8) {
                $('.intro__circle--text').addClass('transform--8');
            }
            if(mousewheelCounter === 9) {
                $('#intro').addClass('scale--2').delay('300').fadeOut();
               
                setTimeout(function(){
                    $('#cards--1').fadeIn();
                },500)
              
            }
            if(mousewheelCounter == 13) {
                $('#scale-1').addClass('scale--0-2');
            }
            if(mousewheelCounter == 16) {
                $('#scale-1').addClass('scale--0-4');
            }
            if(mousewheelCounter == 19) {
                $('#scale-1').addClass('scale--0-6');
            }
            if(mousewheelCounter == 21) {
                $('#scale-1').addClass('scale--0-8');
            }
            if(mousewheelCounter == 24) {
                $('#scale-1').addClass('scale--1');
            }
            if(mousewheelCounter == 27) {
                $('#overlay-1, #fade-text-1').addClass('opacity--1');
            }
            if(mousewheelCounter === 30) {
                $('#cards--1').addClass('scale--2');
                setTimeout(function(){
                    $('#cards--1').fadeOut();
                },500)
                setTimeout(function(){
                    $('#cards--2').fadeIn();
                },500)
                return false;
            }
    
            if(mousewheelCounter == 33) {
                $('#scale-2').addClass('scale--0-2');
            }
            if(mousewheelCounter == 36) {
                $('#scale-2').addClass('scale--0-4');
            }
            if(mousewheelCounter == 39) {
                $('#scale-2').addClass('scale--0-6');
            }
            if(mousewheelCounter == 42) {
                $('#scale-2').addClass('scale--0-8');
            }
            if(mousewheelCounter == 45) {
                $('#scale-2').addClass('scale--1');
            }
            if(mousewheelCounter == 48) {
                $('#overlay-2, #fade-text-2').addClass('opacity--1');
            }
            if(mousewheelCounter === 51) {
                $('#cards--2').addClass('scale--2');
                setTimeout(function(){
                    $('#cards--2').fadeOut();
                },500)
                setTimeout(function(){
                    $('#cards--3').fadeIn();
                },500)
            }
    
            if(mousewheelCounter == 54) {
                $('#scale-3').addClass('scale--0-2');
            }
            if(mousewheelCounter == 57) {
                $('#scale-3').addClass('scale--0-4');
            }
            if(mousewheelCounter == 60) {
                $('#scale-3').addClass('scale--0-6');
            }
            if(mousewheelCounter == 63) {
                $('#scale-3').addClass('scale--0-8');
            }
            if(mousewheelCounter == 66) {
                $('#scale-3').addClass('scale--1');
            }
            if(mousewheelCounter == 69) {
                $('#overlay-3, #fade-text-3').addClass('opacity--1');
            }
            if(mousewheelCounter === 72) {
                $('#cards--3').addClass('scale--2');
                setTimeout(function(){
                    $('#cards--3').fadeOut();
                },500)
                setTimeout(function(){
                    $('#cards--4').fadeIn();
                },500)
            }
    
            if(mousewheelCounter == 75) {
                $('#scale-4').addClass('scale--0-2');
            }
            if(mousewheelCounter == 78) {
                $('#scale-4').addClass('scale--0-4');
            }
            if(mousewheelCounter == 81) {
                $('#scale-4').addClass('scale--0-6');
            }
            if(mousewheelCounter == 84) {
                $('#scale-4').addClass('scale--0-8');
            }
            if(mousewheelCounter == 87) {
                $('#scale-4').addClass('scale--1');
            }
            if(mousewheelCounter == 90) {
                $('#overlay-4, #fade-text-4').addClass('opacity--1');
            }
            if(mousewheelCounter === 93) {
                $('#cards--4').addClass('scale--2');
                setTimeout(function(){
                    $('#cards--4').fadeOut();
                },500)
                setTimeout(function(){
                    $('#cards--5').fadeIn();
                },500)
            }
    
            if(mousewheelCounter == 97) {
                $('#scale-5').addClass('scale--0-2');
            }
            if(mousewheelCounter == 100) {
                $('#scale-5').addClass('scale--0-4');
            }
            if(mousewheelCounter == 103) {
                $('#scale-5').addClass('scale--0-6');
            }
            if(mousewheelCounter == 106) {
                $('#scale-5').addClass('scale--0-8');
            }
            if(mousewheelCounter == 109) {
                $('#scale-5').addClass('scale--1');
            }
            if(mousewheelCounter == 112) {
                $('#overlay-5, #fade-text-5').addClass('opacity--1');
            }
            if(mousewheelCounter === 115) {
                $('#cards--5').addClass('scale--2');
                setTimeout(function(){
                    $('#cards--5').fadeOut();
                },500)
                // setTimeout(function(){
                //     $('#cards--6').fadeIn();
                // },500)
            }
    
    
        }
    });
    
    
    try {
            Typekit.load({
              active: renderDemo
            })
          } catch (e) {
            // Error loading fonts
          }
    
          function renderDemo() {
            /**
             * Title
             */
    
        
            /**
             * Auto Radius
             */
            new CircleType(document.getElementById('text1'));
    
           
          }
    
