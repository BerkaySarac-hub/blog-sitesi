const layout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const qs = require("querystring");
module.exports.index = function (req, res, next) {
  res.render("admin-login", { layout: "admin-login.ejs" });
};
module.exports.postF = (req, res, next) => {
  const { adminName, adminPassword } = req.body;
  const { authorization } = req.headers;
  res.send({
    adminName,
    adminPassword,
    authorization,
  });
  console.log(req.body[(adminName, adminPassword)]);
};
