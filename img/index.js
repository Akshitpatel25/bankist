const navE1 = document.querySelector('.nav');
const hamburgerE1 = document.querySelector('.hamburger');

hamburgerE1.addEventListener("click", () => {
    navE1.classList.toggle("nav--open");
    hamburgerE1.classList.toggle("hamburger--open");
});

navE1.addEventListener("click", () => {
    navE1.classList.remove("nav--opennn");
    hamburgerE1.classList.remove("hamburger--open");
});