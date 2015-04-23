var $container  = $('#ib-container'),
  $articles = $container.children('article'),
  timeout;

$articles.on( 'mouseenter', function( event ) {

  var $article  = $(this);
  clearTimeout( timeout );
  timeout = setTimeout( function() {

    if( $article.hasClass('active') ) return false;

    $articles.not($article).removeClass('active').addClass('blur');

    $article.removeClass('blur').addClass('active');

  }, 75 );

});

$container.on( 'mouseleave', function( event ) {

  clearTimeout( timeout );
  $articles.removeClass('active blur');

});
