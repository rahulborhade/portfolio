function sendEmail() {
    const service_id = "service_xn3mri8";
    const template_id = "template_p616f7g";
    const user_id = "f4HH8UTIn-W1Oxx5u";

    emailjs.send(service_id, template_id, {
        to_name: document.getElementById("name").value,
        phone_number: document.getElementById("phone").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }, user_id)
        .then(function (response) {
            console.log("Email sent successfully", response);
            // Display an alert after successful email submission
            alert("Message sent successfully!");
        }, function (error) {
            console.log("Email failed to send", error);
            // Optionally, you can add code to show an error message.
        });
}
