const dbCon = require("../../config/db.js")
module.exports = getByIdProduct = (req, res) => {
    let productid = req.params.id;
    if (!productid) {
        return res.status(400).send({
            error: true,
            message: "Please provide product productid"
        });
    } else {
        dbCon.query("SELECT * FROM product WHERE productid = ?", productid, (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "product not found";
            } else {
                message = "Successfully retrieved product data";
            }

            return res.send({
                error: false,
                data: results[0],
                message: message
            })
        })
    }
}