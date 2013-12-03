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
  $('#show-video').hide();
}

