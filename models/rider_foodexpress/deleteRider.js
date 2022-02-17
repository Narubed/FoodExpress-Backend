const dbCon = require("../../config/db.js")
module.exports = deleteRider = (req, res) => {
    console.log("deleteRider" , req.params.id)
    let rider_id = req.params.id
    if (!rider_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide deleteRider id"
        });
    } else {
        dbCon.query('DELETE FROM rider_foodexpress WHERE rider_id = ?', [rider_id], (error, results, fields) => {
            // if (error) throw error;

            let message = "";
            if (results.affectedRows === 0) {
                message = "deleteRider not found";
            } else {
                message = "deleteRider successfully deleted";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}