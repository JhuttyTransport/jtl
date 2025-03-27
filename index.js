function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}




document.addEventListener("DOMContentLoaded", function () {
    // Select all elements that need animation
    const elementsToAnimate = document.querySelectorAll(".fade-in, .slide-in-right, .slide-in-left, .slide-up");

    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("show");
        }, index * 300); // Delay each element by 300ms
    });
});
 