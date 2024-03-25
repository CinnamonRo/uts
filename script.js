// index
$(document).ready(function () {
  $("#login").submit(function (event) {
    event.preventDefault(); // prevent form submit
    var username = $("#inputName").val();
    localStorage.setItem("username", username);
    window.location.href = "main.html";
  });
});

//header
$(document).ready(function () {
  var username = localStorage.getItem("username");
  $("#nameShow").text(username);
});

$(document).ready(function () {
  $("#income").submit(function (event) {
    event.preventDefault(); // prevent form submit
    var keterangan = $("#catin").val();
    var nominal = $("#moneyIn").val();
    var catatan = $("#inNote").val();
    
    if ($("#catIn").val() !== "") {
      localStorage.setItem("keterangan", keterangan);
    } else {
      alert("masukkan keterangan");
    }

    if ($("#moneyIn").val() !== "") {
      localStorage.setItem("nominal", nominal);
    } else {
      alert("masukkan nominal");
    }

    if ($("#inNote").val() !== "") {
      localStorage.setItem("catatan", catatan);
    } else {
      alert("masukkan catatan");
    }
  });
});

$(document).ready(function () {
  var keterangan = localStorage.getItem("keterangan");
  var nominal = localStorage.getItem("nominal");
  var catatan = localStorage.getItem("catatan");
  $("#transaction").text(keterangan);
  $("#transaction").text(nominal);
  $("#transaction").text(catatan);
});

document.addEventListener("DOMContentLoaded", function () {
  let localStorageKey = "";
  if (window.location.href.includes("income.html")) {
    localStorageKey = "incomeExpenses";
  } else if (window.location.href.includes("outcome.html")) {
    localStorageKey = "outcomeExpenses";
  }
});






