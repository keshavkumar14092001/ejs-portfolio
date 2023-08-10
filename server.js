const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// About Me Page
app.get("/about", (req, res) => {
  res.render("about");
});

// Projects Page
app.get("/projects", (req, res) => {
  res.render("projects");
});

// Services Page
app.get("/services", (req, res) => {
  res.render("services");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Add a route to handle the form submission
app.post("/", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
