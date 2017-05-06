// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require('ecpress-handlebars');
var logger = require('morgan');
var handlebarsHelpers = require('./app/views/helpers/global-helpers');

//Initialize & store new Express app
var app = express();
var port = process.env.PORT || 3000;

//Use logger to bridge database & app
app.use(logger('dev'));

//Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

//Configure method-override middleware
app.use(methodOverride("_method"));

//Configure express-handlebars view engine
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    helpers: handlebarsHelpers
}));

app.set("view engine", "handlebars");

//Static assets
app.use('/public', express.static('./app/public/'));

//Route controllers
require("./controllers/burgers_controller")(app);

//Set express port & start listening
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log('Express app listening on ${app.get('
        port ')}');
});
