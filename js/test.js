$('.frame').css({
  overflow:"hidden"
});


$('.ui .pagination button').each(function(index){
  $(this).click(function(){
    $('.frame ul').animate({left:-200*index});
  });
});