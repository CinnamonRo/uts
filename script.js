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
});
  
//header
$(document).ready(function () {
  var username = localStorage.getItem("username");
  $("#nameShow").text(username);
});

$(document).ready(function () {
  $("#income").submit(function (event) {
    event.preventDefault(); // prevent form submit
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

//income
// function income(){
//   var keterangan = $('#catIn').val();
//   var nominal = $('#moneyIn').val();
//   var catatan = $('#inNote').val();
//   newDiv.append($("<div>").text(keterangan));
//   newDiv.append($("<div>").text(nominal));
//   newDiv.append($("<div>").text(catatan));
//   $("transaction").append(newDiv);
// }
//button income
//$("#submitIn").click(income);
