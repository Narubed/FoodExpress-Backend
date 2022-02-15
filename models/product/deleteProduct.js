const dbCon = require("../../config/db.js")
module.exports = deleteProduct = (req, res) => {
    console.log("deleteProduct" , req.params.id)
    let productid = req.params.id
    if (!productid) {
        return res.status(400).send({
            error: true,
            message: "Please provide deleteProduct id"
        });
    } else {
        dbCon.query('DELETE FROM product WHERE productid = ?', [productid], (error, results, fields) => {
            // if (error) throw error;

            let message = "";
            if (results.affectedRows === 0) {
                message = "deleteProduct not found";
            } else {
                message = "deleteProduct successfully deleted";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}