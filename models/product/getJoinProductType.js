const dbCon = require("../../config/db.js")
module.exports = getJoinProductType  = async (req, res) => {

//     SELECT *
// FROM product
// RIGHT JOIN producttype
// ON product.typeid = producttype.id;

      dbCon.query('SELECT * FROM product INNER JOIN producttype ON product.typeid = producttype.id', (error, results, fields) => {
        // if (error)
        //     throw error;
        console.log("get All getJoinProductType" );
        let message = "";
        if (results === undefined || results.length == 0) {
            message = "product table is empty";
        } else {
            message = "Successfully retrieved all product";
        }
        // console.log(results)
        return res.send({
            error: false,
            data: results,
            message: message
        });
    })  
}

