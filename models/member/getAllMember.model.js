const dbCon = require("../../config/db.js")
module.exports = getMembers  = async (req, res) => {
      dbCon.query('SELECT * FROM member ORDER BY level DESC', (error, results, fields) => {
        // if (error)
            // throw error;
        // console.log("get All Member = " + results[0].userId);
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "Membere table is empty";
        } else {
            message = "Successfully retrieved all Membere";
        }
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

