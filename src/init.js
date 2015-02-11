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

    if (dancer.$node[0].className === "dancer"){
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

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.dancer').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.dancer').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

  animateDiv();

  $('body').on('mouseover','.bird', function (item){
    var randomColor =
    $(this).css({backgroundColor: '#' + Math.random()});
  }).on('mouseleave','.bird', function (item){
     $(this).css({backgroundColor: 'blue'});
  });


});


