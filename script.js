document.addEventListener("DOMContentLoaded", function() {
    // Scroll event listener to reveal sections
    window.addEventListener("scroll", revealSections);

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

    // Form submission event listener for contact form
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const nameInput = contactForm.querySelector("#name");
        const emailInput = contactForm.querySelector("#email");
        const messageInput = contactForm.querySelector("#message");

        // Validate name field
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        // Validate email field
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        // Validate message field
        if (messageInput.value.trim() === "") {
            alert("Please enter a message.");
            messageInput.focus();
            return;
        }

        // If all fields are valid, submit the form
        this.submit();
    });
});
