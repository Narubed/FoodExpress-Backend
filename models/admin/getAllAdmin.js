const dbCon = require("../../config/db.js")
module.exports = getAllAdmin  = async (req, res) => {
      dbCon.query('SELECT * FROM admin_foodexpress', (error, results, fields) => {
        // if (error)
            // throw error;
        console.log("get All admin_foodexpress" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "admin_foodexpress table is empty";
        } else {
            message = "Successfully retrieved all admin_foodexpress";
        }

        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

