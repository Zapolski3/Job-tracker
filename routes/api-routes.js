// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    
    // Get all items
    app.get("/api/all", function(req, res) {
      db.Job.findAll({}).then(function(results) {
        // console.log(results);
        res.json(results);
      });
    });

    // show all jobs
app.get("/api/display/all", function (req, res) {
    var dbQuery = "SELECT * FROM new_job";
  
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      // console.log(result);
      res.json(result);
    });
  });

    // add new job
app.post("/api/new", function (req, res) {
    console.log("New Job Data:");
    console.log(req.body);
  
    CkeckTheJob(req.body.name, req.body.date, res);
    
    });



};