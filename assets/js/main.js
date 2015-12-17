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
  $(function() {
    $('.join-form').on('submit', function(e) {
        e.preventDefault();

        var email = $(this).find('input[name="email"]').val();
        if(!email) return;

        $.ajax({
            url: 'http://imsean.me/ptp-invite/',
            type: 'POST',
            data: {
                email: email
            },
            success: function(res) {
                if(res.error) {
                    alert(res.message);
                } else {
                    alert(res.message);
                }
            }
        });
    });
  });
})(jQuery);
