
$(document).ready(function(){
  // init();
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

  $('#projects').hover(function(e){
    $("#projects-dropdown").css({ top:'5em' });
  })

  $('#projects-dropdown').mouseleave(function(e){
    $('#projects-dropdown').css({ top:'-11em'});
  })

  $(".other").hover(function(e){
    $('#projects-dropdown').css({ top:'-11em'});
  })

  $('#problem-solving').click(function(e){
    $('#media-display').show();
    $('#puzzle-canvas').show();
    init();
  })

  $('.close-img').click(function(e){
    $('.popup-media').hide();
    $(this).parent().hide();
  })
}); // close out script