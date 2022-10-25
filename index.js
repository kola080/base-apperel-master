let email = document.getElementById("email");
let btn = document.getElementById("button");
let errorIcon = document.querySelector(".error");
let errorText = document.querySelector(".error-text");
let errorBorder = document.querySelector(".email");
btn.addEventListener("click", function (event) {
  const emailValue = email.value;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(emailValue) === false) {
    console.log("not a valid email");
    errorBorder.classList.add("border-error");
    errorIcon.classList.add("show-error");
    errorText.classList.add("show-text");
  }
});
