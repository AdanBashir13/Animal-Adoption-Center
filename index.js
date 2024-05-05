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

