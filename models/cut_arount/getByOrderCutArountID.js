const dbCon = require("../../config/db.js")
module.exports = getByOrderCutArountID = (req, res) => {
    console.log("getByOrderCutArountID=" , req.params.id)
    console.log(typeof req.params.id)
    let cut_arount_id = req.params.id;
    
    if (!cut_arount_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  getByOrderCutArountID getByOrderId"
        });
    } else {
        dbCon.query("SELECT * FROM cut_around_order_foodexpress WHERE cut_arount_id = ?", cut_arount_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getByOrderCutArountID not found";
            } else {
                message = "Successfully retrieved getByOrderId data";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}