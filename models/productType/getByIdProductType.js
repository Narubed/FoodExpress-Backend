const dbCon = require("../../config/db.js")
module.exports = getByIdProductType = (req, res) => {

    let id = req.params.id;
    console.log("getByIdProductType=" , id)
    if (!id) {
        return res.status(400).send({
            error: true,
            message: "Please provide getByIdProductType id"
        });
    } else {
        dbCon.query("SELECT * FROM producttype WHERE id = ?", id, (error, results, fields) => {
            // if (error) throw error;
            console.log("producttype byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getByIdProductType not found";
            } else {
                message = "Successfully retrieved getByIdProductType data";
            }
            return res.send({
                error: false,
                data: results[0],
                message: message
            })
        })
    }
}