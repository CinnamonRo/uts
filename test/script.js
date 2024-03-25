const nameInput = document.getElementById("inputName");
const nameSubmit = document.getElementById("nameSubmit");
const nameShow = document.getElementById("nameShow");

nameSubmit.addEventListener("click", function () {
  const username = nameInput.value;
  console.log(username);
  //   alert("hai");
  if (nameInput.trim() !== "") {
    nameShow.textContent = username;
    tampilkan.classList.remove("d-none");
    indexbody.classList.add("d-none");
  } else {
    alert("Please enter your name");
  }
});
