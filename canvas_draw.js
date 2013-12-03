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

  $(".top-images .one").animate({top : '-=1000px',}, 600, 'swing');
  $(".top-images .two").animate({top : '-=1000px',}, 900, 'swing');
  $(".top-images .three").animate({top : '-=1000px',}, 1500, 'swing');
  $(".top-images .four").animate({top : '-=1000px',}, 2400, 'swing');
  $(".top-images .five").animate({top : '-=1000px',}, 3600, 'swing');
  $(".top-images .six").animate({top : '-=1000px',}, 4500, 'easeOutSine');

  $(".bottom-images .one").animate({top : '+=1000px',}, 5600, 'linear');
  $(".bottom-images .two").animate({top : '+=1000px',}, 4500, 'linear');
  $(".bottom-images .three").animate({top : '+=1000px',}, 3600, 'linear');
  $(".bottom-images .four").animate({top : '+=1000px',}, 2400, 'linear');
  $(".bottom-images .five").animate({top : '+=1000px',}, 1500, 'linear');
  $(".bottom-images .six").animate({top : '+=1000px',}, 900, 'linear');
  $(".bottom-images .seven").animate({top : '+=1000px',}, 600, 'linear');

  $('#show-video').hide();
}

