const connection = require("../../config/db.js")
module.exports = postWallet = (req, res) => {
    console.log(req.body)
    const classifiedsadd = {
        wallet_member_id : req.body.wallet_member_id,
        wallet_date : req.body.wallet_date,
        wallet_total : req.body.wallet_total,
        wallet_status : req.body.wallet_status,
    };
    const sql = "INSERT INTO wallet_express SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
        res.json({ success: 1 })      
    });
}