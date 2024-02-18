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

    // Initial call to reveal sections on page load
    revealSections();
});
