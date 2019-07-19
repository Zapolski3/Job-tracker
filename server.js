// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

var path = require("path");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// ===========================================================

//connection to database 
// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "jobs_db"
});

// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//***************************************************************

//this is an eccess to a temporaty db
var db = require("./db/testdb");

// Routes
// ===========================================================
app.get("/", function (req, res) {
  //   res.sendFile("Welcome to the Star Wars Page!");
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/see-all-db", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/see_all_items.html"));
});

// show all jobs
app.get("/api/see-all-db", function (req, res) {
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
//=========================================
  function addToDB(req, date, res){
    var dbQuery = "INSERT INTO new_job (name, date) VALUES (?,?)";

    connection.query(dbQuery, [req, date], function (err, result) {
      console.log(req);
      if (err) throw err;
      console.log("Job Successfully Saved!");
      res.send({
        status: "added",
        message: "A new job was added to database"
      })
    });
  }
//==========================================



  //This code will query db to see if there is no same job name
  function CkeckTheJob(name, date, res){
    var dbQueryOne = "SELECT * FROM new_job";
  connection.query(dbQueryOne, function (err, result) {
    if (err) throw err;
    let inDB = false;
    for (let i = 0; i < result.length; i++) {

      if (result[i].name == name) {
        
        inDB = true;
        } 
      } 

    if (inDB === false){
      console.log("job is added to db")
    addToDB(name, date, res);
    }else{
      res.send({
        status: "duplicate",
        message: "You have applied for the job"
      })
    }
  });
  }
  //********************************************************** 

  // Listener
  // ===========================================================
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });