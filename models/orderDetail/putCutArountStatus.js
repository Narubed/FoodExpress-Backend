const connection = require("../../config/db.js")
module.exports = putCutArountStatus = (req, res) => {
    console.log(req.body)
    let order_detail_id = req.body.order_detail_id;
    let order_company_status = req.body.order_company_status;
    let cut_arount_id = req.body.cut_arount_id;
    // validation
    if (!order_detail_id || !order_company_status ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt putCutArountStatus Sumone."
        });
    } else {
        connection.query('UPDATE order_detail_foodexpress SET order_company_status = ?, cut_arount_id = ?  WHERE order_detail_id = ?', [ order_company_status,cut_arount_id, order_detail_id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "putCutArountStatus not found or data are same";
            } else {
                message = "putCutArountStatus successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}