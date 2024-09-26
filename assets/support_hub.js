// Initialize EmailJS with your Public Key
(function () {
    emailjs.init("ximLXB2_OYroSZ4M5"); // Replace with your EmailJS Public Key
    console.log("EmailJS initialized with Public Key.");
})();

// Quill.js initialization
var quill = new Quill("#editor-container", {
    theme: "snow",
});

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_jk0wt99"; // Replace with your EmailJS Service ID
    const templateID = "template_b7r3fh7"; // Replace with your EmailJS Template ID

    var message = document.querySelector("textarea[name=message]");
    message.value = quill.root.innerHTML;

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            document.getElementById("responseMessage").textContent =
                "Thank you for your message!";
            this.reset();
        },
        (error) => {
            document.getElementById("responseMessage").textContent =
                "Something went wrong. Please try again later.";
            console.error("EmailJS Error:", error);
            alert("EmailJS Error: " + JSON.stringify(error)); // Show the error in an alert for easier debugging
        }
    );
});

// Menu toggle functionality
document.getElementById("menuIcon").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.position = "fixed";
    }
});

document.getElementById("close").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
});

// Function to send a customized email
function sendEmail() {
    var templateParams = {
        subject: "Subject of the email",
        message: 'Hello, this is a customizable message box where you can <b>bold text</b>, add <a href="https://example.com">links</a>, and customize fonts.',
        senderName: "Your Name",
    };

    emailjs.send("service_jk0wt99", "template_b7r3fh7", templateParams).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            console.error("FAILED...", error);
        }
    );
}

      $(document).ready(function () {
        function waitForElement(selector, callback) {
          var element = document.getElementById(selector);
          if (element) {
            callback(element);
          } else {
            setTimeout(function () {
              waitForElement(selector, callback);
            }, 100); // Check every 100ms
          }
        }

        waitForElement("gsc-i-id1", function (ele) {
          ele.setAttribute("placeholder", "Search here");
        });
      });
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
