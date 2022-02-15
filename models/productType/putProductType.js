const connection = require("../../config/db.js")
module.exports = putProductType = (req, res) => {
    console.log(req.body)
    let id = req.body.id;
    let nameproducttype = req.body.nameproducttype;
    // validation
    if (!id || !nameproducttype ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt member Sumone."
        });
    } else {
        connection.query('UPDATE producttype SET  nameproducttype = ? WHERE id = ?', [ nameproducttype, id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "Book not found or data are same";
            } else {
                message = "Book successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}