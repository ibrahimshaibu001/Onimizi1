
// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Typing animation
const typingText = document.getElementById("typingText");

const jobTitles = [
    "Web Developer",
    "UI Designer",
    "Creative Thinker"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {
    const currentTitle = jobTitles[titleIndex];

    if (!deleting) {
        typingText.textContent =
            currentTitle.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentTitle.length) {
            deleting = true;
            setTimeout(typeAnimation, 1300);
            return;
        }
    } else {
        typingText.textContent =
            currentTitle.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            titleIndex = (titleIndex + 1) % jobTitles.length;
        }
    }

    setTimeout(typeAnimation, deleting ? 55 : 100);
}

typeAnimation();

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Highlight the active navigation link while scrolling
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
});

// Contact form demonstration
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        formMessage.style.color = "#f87171";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.style.color = "#38bdf8";
    formMessage.textContent =
        "Thank you, " + name +
        "! Your form has been validated, but no message has been sent.";

    contactForm.reset();
});
alert("Welcome to my portfolio website");