var $main = $('#main'),
$articles = $main.children('article'), timeout;
$articles.on('mouseenter', function (event) {
  var $article = $(this);
  clearTimeout (timeout);
  timeout = setTimeout(function() {

      if ($article.hasClass('active')) return false;

      $articles.not ($article.removeClass('blur').addClass('active'))
        .removeClass('active')
        .addClass('blur');

      }, 65);


});

$main.on('mouseleave', function(event) {
    clearTimeout(timeout);
    $articles.removeClass('active blur');

});
/*portions of this code were modified and adapted from*/
/*http://tympanus.net/codrops/2011/12/14/item-blur-effect-with-css3-and-jquery/*/

