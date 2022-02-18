const dbCon = require("../../config/db.js")
module.exports = getAllWallet  = async (req, res) => {
      dbCon.query('SELECT * FROM wallet_express', (error, results, fields) => {
        // if (error)
        //     throw error;
       
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "getAllWallet table is empty";
        } else {
            message = "Successfully retrieved all getAllWallet";
        }
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

