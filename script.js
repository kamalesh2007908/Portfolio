function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill all the fields.";
        return false;
    }

    formMessage.style.color = "lime";
    formMessage.textContent = "Message sent successfully!";
    return true;
}