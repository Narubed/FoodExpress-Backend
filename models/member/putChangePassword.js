const connection = require("../../config/db.js")
module.exports = putChangePassword = (req, res) => {
    console.log(req.body)
    let userId = req.body.userId;
    let password = req.body.password;
    // validation
    if (!userId || !password ) {
        return res.status(400).send({
            error: true,
            message: "Please ChangePassword NOt member Sumone."
        });
    } else {
        connection.query('UPDATE member SET  password = ? WHERE userId = ?', [ password, userId], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "ChangePassword not found or data are same";
            } else {
                message = "ChangePassword successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}