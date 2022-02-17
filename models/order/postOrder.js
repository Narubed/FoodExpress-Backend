const connection = require("../../config/db.js")
module.exports = postOrder = (req, res) => {
    console.log(req.body)
    const classifiedsadd = {
        order_id : req.body.order_id,
        order_member_id : req.body.order_member_id,
        order_status : req.body.order_status,
        order_product_total : req.body.order_product_total,
    };
    const sql = "INSERT INTO order_foodexpress SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
        res.json({ success: 1 })      
    });
}