$(document).ready(function(){

});


$(window).bind("load", function() {
    //setTimeout(function() { screen()}, 3000);
    setTimeout(function() { play()}, 5000);
    setTimeout(function() { hide()}, 7800);
});
      
      /*function screen(){
          console.log('screen and text hidden');
      }*/


      function play(){
          var speed = 50;
          console.log('first local var recorded')

          $('.screen').css('z-index', '-100');
          $('.intro-text').css('z-index', '-50');

          console.log("screen pushed down")

          $(".quad-1, .quad-2, .quad-3, .quad-4").css('display', 'block');

          $(".quad-1 *, .quad-2 *, .quad-3 *, .quad-4 *").hide(0);
          console.log("quads hidden")

          $(".quad-4 .four").delay(speed*1).show(0);
          $(".quad-4 .three").delay(speed*2).show(0);
          $(".quad-4 .two").delay(speed*3).show(0);
          $(".quad-4 .one").delay(speed*4).show(0);

          $(".quad-3 .four").delay(speed*5).show(0);
          $(".quad-3 .three").delay(speed*6).show(0);
          $(".quad-3 .two").delay(speed*7).show(0);
          $(".quad-3 .one").delay(speed*8).show(0);

          $(".quad-2 .four").delay(speed*9).show(0);
          $(".quad-2 .three").delay(speed*10).show(0);
          $(".quad-2 .two").delay(speed*11).show(0);
          $(".quad-2 .one").delay(speed*12).show(0);

          $(".quad-1 .four").delay(speed*13).show(0);
          $(".quad-1 .three").delay(speed*14).show(0);
          $(".quad-1 .two").delay(speed*15).show(0);
          $(".quad-1 .one").delay(speed*16).show(0);

          $("#musicVideo").delay(speed*16).show(0);
          console.log("video shown")

      };


      function hide(){
          var speed = 50;
          console.log('second local var recorded')

          $(".quad-1 .one").delay(speed*1).hide(0);
          $(".quad-1 .two").delay(speed*2).hide(0);
          $(".quad-1 .three").delay(speed*3).hide(0);
          $(".quad-1 .four").delay(speed*4).hide(0);
          console.log("hidden 4")

          /*QUAD 2 ANIMATIONS*/

          $(".quad-2 .one").delay(speed*5).hide(0);
          console.log("hidden")

          $(".quad-2 .two").delay(speed*6).hide(0);
          console.log("hidden 2")

          $(".quad-2 .three").delay(speed*7).hide(0);
          console.log("hidden 3")

          $(".quad-2 .four").delay(speed*8).hide(0);
          console.log("hidden 4")

          /*QUAD 3 ANIMATIONS*/

          $(".quad-3 .one").delay(speed*9).hide(0);
          console.log("hidden")

          $(".quad-3 .two").delay(speed*10).hide(0);
          console.log("hidden 2")

          $(".quad-3 .three").delay(speed*11).hide(0);
          console.log("hidden 3")

          $(".quad-3 .four").delay(speed*12).hide(0);
          console.log("hidden 4")

          /*QUAD 4 ANIMATIONS*/

          $(".quad-4 .one").delay(speed*13).hide(0);
          console.log("hidden")

          $(".quad-4 .two").delay(speed*14).hide(0);
          console.log("hidden 2")

          $(".quad-4 .three").delay(speed*15).hide(0);
          console.log("hidden 3")

          $(".quad-4 .four").delay(speed*16).hide(0);
          console.log("hidden 4")

          $(".quad-1, .quad-2, .quad-3, .quad-4").delay(speed*17).hide(0);
          console.log("quads hidden")

          $(".quad-1 .one").delay(speed*1).hide(0);
          console.log("hidden")

          $(".quad-1 .two").delay(speed*2).hide(0);
          console.log("hidden 2")

          $(".quad-1 .three").delay(speed*3).hide(0);
          console.log("hidden 3")

          $(".quad-1 .four").delay(speed*4).hide(0);
          console.log("hidden 4")

          /*QUAD 2 ANIMATIONS*/

          $(".quad-2 .one").delay(speed*5).hide(0);
          console.log("hidden")

          $(".quad-2 .two").delay(speed*6).hide(0);
          console.log("hidden 2")

          $(".quad-2 .three").delay(speed*7).hide(0);
          console.log("hidden 3")

          $(".quad-2 .four").delay(speed*8).hide(0);
          console.log("hidden 4")

          /*QUAD 3 ANIMATIONS*/

          $(".quad-3 .one").delay(speed*9).hide(0);
          console.log("hidden")

          $(".quad-3 .two").delay(speed*10).hide(0);
          console.log("hidden 2")

          $(".quad-3 .three").delay(speed*11).hide(0);
          console.log("hidden 3")

          $(".quad-3 .four").delay(speed*12).hide(0);
          console.log("hidden 4")

          /*QUAD 4 ANIMATIONS*/

          $(".quad-4 .one").delay(speed*13).hide(0);
          console.log("hidden")

          $(".quad-4 .two").delay(speed*14).hide(0);
          console.log("hidden 2")

          $(".quad-4 .three").delay(speed*15).hide(0);
          console.log("hidden 3")

          $(".quad-4 .four").delay(speed*16).hide(0);
          console.log("hidden 4")

          $(".quad-1, .quad-2, .quad-3, .quad-4").delay(speed*17).hide(0);
          console.log("quads hidden")

          $(".intro-text").delay(speed*17).fadeIn(200);

    };

