(function($) {
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
