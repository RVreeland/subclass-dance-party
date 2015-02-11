$(document).ready(function(){
  window.dancers = [];

//-------------------------------------------------------------
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //

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

  $('body').on('mouseover','.bird', function (item){
    var randomColor =
    $(this).css({backgroundColor: '#' + Math.random()});
  }).on('mouseleave','.bird', function (item){
     $(this).css({backgroundColor: 'blue'});
  });

  $('body').on('mouseover', '.pokemon',function (item){
    // alert(1);
    $(this).attr('src','dancers/pokeball.gif');
    $(this).addClass('caught');
  });

  $('.throw').on('click', function(event){
    $('.pokemon').fadeOut();
  });

});


