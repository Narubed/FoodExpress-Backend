const dbCon = require("../../config/db.js")
module.exports = getAllOrderExpressJoinRider  = async (req, res) => {
      dbCon.query('SELECT * FROM order_rider_express INNER JOIN rider_foodexpress ON order_rider_id = rider_foodexpress.rider_id', (error, results, fields) => {
        // if (error)
        //     throw error;
        console.log("get All order_rider_express" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "order_rider_express table is empty";
        } else {
            message = "Successfully retrieved all order_rider_express";
        }

        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

