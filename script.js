document.addEventListener("DOMContentLoaded", function() {
    // Function to reveal sections when scrolled into view
    function revealSections() {
        const sections = document.querySelectorAll("section");
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight / 1.3) {
                section.classList.add("active");
            }
        });
    }

    // Scroll event listener to reveal sections
    window.addEventListener("scroll", revealSections);

    // Form submission event listener for contact form
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Here you can perform any validation if needed

        // Display a message to the user
        const formMessage = document.getElementById("form-message");
        formMessage.textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";

        // Optionally, you can clear the form fields after submission
        contactForm.reset();
    });

    // Initial call to reveal sections on page load
    revealSections();
});
