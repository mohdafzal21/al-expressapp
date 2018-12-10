/*console.log("Hello people");

//create a http server
const http = require('http')

http.createServer(function(req,res){
   res.end('hello web server ')
}).listen(3000)*/

//entry point
// require express

const express = require("express");

const path = require("path");
const app = express();
const port = 3000;
console.log(__dirname);

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/', express.static(path.join(__dirname, 'public')))

//routes
app.get("/about", (req, res) => {
  res.render("about");
});
//index router
app.get("/", (req, res) => {
  res.render("index")
});
// this is contact router
app.get("/contact", (req, res)=> {
    res.render("contact")
});
//this the home router
app.get('/home', (req, res)=> {
    res.render("home")
})

// home
app.get("/home/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  res.send(`this is me, home ${id}`);
});

// al
app.get("/al", (req, res) => {
  res.send("And this is Al, OK ?");
});

app.listen(port);
