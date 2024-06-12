const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const subBtn = document.querySelector(".sub-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  localStorage.setItem("email", email);

  if (validateEmail(email)) {
    const encodedEmail = encodeURIComponent(email);
    window.location.href = `success.html?email=${encodedEmail}`;
  } else {
    const errorEm = document.querySelector("em");
    errorEm.innerHTML = "Valid email required.";
    emailInput.style.border = "1px solid rgb(255, 99, 71)";
    emailInput.style.color = "rgb(255, 99, 71)";
    emailInput.style.backgroundColor = "rgba(255,99,71,0.6)";
  }
});

// Function to validate email
function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}
