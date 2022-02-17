const dbCon = require("../../config/db.js")
module.exports = getByOrderDetail_id = (req, res) => {
    console.log("order_detail_foodexpress=" , req.params.id)
    console.log(typeof req.params.id)
    let order_id = req.params.id;
    
    if (!order_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  order_detail_foodexpress getByOrderId"
        });
    } else {
        dbCon.query("SELECT * FROM order_detail_foodexpress WHERE order_id = ?", order_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "order_detail_foodexpress not found";
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