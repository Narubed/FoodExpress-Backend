const dbCon = require("../../config/db.js")
module.exports = getAllCutArount  = async (req, res) => {
      dbCon.query('SELECT * FROM cut_around_order_foodexpress', (error, results, fields) => {
        if (error)
        console.log("get All getAllCutArount = ");
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "getAllCutArount table is empty";
        } else {
            message = "Successfully retrieved all getAllCutArount";
        }
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

