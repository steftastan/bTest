// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var port = 4000;

/* views as directory for all template files */
app.set('views', path.join(__dirname, 'app/templates'));

app.set('view engine', 'jade');

/* instruct express to server up static assets */
app.use(express.static('dist'));

/* Set routes */
app.get('/', function(req, res) {
  res.render('index');
});

/* Set server port */
app.listen(port);
console.log("Server is running at => http://localhost:" + port + "/\nYou may go there on via your browser, or CTRL + C to shut the server down.");
