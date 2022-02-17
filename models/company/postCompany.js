const connection = require("../../config/db.js")
module.exports = postCompany = (req, res) => {
        const classifiedsadd = {
            company_name : req.body.company_name,
            company_tel : req.body.company_tel,
            book_name : req.body.book_name,
            book_number : req.body.book_number,
            company_address : req.body.company_address,
        };
        const sql = "INSERT INTO company SET ?";
        connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
            res.json({ success: 1 })      
        });
    }

    