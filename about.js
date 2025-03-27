function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");

    function revealServices() {
        services.forEach((service, index) => {
            setTimeout(() => {
                 
                service.style.transform = "translateY(0)";
            }, index * 500); // 500ms delay for each service
        });
    }

    revealServices();
});
