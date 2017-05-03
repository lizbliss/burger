var orm = require("../config/orm");

var burger = {
    table: "burgers",

    selectAllBurgers: function(cb) {

        orm.selectAll(this.table, function(burgersData) {
            console.log(burgersData);
            cb(burgersData);
        })

    },

    insertOne: function(burger, cb) {
        orm.insertOne(this.table, ['burger_name', 'devoured'], [burger.burger, '0'], function(burgersData) {
            console.log(burgersData);
            cb(burgersData);
        })
    },







    // updateOne: function() {
    //     orm.updateOne(this.table, function(burgersData) {
    //         console.log(burgersData);
    //         cb(burgersData);
    //     })
    // }

}
module.exports = burger;
