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
    var keteranganIn = $("#catin").val();
    var nominalIn = $("#moneyIn").val();
    var catatanIn = $("#inNote").val();
    
    if ($("#catIn").val() !== "") {
      localStorage.setItem("keteranganIn", keteranganIn);
    } else {
      alert("masukkan keterangan");
    }

    if ($("#moneyIn").val() !== "") {
      localStorage.setItem("nominalIn", nominalIn);
    } else {
      alert("masukkan nominal");
    }

    if ($("#inNote").val() !== "") {
      localStorage.setItem("catatanIn", catatanIn);
    } else {
      alert("masukkan catatan");
    }
  });
});

$(document).ready(function () {
  var keteranganIn = localStorage.getItem("keteranganIn");
  var nominalIn = localStorage.getItem("nominalIn");
  var catatanIn = localStorage.getItem("catatanIn");
  var newDiv = $("<div>").css({'background': 'rgb(160, 228, 255)', 'margin': '2px'});
  newDiv.append($("<div style='margin: 10px; margin-bottom: 5px; font-family: arial; font-size: 20px;'>").text(keteranganIn));
  newDiv.append($("<div style='margin: 10px; margin-bottom: 5px; font-family: arial; font-size: 20px;'>").text(nominalIn));
  newDiv.append($("<div style='margin: 10px; margin-bottom: 5px; font-family: arial; font-size: 20px;'>").text(catatanIn));
  $("#transaction").append(newDiv);
});

document.addEventListener("DOMContentLoaded", function () {
  let localStorageKey = "";
  if (window.location.href.includes("income.html")) {
    localStorageKey = "incomeExpenses";
  } else if (window.location.href.includes("outcome.html")) {
    localStorageKey = "outcomeExpenses";
  }
});






