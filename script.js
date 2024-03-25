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

  //outcome
});
