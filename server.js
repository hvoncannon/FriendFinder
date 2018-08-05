var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
  console.log("App listening on " + PORT);
});