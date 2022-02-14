const dbCon = require("../../config/db.js")
module.exports = getMemberByid = (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "Please provide Member id"
        });
    } else {
        dbCon.query("SELECT * FROM member WHERE id = ?", id, (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results === undefined || results.length == 0) {
                message = 1;
            } else {
                message = "Successfully retrieved id data";
            }

            return res.send({
                error: false,
                data: results[0],
                message: message
            })
        })
    }
}