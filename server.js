let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8000;
require("dotenv").config();

const cors = require("cors");

const getMembers = require("./models/member/getAllMember.model.js");
// const postMember = require("./models/member/postMember.model.js");
const getByIdMemmber = require("./models/member/getByIdMember.model.js");
// const putMembers = require("./models/member/putMembet.model.js");
const deleteMember = require("./models/member/deleteMember");
const loginMember = require("./models/member/loginMember.model.js");
const deleteMemberById = require("./models/member/deleteMemberById.js");
const getMemberByid = require("./models/member/getMemberByid.js");

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

// app.post("/member", postMember);

app.get("/member/:id", getByIdMemmber);

app.get("/getMemberByid/:id", getMemberByid);

// app.put("/member", putMembers);

app.delete("/member/:id", deleteMember);

app.delete("/memberId/:id", deleteMemberById);

app.post("/login", loginMember);

app.listen(PORT, () => {
  console.log("Node App is running on port =", PORT);
});

module.exports = app;
