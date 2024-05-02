// Select elements
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const scrollUp = document.querySelector("#scroll-up");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.getElementById("theme-toggle");

// Toggle hamburger menu
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  });
});

// Scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Dark theme toggle button
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
