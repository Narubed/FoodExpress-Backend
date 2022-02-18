const dbCon = require("../../config/db.js")
module.exports = getStockProductMemberByUserID = (req, res) => {
    let stock_product_member_userid = req.params.id;
    
    if (!stock_product_member_userid) {
        return res.status(400).send({
            error: true,
            message: "Please provide  getStockProductMemberByUserID "
        });
    } else {
        dbCon.query("SELECT * FROM stock_product_member WHERE stock_product_member_userid = ?", stock_product_member_userid, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getStockProductMemberByUserID not found";
            } else {
                message = "Successfully retrieved getStockProductMemberByUserID data";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}