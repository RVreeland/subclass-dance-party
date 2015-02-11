var Psyduck = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sideways');
};

Psyduck.prototype = Object.create(Dancer.prototype);

Psyduck.prototype.constructor = Psyduck;

Psyduck.prototype.step = function(){
   Dancer.prototype.step.call(this);
  };

