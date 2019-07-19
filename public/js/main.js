// by clicking on submit,the code will add a new job and check if job doesn't exist in the db and 
$(document).ready(function(){

function ckeckName(valueOne){
  $.ajax({ url: "/api/see-all-db", method: "GET" }).then(function(DB) {

      // Here we then log the DB to console, where it will show up as an object.
      console.log(DB);
      console.log("------------------------------------");

      // Loop through and display each job
      for (var i = 0; i < DB.length; i++) {
        if(DB[i].name == valueOne){
          break;
        }
      }
    });
}

    


$("#submitBtn").on("click", function(event) {
    event.preventDefault();
let NameTab = $("#jobName").val();

    if(NameTab == 0){
      alert("You can not have empty name field")
    } 
    else {

   // Make a new job object
  var newJob = {
    name: $("#jobName").val(),
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  };



  console.log(newJob);

  // Send an AJAX POST-request with jQuery to add a new job
  $.post("/api/new", newJob)
    // On success, run the following code
    .then(function(res) {
      let response = res.message;
      let newP = $("<p>"+" "+ response +""+ "</p>");
      $("#thx").html(newP);
    });

//   Empty each input box by replacing the value with an empty string
  $("#jobName").val("");

    }

});


});