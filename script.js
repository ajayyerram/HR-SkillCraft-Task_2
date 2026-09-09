const navbar = document.getElementById("navbar");

const navLinks = document.getElementById("navLinks");

const menuBtn = document.getElementById("menuBtn");

const links = document.querySelectorAll("nav a");


// Change navbar when scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// Mobile menu

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


// Close mobile menu after clicking

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// Active navigation item

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 140) {

            current = section.id;

        }

    });


    links.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

});