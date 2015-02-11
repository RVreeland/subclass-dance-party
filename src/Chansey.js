var Chansey = function (top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  this.$node.removeClass('dancer');
  this.$node.removeClass('psyduck');
  this.$node.addClass('chansey jump');
  this.$node.attr('src','dancers/chansey.gif');
  this.$node.attr('height','25%');
}

Chansey.prototype = Object.create(Dancer.prototype);
Chansey.prototype.constructor = Chansey;

Chansey.prototype.step = function(){
   Dancer.prototype.step.call(this);
  };
