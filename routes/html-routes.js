
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

// A route to the home page
    app.get("/", function (req, res) {
        //   res.sendFile("Welcome to the Star Wars Page!");
        res.sendFile(path.join(__dirname, "./public/index.html"));
      });

// A route to see all jobs
    app.get("/display/all", function (req, res) {

        res.sendFile(path.join(__dirname, "./public/all.html"));
        });






};