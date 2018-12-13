const express = require("express");
const path = require("path");
var bodyParser = require('body-parser')
const app = express();
const port = 3000;
//controllers 
const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')
const registerRouter = require('./routes/register')
const flightRouter = require('./routes/flight')
//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//routes 
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/api/register', registerRouter);
app.use('/flight',flightRouter)
//router
app.get("/about", (req, res) => {
  res.render("about");
});
// this is the login router
app.get("/login", (req, res) => {
  res.render("login");
});

// //this is the register router
// app.get("/register", (req, res) => {
//   res.render("register");
// });


// this is contact router
app.get("/contact", (req, res) => {
  res.render("contact");
});
// //this the home router
// app.get("/home", (req, res) => {
//   res.render("home");
// });
// home
app.get("/home/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  res.send(`this is me, home ${id}`);
});
app.get("/login/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  res.send(`this is me, login ${id}`);
});
app.get("/register/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  res.send(`this is me, login ${id}`);
});
// al
app.get("/al", (req, res) => {
  res.send("And this is Al, OK ?");
});

app.listen(port);
