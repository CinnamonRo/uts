// index
$(document).ready(function () {
  $("#login").submit(function (event) {
    event.preventDefault(); // prevent form submit
    var username = "Hallo " + $("#inputName").val();
    localStorage.setItem("username", username);
    window.location.href = "aboutUs.html";
  });
});

//main
$(document).ready(function () {
  var username = localStorage.getItem("username");
  $("#nameShow").text(username);
});
