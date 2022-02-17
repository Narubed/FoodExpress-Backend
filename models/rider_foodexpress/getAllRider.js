const dbCon = require("../../config/db.js")
module.exports = getAllRider  = async (req, res) => {
      dbCon.query('SELECT * FROM rider_foodexpress', (error, results, fields) => {
        // if (error)
            // throw error;
        console.log("get All rider_foodexpress" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "rider_foodexpress table is empty";
        } else {
            message = "Successfully retrieved all rider_foodexpress";
        }

        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

