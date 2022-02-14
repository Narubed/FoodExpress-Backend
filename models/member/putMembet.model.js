const connection = require("../../config/db.js");
module.exports = putMember = (req, res) => {
  console.log("putMember", req.body);
  let id = req.body.id;
  let userId = req.body.userId;
  let password = req.body.password;
  let email = req.body.email;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let tel = req.body.tel;
  let bookname = req.body.bookname;
  let booknumber = req.body.booknumber;
  let role = req.body.role;
  let address = req.body.address;
  let subdistrict = req.body.subdistrict;
  let district = req.body.district;
  let province = req.body.province;
  let map = req.body.map;
  let level = req.body.level;
  let status = req.body.status;

  // validation
  if (
    !id ||
    !userId ||
    !password ||
    !email ||
    !firstname ||
    !lastname ||
    !tel ||
    !bookname ||
    !booknumber ||
    !role ||
    !address ||
    !subdistrict ||
    !district ||
    !province ||
    !map ||
    !level ||
    !status
  ) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt member Sumone.",
    });
  } else {
    connection.query(
      "UPDATE member SET  password = ?, email = ?, firstname = ?, lastname = ?, tel = ?,bookname = ?, booknumber = ?, role = ?, address = ?, subdistrict = ?, district = ?, province = ?, map = ?, level = ?, status = ?, userId = ? WHERE id = ? ",
      [
        password,
        email,
        firstname,
        lastname,
        tel,
        bookname,
        booknumber,
        role,
        address,
        subdistrict,
        district,
        province,
        map,
        level,
        status,
        userId,
        id,
      ],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "member not found or data are same";
        } else {
          message = "member successfully updated";
        }

        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
