// Dependencies
var burger = require("../models/burger");

module.exports = function(app) {
    // Routes
    app.get("/", function(req, res) {
        burger.selectAllBurgers(function(data) {
            console.log(data);
            res.render("index", { burgers: data });
        });

    });

    app.post("/", function(req, res) {
        console.log(req.body);
        burger.insertOne(req.body, function(data) {
            console.log(data);
        });

    });

    // app.post("/", function(req, res) {
    //     burger.updateOne(function(data) {
    //         console.log(data);
    //         res.render("index", { burgers: data });
    //     });

    // });


}
