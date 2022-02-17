const connection = require("../../config/db.js")
module.exports = putRider = (req, res) => {
    console.log(req.body)
    let rider_id = req.body.rider_id;
    let rider_id_login = req.body.rider_id_login;
    let rider_pw_login = req.body.rider_pw_login;
    let rider_tel = req.body.rider_tel;
    let rider_first_name = req.body.rider_first_name;
    let rider_last_name = req.body.rider_last_name;
    // validation
    if (!rider_id || !rider_first_name ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt putRider Sumone."
        });
    } else {
        connection.query('UPDATE rider_foodexpress SET  rider_id_login = ?, rider_pw_login = ?,rider_tel = ?,rider_first_name = ?, rider_last_name = ? WHERE rider_id = ?', 
        [ rider_id_login,rider_pw_login,rider_tel,rider_first_name,rider_last_name, rider_id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "putRider not found or data are same";
            } else {
                message = "putRider successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}