const dbCon = require("../../config/db.js")
module.exports = getByCutArountID = (req, res) => {
    console.log("getByCutArountID=" , req.params.id)
    console.log(typeof req.params.id)
    let cut_arount_id = req.params.id;
    
    if (!cut_arount_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  getByCutArountID getByOrderId"
        });
    } else {
        dbCon.query("SELECT * FROM order_detail_foodexpress WHERE cut_arount_id = ?", cut_arount_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_detail_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getByCutArountID not found";
            } else {
                message = "Successfully retrieved getByCutArountID data";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}