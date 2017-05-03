// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller")(app);

app.listen(port);
