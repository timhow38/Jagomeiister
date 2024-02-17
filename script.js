document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", revealSections);

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
});
