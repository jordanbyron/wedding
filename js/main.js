$(function(){
  $('#hero').css('height', $(window).height());
  $('#hero h1').css('opacity', 1);
  $('#hint').css('opacity', 1);
  
  $('[data-speed]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    });
  });
});