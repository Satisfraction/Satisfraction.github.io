// ----------------------- //
// Für das Kontaktformular //
// ----------------------- //
document.getElementById("contactForm1").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Überprüfung, ob alle Felder ausgefüllt sind
    if (firstName === "" || lastName === "" || email === "" || subject === "") {
        alert("Bitte füllen Sie alle Pflichtfelder aus.");
        return;
    }

    // Erstellt den Email-Body
    var emailBody = "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Email: " + email + "\n" +
        "Subject: " + subject + "\n" +
        "Message: " + message;

    // Sendet die E-Mail
    var emailAddress = "MY_EMAIL";
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
    window.open(mailtoLink);
});

// ------------------------ //
// Für das CV-info Formular //
// ------------------------ //
document.getElementById("contactForm2").addEventListener("submit", function (event) {
    event.preventDefault();

    // Überprüfung, ob alle Felder ausgefüllt sind
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var company = document.getElementById("company").value;
    var position = document.getElementById("position").value;

    if (name === "" || email === "" || company === "" || position === "") {
        alert("Bitte füllen Sie alle Pflichtfelder aus.");
        return;
    }

    // Erstellt den Email-Body
    var emailBody = "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Company: " + company + "\n" +
        "Position: " + position;

    // Sendet die E-Mail
    var emailAddress = "MY_EMAIL";
    var mailtoLink = "mailto:" + emailAddress + "?position=" + encodeURIComponent(position) + "&body=" + encodeURIComponent(emailBody);
    window.open(mailtoLink);
});