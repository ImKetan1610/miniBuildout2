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
    errorEm.textContent = "Valid email required.";
    emailInput.style.border = "1px solid var(--primary-clr-Tomato)";
    emailInput.style.color = "var(--primary-clr-Tomato)";
    emailInput.style.backgroundColor = "hsla(4, 85%, 79%, 0.644)";
  }
});

// Function to validate email
function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}
