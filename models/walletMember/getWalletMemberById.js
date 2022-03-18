const dbCon = require("../../config/db.js")
module.exports = getWalletMemberById = (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "Please provide getWalletById id"
        });
    } else {
        dbCon.query("SELECT * FROM wallet_member_express WHERE wallet_member_id_express = ?", id, (error, results, fields) => {
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