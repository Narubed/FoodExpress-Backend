const dbCon = require("../../config/db.js")
module.exports = getByOrderId = (req, res) => {
    console.log("order_foodexpress=" , req.params.id)
    let order_id = req.params.id;
    
    if (!order_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  order_foodexpress getByOrderId"
        });
    } else {
        dbCon.query("SELECT * FROM order_foodexpress WHERE order_id = ?", order_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "order_foodexpress not found";
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