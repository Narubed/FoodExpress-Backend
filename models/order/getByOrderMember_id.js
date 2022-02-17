const dbCon = require("../../config/db.js")
module.exports = getByOrderMember_id = (req, res) => {
    console.log("getByOrderMember_id=" , req.params.id)
    let member_id = req.params.id;
    
    if (!member_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  getByOrderMember_id "
        });
    } else {
        dbCon.query("SELECT * FROM order_foodexpress WHERE order_member_id = ?", member_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getByOrderMember_id not found";
            } else {
                message = "Successfully retrieved getByOrderMember_id data";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}