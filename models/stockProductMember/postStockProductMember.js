const connection = require("../../config/db.js");
module.exports = postStockProductMember = (req, res) => {
  const classifiedsadd = {
    id_stock_product_member_id: req.body.id_stock_product_member_id,
    stock_product_member_userid: req.body.stock_product_member_userid,
    stock_product_id: req.body.stock_product_id,
    stock_product_name: req.body.stock_product_name,
    stock_product_amount: req.body.stock_product_amount,
  };
  console.log("postStockProductMember = ", req.body);
  const sql = "INSERT INTO stock_product_member SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
