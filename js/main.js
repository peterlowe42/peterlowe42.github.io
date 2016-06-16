
$(document).ready(function(){
  $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "bounceIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 2000,
      complete: function () {
          // Called after the entrance animation is executed.
      }
  });

  $('.reason-text').click(function(e){
    $('.reveal').hide();
    $('.reason-text').show();
  })

  $("#sharks").click(function(e){
    $('#shark-text').hide();
    $('#shark-video').show();
  });

  $('#debugging').click(function(e){
    $('#debugging-text').hide();
    $('#debug-gif').show();
  })

  $('#problem-solving').click(function(e){
    $('#media-display').show();
    $('#puzzle-canvas').show();
  })

}); // close out script