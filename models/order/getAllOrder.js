const dbCon = require("../../config/db.js")
module.exports = getAllOrder  = async (req, res) => {
      dbCon.query('SELECT * FROM order_foodexpress', (error, results, fields) => {
        // if (error)
        //     throw error;
        console.log("get All order_foodexpress" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "order_foodexpress table is empty";
        } else {
            message = "Successfully retrieved all order_foodexpress";
        }
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}