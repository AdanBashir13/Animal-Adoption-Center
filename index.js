// Keydown Events
document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
        const header = document.querySelector("header");
        const headerPosition = header.getBoundingClientRect().top;
        document.documentElement.scrollTo({
            top: headerPosition,
            behavior: 'smooth'
        });
    }
    if (event.key === "e") {
        const footer = document.querySelector("footer");
        const footerPosition = footer.getBoundingClientRect().top;
        document.documentElement.scrollTo({
            top: footerPosition,
            behavior: 'smooth'
        });
    }
});

// Mouse enter && Mouse leave Events
document.addEventListener("DOMContentLoaded", () => {
    const catsLink = document.getElementById("catslk");

    catsLink.addEventListener("mouseenter", () => {
        catsLink.textContent = 'MEOW!';
    });

    catsLink.addEventListener("mouseleave", () => {
        catsLink.textContent = 'CATS';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const catsLink = document.getElementById("dogslk");

    catsLink.addEventListener("mouseenter", () => {
        catsLink.textContent = 'BARK!';
    });

    catsLink.addEventListener("mouseleave", () => {
        catsLink.textContent = 'DOGS';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const catsLink = document.getElementById("donatelk");

    catsLink.addEventListener("mouseenter", () => {
        catsLink.textContent = '$$$';
    });

    catsLink.addEventListener("mouseleave", () => {
        catsLink.textContent = 'DONATE';
    });
});
