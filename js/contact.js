document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_aq89s4m", "template_8ss27we", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
});
