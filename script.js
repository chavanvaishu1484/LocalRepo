// Form handling logic
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation (more can be added as needed)
    if (name && email && message) {
        document.getElementById("form-response").textContent = "Thank you for your message!";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-response").textContent = "Please fill out all fields.";
    }
});
