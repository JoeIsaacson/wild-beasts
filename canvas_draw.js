$(document).ready(function () {
     $('#musicVideo').hide(0);
});

$(window).bind("load", function() {
     showPizza();
     //setTimeout(function() { showPizza()}, 1000);
     setTimeout(function() { hidePizza()}, 4000);
});
      

function showPizza(){
     $('#musicVideo').show(0);
     $(".screen").fadeOut(800);
     console.log('locked and loaded')

};

function hidePizza(){

     var speed = 105;

     $(".quad-1 .one").hide(0);
     console.log('animation has begun!');
     $(".quad-1 .two").delay(speed*1).hide(0);
     $(".quad-1 .three").delay(speed*2).hide(0);
     $(".quad-1 .four").delay(speed*3).hide(0);

     /*QUAD 2 ANIMATIONS*/

     $(".quad-2 .one").delay(speed*4).hide(0);
     $(".quad-2 .two").delay(speed*5).hide(0);
     $(".quad-2 .three").delay(speed*6).hide(0);
     $(".quad-2 .four").delay(speed*7).hide(0);

     /*QUAD 3 ANIMATIONS*/

     $(".quad-3 .one").delay(speed*8).hide(0);
     $(".quad-3 .two").delay(speed*9).hide(0);
     $(".quad-3 .three").delay(speed*10).hide(0);
     $(".quad-3 .four").delay(speed*11).hide(0);

     /*QUAD 4 ANIMATIONS*/

     $(".quad-4 .one").delay(speed*12).hide(0);
     $(".quad-4 .two").delay(speed*13).hide(0);
     $(".quad-4 .three").delay(speed*14).hide(0);
     $(".quad-4 .four").delay(speed*15).hide(0);

     $(".intro-text, .quad-1, .quad-2, .quad-3, .quad-4").delay(speed*15).fadeOut(1000);
};

