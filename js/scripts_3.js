
var bearClick = 0;
var duckClick = 0;
var owlClick = 0;
var catClick = 0;
var totalClick = 0;
var finishIndex = 0;

function Compare3() {
  if (bearClick === 2) {
    document.images['first'].id = "disappear";
    document.images['fifth'].id = "disappear";
    bearClick = 0; totalClick = 0; finishIndex +=1;
  } else if (duckClick === 2) {
    document.images['second'].id = "disappear";
    document.images['sixth'].id = "disappear";
    duckClick = 0; totalClick = 0; finishIndex +=1;
  } else if (owlClick === 2) {
    document.images['third'].id = "disappear";
    document.images['seventh'].id = "disappear";
    owlClick = 0; totalClick = 0; finishIndex +=1;
  } else if (catClick === 2) {
    document.images['fourth'].id = "disappear";
    document.images['eighth'].id = "disappear";
    catClick = 0; totalClick = 0; finishIndex +=1;
  } else if (totalClick === 2) {
    $(":not([id*=disappear])").attr('src', 'img/back.gif');
    totalClick = 0; bearClick = 0; duckClick = 0; owlClick = 0; catClick = 0;
  }
  //winner index
  if (finishIndex === 4) {
    $("#winner").fadeIn();
  };
};

//jQuery and interface//
$(document).ready(function() {

  $('img#first').click(function() {
    document.images['first'].src ='img/bear.gif';
    //equivalent below
    // $("#first").attr('src', 'img/bear.gif');
    // document.getElementById("first").src = "img/bear.gif";
    bearClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#second').click(function() {
    document.images['second'].src ='img/duck.gif';
    duckClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#third').click(function() {
    document.images['third'].src ='img/owl.gif';
    owlClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#fourth').click(function() {
    document.images['fourth'].src ='img/cat.gif';
    catClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#fifth').click(function() {
    document.images['fifth'].src ='img/bear.gif';
    bearClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#sixth').click(function() {
    document.images['sixth'].src ='img/duck.gif';
    duckClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#seventh').click(function() {
    document.images['seventh'].src ='img/owl.gif';
    owlClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
  $('img#eighth').click(function() {
    document.images['eighth'].src ='img/cat.gif';
    catClick +=1; totalClick +=1;
    setTimeout(Compare3, 1000);
  });
});
