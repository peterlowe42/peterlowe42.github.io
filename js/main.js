
$(document).ready(function(){
  // init();
  var _animations = ['bounceIn', 'flipInX', 'zoomIn', 'rubberBand']
  var _currentAnimation = 'bounceIn'

    
  $("#bounceIn").Morphext({
      animation: 'bounceIn',
      separator: ",",
      speed: 2000,
      complete: function () {
      }
  }); 

  $("#flipInX").Morphext({
      animation: 'flipInX',
      separator: ",",
      speed: 2000,
      complete: function () {
      }
  });  

  $("#zoomIn").Morphext({
      animation: 'zoomIn',
      separator: ",",
      speed: 2000,
      complete: function () {
      }
  });  

  $("#rubberBand").Morphext({
      animation: 'rubberBand',
      separator: ",",
      speed: 2000,
      complete: function () {
      }
  }); 

  $('.rotatingText').hide();
  $('#bounceIn').show();


  function cycleAnimation () {
    for(i=0; i < _animations.length;i++){
      console.log(_currentAnimation == _animations[i])
      if (_currentAnimation == _animations[i]){
        if(i == _animations.length -1){
          _currentAnimation = 'bounceIn'
          $('.rotatingText').hide();
          $('#bounceIn').show();
        }
        else {
          _currentAnimation = _animations[i + 1];
          $('.rotatingText').hide();
          $('#' + _animations[i + 1]).show();
          break;
        }
      }
    }
  }

  $('#projects').hover(function(e){
    $("#projects-dropdown").css({ top:'5em' });
  })

  $('#projects-dropdown').mouseleave(function(e){
    $('#projects-dropdown').css({ top:'-11em'});
  })

  $(".other").hover(function(e){
    $('#projects-dropdown').css({ top:'-11em'});
  })

  $('#skills').click(function(e){
    console.log(e);
    cycleAnimation();
  })

  $('#problem-solving').click(function(e){
    $('#media-display').show();
    $('#puzzle-canvas').show();
    init();
  })

  $('#sharks').click(function(e){
    $('#media-display').show();
    $('#shark-video').show();
  })

  $('#learning').click(function(e){
    $('#media-display').show();
    $('#johnny').show();
  })

  $('#cookies').click(function(e){
    $('#cookie-sound')[0].play();
  })

  $('#debugging').click(function(e){
    $('#media-display').show();
    $('#bug-video').show();
  })

  $('#accent').click(function(e) {
    $('#media-display').show();
  })

  $('.close-img').click(function(e){
    $('.media').hide();
    $(this).parent().hide();
  })
}); // close out script