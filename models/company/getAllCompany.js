const dbCon = require("../../config/db.js")
module.exports = getAllCompany  = async (req, res) => {
      dbCon.query('SELECT * FROM company', (error, results, fields) => {
        if (error)
        console.log("get All getAllCompany = ");
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "getAllCompany table is empty";
        } else {
            message = "Successfully retrieved all getAllCompany";
        }
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

