(function($) {
  $(function() {
    var rules = $('.rules li'),
        rulesTotal = rules.length;

    rules.each(function(index) {
      index++;
      var rule = $(this);
      rule.attr('id', index);
      rule.html('<span class="index">'+index+'</span><span class="content">'+rule.html()+'</span>');
      if (rulesTotal - index) rule.after('<hr>');
    });
  });

  $(window).on('load hashchange', function(){
    if (window.location.hash){
      $('.selected').removeClass('selected');
      var selections = (window.location.hash).replace(/^[^0-9]/g, '').split(',');
      selections = selections.filter(function(item){
        return /\d/g.test(item);
      });
      console.log(selections)
      selections.forEach(function(rule){
        $('.rules li#' + rule).addClass('selected');
      });
    }
  });
})(jQuery);
