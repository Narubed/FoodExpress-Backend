const dbCon = require("../../config/db.js")
module.exports = deleteProductType = (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "Please provide deleteProductType id"
        });
    } else {
        dbCon.query('DELETE FROM producttype WHERE id = ?', [id], (error, results, fields) => {
            // if (error) throw error;

            let message = "";
            if (results.affectedRows === 0) {
                message = "deleteProductType not found";
            } else {
                message = "deleteProductType successfully deleted";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}