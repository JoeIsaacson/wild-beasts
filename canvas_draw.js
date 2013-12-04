
$(document).ready(function(){
      /*QUAD 1 ANIMATIONS*/

      $(".quad-1")
        .delay(2000)
        .queue( function(one){
        $(this).css('background', 'url("img/p-2.png") no-repeat scroll right bottom/cover transparent'); 
        one();
      });
      
      $(".quad-1")
        .delay(2000)
        .queue( function(one){
        $(this).css('background', 'url("img/p-3.png") no-repeat scroll right bottom/cover transparent'); 
        one();
      });

      $(".quad-1")
        .delay(2000)
        .queue( function(one){
        $(this).css('background', 'url("img/p-4.png") no-repeat scroll right bottom/cover transparent'); 
        one();
      });  

      $(".quad-1")
        .delay(2000)
        .queue( function(one){
        $(this).css('background', 'none'); 
        one();
      });     
});  

