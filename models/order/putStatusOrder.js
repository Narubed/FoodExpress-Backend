const connection = require("../../config/db.js")
module.exports = putStatusOrder = (req, res) => {
    console.log(req.body)
    let order_id = req.body.order_id;
    let order_status = req.body.order_status;
    // validation
    if (!order_id || !order_status ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt putStatusOrder Sumone."
        });
    } else {
        connection.query('UPDATE order_foodexpress SET  order_status = ? WHERE order_id = ?', [ order_status, order_id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "putStatusOrder not found or data are same";
            } else {
                message = "putStatusOrder successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}