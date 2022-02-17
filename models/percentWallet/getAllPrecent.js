const dbCon = require("../../config/db.js")
module.exports = getAllPrecent  = async (req, res) => {
      dbCon.query('SELECT * FROM percent_wallet', (error, results, fields) => {
        // if (error)
        //     throw error;
        console.log("get All getAllPrecent" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "getAllPrecent table is empty";
        } else {
            message = "Successfully retrieved all getAllPrecent";
        }

        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

