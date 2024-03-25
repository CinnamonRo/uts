// index
$(document).ready(function () {
  //login
  $("#login").submit(function (event) {
    event.preventDefault(); // prevent form submit
    if ($("#inputName").val() !== "") {
      localStorage.setItem("username", username);
      window.location.href = "main.html";
    } else {
      alert("masukkan namamu");
    }
  });

  //header
  var username = localStorage.getItem("username");
  $("#nameShow").text(username);
});

document.addEventListener("DOMContentLoaded", function () {
  let localStorageKey = "";
  if (window.location.href.includes("income.html")) {
    localStorageKey = "incomeExpenses";
  } else if (window.location.href.includes("outcome.html")) {
    localStorageKey = "outcomeExpenses";
  }
});

//income
function income(){
  var keterangan = $('#catIn').val();
  var nominal = $('#moneyIn').val();
  var catatan = $('#inNote').val();
  newDiv.append($("<div>").text(keterangan));
  newDiv.append($("<div>").text(nominal));
  newDiv.append($("<div>").text(catatan));
  $("transaction").append(newDiv);
}
//button income
$("#submitIn").click(income);

function sendMessage1() {
  var name = $('#inputName1').val();
  var message = $('#inputMsg1').val();
  var newDiv = $("<div>").css({'background': 'lightgrey', 'margin': '2px'});
  newDiv.append($("<div style='margin: 10px; margin-bottom: 5px; font-family: arial; font-size: 20px; font-weight: bold'>").text(name));
  newDiv.append($("<div style='margin: 10px; margin-bottom: 5px; font-family: arial; font-size: 15px'>").text(message));
  $("#msg").append(newDiv);
}

$("#send1").click(sendMessage1);

$('#inputName1, #inputMsg1').keypress(function(event) {
  if (event.keyCode === 13) {
      sendMessage1(); 
  }
});