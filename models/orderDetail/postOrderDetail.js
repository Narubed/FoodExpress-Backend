const connection = require("../../config/db.js")
module.exports = postOrder = (req, res) => {
    
    const classifiedsadd = {
        order_id : req.body.order_id,
        order_member_id : req.body.order_member_id,
        order_product_id : req.body.order_product_id,
        order_product_price : req.body.order_product_price,
        order_product_amoumt : req.body.order_product_amoumt,
        order_product_name: req.body.order_product_name,
        order_product_type_name : req.body.order_product_type_name,
        // --------------
        order_product_address : req.body.order_product_address,
        order_product_subdistrict : req.body.order_product_subdistrict,
        order_product_district : req.body.order_product_district,
        order_product_province : req.body.order_product_province,
        order_product_level : req.body.order_product_level,
        // ------------------
        order_product_currency: req.body.order_product_currency,
        order_product_unitkg : req.body.order_product_unitkg
    };
    const sql = "INSERT INTO order_detail_foodexpress SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
        res.json({ success: 1 })      
    });
}