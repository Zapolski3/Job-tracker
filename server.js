// Dependencies
// ===========================================================
var express = require("express");

// var path = require("path");
const PORT = process.env.PORT || 3003;
var db = require("./models");

var app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// ===========================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Routes
// ===========================================================


//=========================================
  // function addToDB(req, date, res){
  //   var dbQuery = "INSERT INTO new_job (name, date) VALUES (?,?)";

  //   connection.query(dbQuery, [req, date], function (err, result) {
  //     console.log(req);
  //     if (err) throw err;
  //     console.log("Job Successfully Saved!");
  //     res.send({
  //       status: "added",
  //       message: "A new job was added to database"
  //     })
  //   });
  // }
//==========================================



  //This code will query db to see if there is no same job name
  // function CkeckTheJob(name, date, res){
  //   var dbQueryOne = "SELECT * FROM new_job";
  // connection.query(dbQueryOne, function (err, result) {
  //   if (err) throw err;
  //   let inDB = false;
  //   for (let i = 0; i < result.length; i++) {

  //     if (result[i].name == name) {
        
  //       inDB = true;
  //       } 
  //     } 

  //   if (inDB === false){
  //     console.log("job is added to db")
  //   addToDB(name, date, res);
  //   }else{
  //     res.send({
  //       status: "duplicate",
  //       message: "You have applied for the job"
  //     })
  //   }
  // });
  // }
  //********************************************************** 

  // Listener
  // ===========================================================
  // app.listen(PORT, function () {
  //   console.log("App listening on PORT " + PORT);
  // });
  db.sequelize.sync( {force: false} ).then(function() {
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  })
  