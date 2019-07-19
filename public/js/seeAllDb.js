// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
// the code below will display all saved jobs from jobs_db
$.ajax({ 
    url: "/api/see-all-db",
     method: "GET" })
    .then(function(DB) {

      // Here we then log the DB to console, where it will show up as an object.
      console.log(DB);
      console.log("------------------------------------");

      // Loop through and display each job
      for (var i = 0; i < DB.length; i++) {

        // Get a reference to the jobList element and populate it with jobs
        var box = $("<div>");
        box.addClass("one");
        box.append(
          $("<p>").text("Name:" +" "+ DB[i].name),
          $("<p>").text("Date applied:" +" "+ DB[i].date),
          // $("<p>").text("Applied:" +" "+ DB[i].applied)
          
        );
        $("#seeAll").append(box);
      }
    });