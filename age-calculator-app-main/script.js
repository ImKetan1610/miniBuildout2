// script.js

const ageForm = document.getElementById("ageForm");
const resultDiv = document.getElementById("result");
const yearsDiv = document.getElementById("years");
const monthsDiv = document.getElementById("months");
const daysDiv = document.getElementById("days");

ageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const dob = new Date(ageForm.dob.value);
  const today = new Date();

  // Check if the date is in the future
  if (dob > today) {
    alert("Date of Birth cannot be in the future");
    return;
  }

  // Calculate age
  const ageInMilliseconds = today - dob;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );
  const ageInMonths = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.4375)
  );
  const ageInDays = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60 * 24 * 30.4375)) /
      (1000 * 60 * 60 * 24)
  );

  // Display result
  yearsDiv.textContent = `${ageInYears} ${ageInYears === 1 ? "Year" : "Years"}`;
  monthsDiv.textContent = `${ageInMonths} ${
    ageInMonths === 1 ? "Month" : "Months"
  }`;
  daysDiv.textContent = `${ageInDays} ${ageInDays === 1 ? "Day" : "Days"}`;
  resultDiv.classList.remove("hidden");
});
