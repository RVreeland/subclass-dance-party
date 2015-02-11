var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<img src="dancers/psyduck.gif" height="25%" class="dancer pokemon psyduck">');
  this.step();
  this.setPosition(top, left);
  this._timeBetweenSteps = timeBetweenSteps;
};


Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


