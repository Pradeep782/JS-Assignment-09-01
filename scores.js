// use strict directive executes the javascript in strict mode
"use strict";

// functiion which is used to display the scores.
function scoresDisplay() {
  var scoresArray = JSON.parse(sessionStorage.getItem("scoresArray"));

  var sum = 0;
  for (var i = 0; i < scoresArray.length; i++) {
    document.getElementById(
      "scoresArea"
    ).value += `${scoresArray[i].last_name}, ${scoresArray[i].first_name} : ${scoresArray[i].score} \n`;
    sum += parseInt(scoresArray[i].score);
  }

  // This DOM operatioon fetches the id of average_score and inputs the value assigned to it.
  document.getElementById("average_score").value = sum / scoresArray.length;
}

// when the document is ready the below function will be executed.
$(document).ready(function () {
  var scoresArray = JSON.parse(sessionStorage.getItem("scoresArray"));
  if (!scoresArray) {
    scoresArray = [];
  }

  // fetching the add_button id and adding the click event listener.
  $("#add_button").click(function () {
    // get the add form ready for next entry
    var Obj = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      score: $("#score").val(),
    };

    // Adding the object to the respective array
    scoresArray.push(Obj);
    sessionStorage.setItem("scoresArray", JSON.stringify(scoresArray));

    $("#first_name").val(""), $("#last_name").val(""), $("#score").val("");
    // focus method to focus on the label with the id of first_name

    $("#first_name").focus();
  });

  // Fetching the id clear_button and adding the eventlistener to it.
  $("#clear_button").click(function () {
    // Removing the score data from the webpage.
    $("#average_score").val("");

    $("#scores").val("");

    // focus method used to focus on the label with the id first_name
    $("#first_name").focus();
  });

  // Fetching the id sort_button and adding the click event listener.
  $("#sort_button").click(function () {
    var scoresArray = JSON.parse(sessionStorage.getItem("scoresArray"));
    scoresArray.sort((a, b) =>
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
    );

    document.getElementById("scoresArea").value = "";
    for (var i = 0; i < scoresArray.length; i++) {
      document.getElementById(
        "scoresArea"
      ).value += `${scoresArray[i].last_name}, ${scoresArray[i].first_name} : ${scoresArray[i].score} \n`;
    }
  });

  // focus method used to focus on the label with the id of first_name.
  $("#first_name").focus();
});
