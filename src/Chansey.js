var Chansey = function (top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('chansey jump');
  this.$node.attr('src','dancers/chansey.gif');
    this.$node.attr('height','25%');


}

Chansey.prototype = Object.create(Dancer.prototype);
Chansey.prototype.constructor = Chansey;

Chansey.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
   Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node;

  };
