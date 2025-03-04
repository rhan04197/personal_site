document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");

    button.addEventListener("mouseover", () => {
        button.style.boxShadow = "0 0 15px rgba(255, 140, 0, 0.7)";
    });

    button.addEventListener("mouseout", () => {
        button.style.boxShadow = "none";
    });
});