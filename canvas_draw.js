$(window).on('scroll', function(){
  move_lower_triangles();
});


function move_lower_triangles(){
  var scrollPosition = window.scrollY;
}

$(document).scroll(function(){
      var scrollY = $(window).scrollTop();
      console.log('scroll height =', scrollY);
      $(".top-images .one").css('top', 'scrollY * 100');
      console.log('function ran bro');
});

/*function showVideo(){
  console.log('buttonpressed');
  $(".top-images .one").animate({top : '-=1000',}, 900, 'easeInBack');
  $(".top-images .two").animate({top : '-=1000px',}, 1000, 'easeInBack');
  $(".top-images .three").animate({top : '-=1000px',}, 1100, 'easeInBack');
  $(".top-images .four").animate({top : '-=1000px',}, 1200, 'easeInBack');
  $(".top-images .five").animate({top : '-=1000px',}, 1300, 'easeInBack');
  $(".top-images .six").animate({top : '-=1000px',}, 1400, 'easeInBack');

  $(".bottom-images .one").animate({top : '+=1000px',}, 1500, 'easeInBack');
  $(".bottom-images .two").animate({top : '+=1000px',}, 1400, 'easeInBack');
  $(".bottom-images .three").animate({top : '+=1000px',}, 1300, 'easeInBack');
  $(".bottom-images .four").animate({top : '+=1000px',}, 1200, 'easeInBack');
  $(".bottom-images .five").animate({top : '+=1000px',}, 1100, 'easeInBack');
  $(".bottom-images .six").animate({top : '+=1000px',}, 1000, 'easeInBack');
  $(".bottom-images .seven").animate({top : '+=1000px',}, 900, 'easeInBack');
  $(".bottom-images .eight").animate({top : '+=1000px',}, 800, 'easeInBack');

  //HIDE BUTTON AFTER FUNCTION
  $('#show-video').hide();
}*/

