
//bussiness logic//
var square1;
var square2;
var square3;
var square4;
var compare = function() {
  if ((square1 === 1) && (square2 === 1)) {
    $("img#bear1, img#bear2").fadeOut();
  } else if((square3===1) && (square4===1)) {
   $("img#duck1, img#duck2").fadeOut();
 }
};

//user interface//


$(document).ready(function() {
// var back1Tile = $("img#back1").val();
// var back3Tile = $("img#back3").val();

  $('img#back1').click(function() {
    $("img#back1").hide();
    $("img#bear1").show();
    square1 = 1;square3=0;square4=0;
    console.log(square1);
    compare();
   });

   $('img#back3').click(function() {
     $("img#back3").hide();
     $("img#bear2").show();
     square2 = 1;square3=0;square4=0;
     console.log(square2);
     compare();
    });

    $('img#back2').click(function() {
      $("img#back2").hide();
      $("img#duck1").show();
      square3 = 1;square1=0;square2=0;
      compare();
     });

     $('img#back4').click(function() {
       $("img#back4").hide();
       $("img#duck2").show();
       square4 = 1;square1=0;square2=0;
       compare();
      });

});
