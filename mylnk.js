function play_se(){
      var warning = new Audio('error2.mp3');
      warning.play();
      navigator.vibrate([200, 100, 200, 100, 200, 100, 200])
}



$(function(){
  $('#test').click(play_se);

$('.modal').modal();
$('#alert').modal('open');





var time = 200;
setInterval(function(){
  time--;
$('#timer').text(time);
}, 1000)

});
