function validateEmail() {
  const emailInput = document.querySelector("#email-input");
  const errorMessage = document.querySelector("#error-message");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput.value)) {
    errorMessage.style.display = "none";
    alert("Email is valid!");
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "var(--soft-red)";
  }
}

document
  .getElementById("email-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      validateEmail();
    }
  });
