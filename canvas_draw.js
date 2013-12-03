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
  $('.upper-poly').animate({
    marginTop : '-=1000px',
  }, { duration: 8000, queue: false });
  $('.lower-poly').animate({
    top : '+=1000px',
  }, { duration: 8000, queue: false });
}

$(window).on('scroll', function(){
  move_lower_triangles();
});




function showVideo(){
  console.log('buttonpressed');

  $(".upper-poly.one").animate({top : '-=1000px',}, { duration: 600});
  $(".upper-poly.two").animate({top : '-=1000px',}, { duration: 900 });
  $(".upper-poly.three").animate({top : '-=1000px',}, { duration: 1500 });
  $(".upper-poly.four").animate({top : '-=1000px',}, { duration: 2400 });
  $(".upper-poly.five").animate({top : '-=1000px',}, { duration: 3600 });

  $(".lower-poly.seven").animate({top : '+=1000px',}, { duration: 3600 });
  $(".lower-poly.eight").animate({top : '+=1000px',}, { duration: 2400 });
  $(".lower-poly.nine").animate({top : '+=1000px',}, { duration: 1500 });
  $(".lower-poly.ten").animate({top : '+=1000px',}, { duration: 900 });
  $(".lower-poly.eleven").animate({top : '+=1000px',}, { duration: 600 });
  $(".lower-poly.twelve").animate({top : '+=1000px',}, { duration: 300 });

  $('#show-video').hide();
}



