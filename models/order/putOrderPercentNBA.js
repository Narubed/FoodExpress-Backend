const connection = require("../../config/db.js")
module.exports = putOrderPercentNBA = (req, res) => {
    console.log(req.body)
    let order_id = req.body.order_id;
    let order_percent_nba = req.body.order_percent_nba;
    // validation
    if (!order_id || !order_percent_nba ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt order_percent_nba Sumone."
        });
    } else {
        connection.query('UPDATE order_foodexpress SET  order_percent_nba = ? WHERE order_id = ?', [ order_percent_nba, order_id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "order_percent_nba not found or data are same";
            } else {
                message = "order_percent_nba successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}