// const express = require("express");
// const app = express();
// const port = 3000;
// var bodyParser = require("body-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.listen(port);

// app.set("view engine", "ejs");
// app.set("views", "./views");

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/excel");
// var user = require("./models/user");

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/home", (req, res) => {
//   res.render("home");
// });

// app.get("/signUp", (req, res) => {
//   res.render("signUp");
// });

// app.post("/login", urlencodedParser, (req, res) => {
//   user.findOne({ email: req.body.email }, (err, result) => {
//     if (result.pass == req.body.pass) {
//       res.redirect("home");
//     } else {
//       res.redirect("login");
//       alert("Dang nhap that bai!");
//     }
//     console.log(result);
//   });
// });

// // app.post("/singUp", urlencodedParser, (req, res) => {
// //   user.create(
// //     {
// //       username: req.body.username,
// //       email: req.body.email,
// //       pass: req.body.pass,
// //     },
// //     (err, result) => {
// //       console.log("Thêm dữ liệu thành công");
// //       res.redirect("login");
// //     }
// //   );
// // });
