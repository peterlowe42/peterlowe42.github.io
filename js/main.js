
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
    $("#projects-arrow").show();
    $("#projects-dropdown").slideDown();
  })

  $('#projects-dropdown').mouseleave(function(e){
    var hideArrow = function() {
      $('#projects-arrow').hide();
    }
    $('#projects-dropdown').slideUp('slow', hideArrow);
    
  })

  $(".other").hover(function(e){
    var hideArrow = function() {
      $('#projects-arrow').hide();
    }
    $('#projects-dropdown').slideUp('slow', hideArrow);  
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
    $('#gameCanvas').show();
    $('#gameCanvas').width(640);
    $("#gameCanvas").height(360);
    $("#gameInstructions").show();
    initGame();
    $('#media-display').show();
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