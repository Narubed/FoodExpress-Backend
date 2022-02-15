const dbCon = require("../../config/db.js")
module.exports = getAllProductType  = async (req, res) => {
      dbCon.query('SELECT * FROM producttype', (error, results, fields) => {
        // if (error)
        //     throw error;
        // console.log("get All getAllProductType = " + results[0].userId);
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "getAllProductType table is empty";
        } else {
            message = "Successfully retrieved all getAllProductType";
        }
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

