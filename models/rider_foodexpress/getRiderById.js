const dbCon = require("../../config/db.js")
module.exports = getRiderById = (req, res) => {
    console.log("getRiderById=" , req.params.id)
    let rider_id = req.params.id;
    
    if (!rider_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  getRiderById "
        });
    } else {
        dbCon.query("SELECT * FROM rider_foodexpress WHERE rider_id = ?", rider_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getRiderById not found";
            } else {
                message = "Successfully retrieved getRiderById data";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}