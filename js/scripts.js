!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document).ready(function(){
  $('#faq, .panel-group').css('background-color', '#232323');
  $('#faq .header, .learn-more').css('color', '#fff');

  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
      return false;
    });

  // Stellar
  $(window).stellar();

  // Tooltips
  $(function () {
    $('#tsunOne, #pond, #englishEL, #KSCPort, #tsunTwo, #mcPix, #burton, #goopy, #bikeberlin, #nsgv').tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Event
  $('#sbmt').on('click', function(){
    var comment = $('.message-box').val();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    $('#visible-comment').html("Thank you " + name + ", we have received your comment \"" + comment + "\"");
    $('.message-box, #phone, #email, #name, label').hide();
    console.log(name + ', ' + phone + ', ' + email + ', ' + message);

    return false;
  });
});