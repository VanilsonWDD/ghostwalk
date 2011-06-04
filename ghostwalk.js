jQuery.fn.ghostwalk = function(options) {
  var defaults = {
    speed   : 300
  , timeout : 3000
  };
  var options = jQuery.extend(defaults,options);
  return this.each(function() {
    obj = jQuery(this);
    obj.hide().slideDown(options.speed);
    setTimeout(function() {
      obj.slideUp(options.speed,function() { obj.remove(); });
    },options.timeout);
  });
}
