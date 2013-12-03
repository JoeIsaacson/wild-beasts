$(window).on('scroll', function(){
  move_lower_triangles();
});


function move_lower_triangles(){
  console.log('hey', window.scrollY)
  var scrollPosition = window.scrollY;
  console.log('variable defined')
}

function showVideo(){
  console.log('buttonpressed');

  /*$(".top-images .one").slideUp({
    duration: 1000,
    easing: jswing
  });*/

  $(".top-images .one").animate({top : '-=1000px',}, 900, 'easeInBack');
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


  $('#show-video').hide();
}

