const dbCon = require("../../config/db.js")
module.exports = deleteAdmin = (req, res) => {
    console.log("deleteAdmin" , req.params.id)
    let admin_auto_id = req.params.id
    if (!admin_auto_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide deleteAdmin id"
        });
    } else {
        dbCon.query('DELETE FROM admin_foodexpress WHERE admin_auto_id = ?', [admin_auto_id], (error, results, fields) => {
            // if (error) throw error;

            let message = "";
            if (results.affectedRows === 0) {
                message = "deleteAdmin not found";
            } else {
                message = "deleteAdmin successfully deleted";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}