(function(){
  var isiPad = navigator.userAgent.match(/iPad/i) != null;
  
  $('#arch h1').css('opacity', 1);
  $('#hint').css('opacity', 1).click(function(e){
    $.scrollTo('#details', 2000);
    e.preventDefault();
  })

}())