const spanEmail = document.querySelector(".success-text");
let email = localStorage.getItem("email");
spanEmail.innerHTML = `<p>A confirmation email has been sent to <span id="span-email-placeholder">${email}</span>. Please open it and click the button inside to confirm your subscription.</p>`;

// dismiss btn function
function goToIndex() {
  window.location.href = "index.html";
}
