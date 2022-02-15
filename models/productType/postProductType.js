const dbCon = require("../../config/db.js")
module.exports = postMember = (req, res) => {
    console.log(req.body)
    let nameproducttype = req.body.name;
    // let password = req.body.password;
    // validation
    if (!nameproducttype) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt producttype Sumone."
        });
    } else {
        dbCon.query('INSERT INTO producttype (nameproducttype) VALUES(?)', [nameproducttype], (error, results, fields) => {
            // if (error) throw error;
            return res.send({
                error: false,
                data: results,
                message: "producttype successfully added",
                success: 1
            })
        })
    }
}