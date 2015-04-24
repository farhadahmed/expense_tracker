var $main = $('#main'),
$articles = $main.children('article'), timeout;
$articles.on('mouseenter', function (event) {
  var $article = $(this);
  clearTimeout (timeout);
  timeout = setTimeout(function() {

      if ($article.hasClass('active')) return false;

      $article.not ($article.removeClass('blur').addClass('active'))
        .removeClass('active')
        .addClass('blur');

      }, 65);


});

$main.on('mouseleave', function(event) {
    clearTimeout(timeout);
    $articles.removeClass('active blur');

});

