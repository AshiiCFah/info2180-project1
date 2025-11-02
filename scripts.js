// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // Get references to elements
  const form = document.querySelector("form");
  const emailInput = document.querySelector("input[type='email']");
  const messageDiv = document.querySelector(".message");

  // Listen for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from reloading

    const email = emailInput.value.trim(); // Get the email and remove spaces

    if (email === "") {
      // If no email entered
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "red";
    } else {
      // If email entered
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = "green";

      // Optionally clear the field after success
      emailInput.value = "";
    }
  });
});
