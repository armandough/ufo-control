$(document).ready (() => {

//off
$('.off').click(() => {
    $.get("http://192.168.220.136/api?top_init=0&top_bg=000000&bottom_init=0&bottom_bg=000000", function(data, status){
      console.log(true);
    });
})

//green
$('.green').click(() => {
  $.get("http://192.168.220.136/api?bottom_init=1&bottom=0|15|00ff00&bottom_bg=004e00&bottom_morph=1|1&top_init=1&top=0|15|00ff00&top_bg=004e00&top_morph=1|1", function(data, status){
    console.log(true);
  });
})

//red
$('.red').click(() => {
  $.get("http://192.168.220.136/api?top_init=1&top=0|6|ff0000&top_bg=000000&top_whirl=220&bottom_init=1&bottom=6|9|ff0000&bottom_bg=000000&bottom_whirl=220", function(data, status){
    console.log(true);
  });
})

//party
$('.party').click(()=> {
  $.get("http://192.168.220.136/api?top_init=1&top=0|1|FFC000|1|3|FF0000|4|1|FFC000&top_bg=00A00a&top_whirl=220&bottom_init=1&bottom=0|15|FF0000&bottom_bg=0000FF&bottom_morph=500|6", function(data, status){
    console.log(true);
  });
})


});