$(document).ready(function(){
  init();
  $('.reason-text').click(function(e){
    $('.pop-up').hide();
    $('.reason-text').show();
  })

  $("#sharks").click(function(e){
    $('#shark-text').hide();
    $('#shark-video').show();
  });

  $('#choose-cookies').click(function(e){
    $("#choose-cookies").hide();
    $('#cookie-form-div').show();
  });

  $('#cookie-form').on('submit',function(e){
    e.preventDefault();
    var url = $(this).attr('action')
    var method = $(this).attr('method')
    var data = $(this).serialize();
    console.log(url);
    console.log(method);
    console.log(data);
    $.ajax({
      url: url,
      method: method,
      data: data
    }).done(function(response){
      console.log(response);
      $('#cookie-form').hide();
      $('#cookie-choice').text(response.cookie_preference);
      $("#cookie-sucess").show();
    })
  })

  $('#debugging').click(function(e){
    $('#debugging-text').hide();
    $('#debug-gif').show();
  })

  $('#problem-solving').click(function(e){
    console.log(e);
    $('#problem-solving').hide();
    $('#puzzle-canvas').show();
  })

   // cache the window object
   $window = $(window);
   $(".rotate").textrotator({
  animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 1500 // How many milliseconds until the next word show.
   });
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function
}); // close out script