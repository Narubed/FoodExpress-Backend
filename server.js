let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8000;
require("dotenv").config();

const cors = require("cors");

const getMembers = require("./models/member/getAllMember.model.js");
const postMember = require("./models/member/postMember.model.js");
const getByIdMemmber = require("./models/member/getByIdMember.model.js");
const putMembers = require("./models/member/putMembet.model.js");
const deleteMember = require("./models/member/deleteMember");
const loginMember = require("./models/member/loginMember.model.js");
const deleteMemberById = require("./models/member/deleteMemberById.js");
const getMemberByid = require("./models/member/getMemberByid.js");

const postProduct = require("./models/product/postProduct.js");
const getAllProduct = require("./models/product/getAllProduct.js");
const deleteProduct = require("./models/product/deleteProduct.js");
const getByidProduct = require("./models/product/getByidProduct.js");
const putProduct = require("./models/product/putProduct");
const posrProductType = require("./models/productType/postProductType.js");
const getAllProductType = require("./models/productType/getAllProductType.js");
const getByIdProductType = require("./models/productType/getByIdProductType.js");
const putProductType = require("./models/productType/putProductType.js");
const deleteProductType = require("./models/productType/deleteProductType.js");
const getJoinProductType = require("./models/product/getJoinProductType.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
// homepage route
app.get("/", (req, res) => {
  return res.send({
    error: false,
    message: "Welcome to RESTful CRUD API with NodeJS, Express, MYSQL",
    written_by: "Narubed ",
  });
});

app.get("/members", getMembers);

app.post("/member", postMember);

app.get("/member/:id", getByIdMemmber);

app.get("/getMemberByid/:id", getMemberByid);

app.put("/member", putMembers);

app.delete("/member/:id", deleteMember);

app.delete("/memberId/:id", deleteMemberById);

app.post("/imageupload", postProduct);

app.get("/products", getAllProduct);

app.delete("/product/:id", deleteProduct);

app.get("/product/:id", getByidProduct);

app.put("/product", putProduct);

app.post("/login", loginMember);

app.post("/producttype", posrProductType);

app.get("/producttypes", getAllProductType);

app.get("/producttype/:id", getByIdProductType);

app.put("/producttype", putProductType);

app.delete("/producttype/:id", deleteProductType);

app.get("/getJoinProductType", getJoinProductType);

app.listen(PORT, () => {
  console.log("Node App is running on port =", PORT);
});

module.exports = app;
