(function($) {
  $(function() {
    var ruleList = function() {
      $('.rules li').each(function(index) {
        index++;
        $(this).prepend('<span>'+index+'</span>');
      });
    };
    ruleList();
  });
})(jQuery);