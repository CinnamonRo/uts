const nameInput = document.getElementById("inputName");
const nameSubmit = document.getElementById("nameSubmit");
const nameShow = document.getElementById("nameShow");

nameSubmit.addEventListener("click", function () {
  const username = nameInput.value;
  if (nameInput.trim() !== "") {
    nameShow.textContent = username;
  } else {
    alert("Please enter your name");
  }
  console.log("hai");
});
