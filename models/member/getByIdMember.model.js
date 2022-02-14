const dbCon = require("../../config/db.js")
module.exports = getByIdMemmber = (req, res) => {
    let userId = req.params.id;
    console.log("userId=" , userId)
    if (!userId) {
        return res.status(400).send({
            error: true,
            message: "Please provide book id"
        });
    } else {
        dbCon.query("SELECT * FROM member WHERE userId = ?", userId, (error, results, fields) => {
            // if (error) throw error;
            console.log(results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = 1;
            } else {
                message = "Successfully retrieved book data";
            }

            return res.send({
                error: false,
                data: results[0],
                message: message
            })
        })
    }
}