const dbCon = require("../../config/db.js")
module.exports = getWalletById = (req, res) => {

    let id = req.params.id;
    console.log("getWalletById=" , id)
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "Please provide getWalletById id"
        });
    } else {
        dbCon.query("SELECT * FROM wallet_express WHERE wallet_id = ?", id, (error, results, fields) => {
            // if (error) throw error;
            console.log("producttype byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getWalletById not found";
            } else {
                message = "Successfully retrieved getWalletById data";
            }
            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}