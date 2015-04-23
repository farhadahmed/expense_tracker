var express = require('express'); //setting a dependency. Express.js lives somewhere, and it exports an object. If you want to load that file you do require('express')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public')); //static file is file that doesn't change.  __dirname is a node specific keyword.

app.get('/secret', function(request, response) { //All requests have a verb (such as get, which gets/requests pages. Post gives the pages).  Web apps receive a "request" and send a "response".
  response.send('You think you\'re sooooo clever!'); //send doesn't send immediately. The response gets built and the web server sends it back to the browser.
})


app.use(function(request, response, next) { //Function is a callback (it's not being run immediately; only when it can't find something).
  response.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(app.get('port'), function() { //Why is listen last? You want everything else to load first
  console.log('Node app is running at localhost:' + app.get('port'));

  //cntr + shift + r will reload without cache
});
