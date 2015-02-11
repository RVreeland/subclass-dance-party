// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<img src="dancers/psyduck.gif" class="dancer">');
  this.$node.width('7.5%');
  this.$node.height('15%');
  this.step();
  this.setPosition(top, left);
  // use jQuery to create an HTML <span> tag
  this._timeBetweenSteps = timeBetweenSteps;
};


Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

