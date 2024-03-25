// index
$(document).ready(function () {
  $("#login").submit(function (event) {
    event.preventDefault(); // prevent form submit
    var username = "Hallo " + $("#inputName").val();
    localStorage.setItem("username", username);
    window.location.href = "main.html";
  });
});

//header
$(document).ready(function () {
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
