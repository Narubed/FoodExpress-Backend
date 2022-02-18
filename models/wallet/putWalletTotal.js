const connection = require("../../config/db.js")
module.exports = putWalletTotal = (req, res) => {
    console.log(req.body)
    let wallet_id = req.body.wallet_id;
    let wallet_total = req.body.wallet_total;
    // validation
    if (!wallet_id || !wallet_total ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt wallet_express Sumone."
        });
    } else {
        connection.query('UPDATE wallet_express SET  wallet_total = ? WHERE wallet_id = ?', [ wallet_total, wallet_id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "wallet_express not found or data are same";
            } else {
                message = "wallet_express successfully updated";
            }
            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}