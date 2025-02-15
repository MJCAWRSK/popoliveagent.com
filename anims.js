document.addEventListener("DOMContentLoaded", function () {
    const aboutUsLink = document.querySelector("nav ul li a[href='#about-us']");
    const aboutUsSection = document.getElementById("about-us");

    if (aboutUsLink && aboutUsSection) {
        aboutUsLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
});
