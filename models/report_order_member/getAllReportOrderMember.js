const dbCon = require("../../config/db.js")
module.exports = getAllReportOrderMember  = async (req, res) => {
      dbCon.query('SELECT * FROM report_order_member', (error, results, fields) => {
        // if (error)
            // throw error;
        console.log("get All report_order_member" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "report_order_member table is empty";
        } else {
            message = "Successfully retrieved all report_order_member";
        }

        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

