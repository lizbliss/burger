//Dependencies
var connection = require("./connection");

var orm = {
    selectAll: function(tableName, callBack) {
        var queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function(err, data) {
            if (err) {
                console.log("error:" + err.stack);
            }
            callBack(data);
        })
    },
    insertOne: function(tableName, cols, values, callBack) {
        var queryString = "INSERT INTO " + tableName + "(?) VALUES (?)";
        connection.query(queryString, [cols], [values], function(err, data) {
            if (err) {
                console.log("error:" + err.stack);
            }
            res.redirect("/")
        })
    },


    //     updateOne: function() {
    //         var queryString = "SELECT * FROM " + tableName;
    // connection.query("UPDATE burgers SET `burger_name` = joe Where `id` = 1",
    //     function(err, result) {
    //         if (err) {

    //             console.log("error:" + err.stack);
    //         }
    //         return result
    //     })

    //     }
}







// connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burgers], function(err, result) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//     }
//     res.redirect("/");
// });




// connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [
//     req.body.burger_name, req.body.id
// ], function(err, result) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//     }
//     res.redirect("/");
// });


module.exports = orm;
