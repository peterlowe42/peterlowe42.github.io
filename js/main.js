
$(document).ready(function(){
  // init();
  var _animations = ['bounceIn', 'flipInX', 'zoomIn', 'rubberBand']
  var _currentAnimation = 'bounceIn'

  var bugsrc = 'https://www.youtube.com/embed/5QmvEbphF8c'

  var sharksrc = "https://player.vimeo.com/video/172509085"

  var mathsrc = 'https://www.youtube.com/embed/SXx2VVSWDMo'

  var britishsrc = "https://www.youtube.com/embed/-c2QzuYldm4"
    
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
    $('#puzzle-canvas').show();
    $('#media-display').show();
    init();
  })

  $('#sharks').click(function(e){
    $('#vidframe').attr('src', sharksrc)
    $('#video').show();
    $('#media-display').show();
  })

  $('#learning').click(function(e){
    $('#johnny').show();
    $('#media-display').show();
  })

  $('#math').click(function(e){
    $('#vidframe').attr('src', mathsrc)
    $('#video').show();
    $('#media-display').show();
  })

  $('#cookies').click(function(e){
    $('#cookie-sound')[0].play();
    $('#cookiemonster').slideDown("slow");
    function shakeNfade() {
        var div = document.getElementById('cookiemonster');
        var interval = 70;
        var distance = 10;
        var times = 10;

        $(div).css('position', 'absolute');

        for (var iter = 0; iter < (times + 1) ; iter++) {
            $(div).animate({
                left: ((iter % 2 == 0 ? distance : distance * -1))
            }, interval);
        }                                                                                                          
        $(div).animate({ left: 0 }, interval);
        $(div).fadeOut(1500);    
    }
    setTimeout(shakeNfade, 1400);
  })

  $('#debugging').click(function(e){
    $('#vidframe').attr('src', bugsrc);
    $('#video').show();
    $('#media-display').show();
  })

  $('#accent').click(function(e) {
    $('#vidframe').attr('src', britishsrc);
    $('#video').show();
    $('#media-display').show();
  })

  $('.close-img').click(function(e){
    $('.media').hide();
    $('#vidframe').attr('src', '')
    $(this).parent().hide();
  })
}); // close out script