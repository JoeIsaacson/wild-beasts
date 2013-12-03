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

  $(".upper-poly.one").animate({top : '-=1000px',}, 600, 'easeInBack');
  $(".upper-poly.two").animate({top : '-=1000px',}, 900, 'easeInBack');
  $(".upper-poly.three").animate({top : '-=1000px',}, 1500, 'easeInBack');
  $(".upper-poly.four").animate({top : '-=1000px',}, 2400, 'easeInBack');
  $(".upper-poly.five").animate({top : '-=1000px',}, 3600, 'easeInBack');

  $(".lower-poly.seven").animate({top : '+=1000px',}, 3600, 'easeInBack');
  $(".lower-poly.eight").animate({top : '+=1000px',}, 2400, 'easeInBack');
  $(".lower-poly.nine").animate({top : '+=1000px',}, 1500, 'easeInBack');
  $(".lower-poly.ten").animate({top : '+=1000px',}, 900, 'easeInBack');
  $(".lower-poly.eleven").animate({top : '+=1000px',}, 600, 'easeInBack');
  $(".lower-poly.twelve").animate({top : '+=1000px',}, 300, 'easeInBack');

  $('#show-video').hide();
}



