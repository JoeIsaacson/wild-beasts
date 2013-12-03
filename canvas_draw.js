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

  $(".top-images .one").animate({marginTop : '-=1000px',}, { duration: 600});
  $(".top-images .two").animate({marginTop : '-=1000px',}, { duration: 900 });
  $(".top-images .three").animate({marginTop : '-=1000px',}, { duration: 1500 });
  $(".top-images .four").animate({marginTop : '-=1000px',}, { duration: 2400 });
  $(".top-images .five").animate({marginTop : '-=1000px',}, { duration: 3600 });
  $(".top-images .six").animate({marginTop : '-=1000px',}, { duration:  5100 });

  $(".bottom-images .one").animate({marginTop : '+=1000px',}, { duration: 1 });
  $(".bottom-images .two").animate({marginTop : '+=1000px',}, { duration: 9200 });
  $(".bottom-images .three").animate({marginTop : '+=1000px',}, { duration: 7800 });
  $(".bottom-images .four").animate({marginTop : '+=1000px',}, { duration: 4200 });
  $(".bottom-images .five").animate({marginTop : '+=1000px',}, { duration: 2600 });
  $(".bottom-images .six").animate({marginTop : '+=1000px',}, { duration: 1400 });
  $(".bottom-images .seven").animate({marginTop : '+=1000px',}, { duration: 800 });

  $('#show-video').hide();
}

