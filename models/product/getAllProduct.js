const dbCon = require("../../config/db.js")
module.exports = getMembers  = async (req, res) => {
      dbCon.query('SELECT * FROM product', (error, results, fields) => {
        // if (error)
        //     throw error;
        console.log("get All product" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "product table is empty";
        } else {
            message = "Successfully retrieved all product";
        }

        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

