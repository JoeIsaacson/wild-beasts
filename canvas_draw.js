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

  $(".upper-poly.one").animate({top : '-=1000px',}, 700, 'easeOutCirc');
  $(".upper-poly.two").animate({top : '-=1000px',}, 800, 'easeOutCirc');
  $(".upper-poly.three").animate({top : '-=1000px',}, 900, 'easeOutCirc');
  $(".upper-poly.four").animate({top : '-=1000px',}, 1000, 'easeOutCirc');
  $(".upper-poly.five").animate({top : '-=1000px',}, 1100, 'easeOutCirc');

  $(".lower-poly.seven").animate({top : '+=1000px',}, 3000, 'easeOutCirc');
  $(".lower-poly.eight").animate({top : '+=1000px',}, 5000, 'easeOutCirc');
  $(".lower-poly.nine").animate({top : '+=1000px',}, 6000, 'easeOutCirc');
  $(".lower-poly.ten").animate({top : '+=1000px',}, 8000, 'easeOutCirc');
  $(".lower-poly.eleven").animate({top : '+=1000px',}, 10000, 'easeOutCirc');
  $(".lower-poly.twelve").animate({top : '+=1000px',}, 12000, 'easeOutCirc');

  $('#show-video').hide();
}



