$(document).ready(function(){
  window.dancers = [];

//-------------------------------------------------------------
  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if (dancer.$node[0].classList.contains("dancer")){
      window.dancers.push(dancer);
    }
    $('body').append(dancer.$node);
  });

//------------------------------------------------------------

  $('.moveStuff').on('click', function(event){
    var x = 0;
    var y = 100;
    for (var i = 0; i<window.dancers.length; i++){
      if (x<document.body.clientWidth && y<document.body.clientHeight){
        window.dancers[i].setPosition(x,y);
        window.dancers[i].$node.addClass('rotate');
        y+=25;
        x+=50;
      }
    }
  });


  $('body').on('mouseover', '.pokemon',function (item){
    $(this).attr('src','dancers/pokeball.gif');
    $(this).removeClass('sideways')
    $(this).addClass('caught');
  });

  $('.throw').on('click', function(event){
    $('.pokemon').fadeOut();
  });



});


