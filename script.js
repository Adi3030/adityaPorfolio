/*=========================================
        LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});


/*=========================================
        CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


document.querySelectorAll("a, button, .project-card, .skill-card, .service-card")
    .forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.style.transform = "translate(-50%,-50%) scale(1.8)";

            cursor.style.background = "#3B82F6";

        });

        item.addEventListener("mouseleave", () => {

            cursor.style.transform = "translate(-50%,-50%) scale(1)";

            cursor.style.background = "transparent";

        });

    });


/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(11,17,32,.85)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "transparent";

    }

});


/*=========================================
        ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        COUNTER
=========================================*/

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const pos = stats.offsetTop - 400;

    if (window.scrollY > pos && !started) {

        started = true;

        counters.forEach(counter => {

            let target = parseInt(counter.innerText);

            let count = 0;

            const speed = Math.max(10, Math.floor(2000 / target));

            const update = () => {

                if (count < target) {

                    count++;

                    counter.innerText = count + "+";

                    setTimeout(update, speed);

                } else {

                    if (counter.innerText.includes("100"))

                        counter.innerText = "100%";
                }

            }

            update();

        });

    }

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(

    ".project-card,.skill-card,.service-card,.timeline-item,.about-container"

);

function reveal() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


/*=========================================
        MOBILE MENU
=========================================*/

const menu = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav-links");

if (menu) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/*=========================================
        TYPING EFFECT
=========================================*/

const titles = [

    "iOS Developer",

    "Swift Developer",

    "SwiftUI Developer",

    "Mobile App Developer"

];

let title = document.querySelector(".hero h2");

let i = 0;

function changeTitle() {

    if (title) {

        title.innerText = titles[i];

        i++;

        if (i >= titles.length) {

            i = 0;

        }

    }

}

setInterval(changeTitle, 2500);


/*=========================================
        PARALLAX PROFILE
=========================================*/

const profile = document.querySelector(".profile-card");

window.addEventListener("mousemove", (e) => {

    if (profile) {

        let x = (window.innerWidth / 2 - e.pageX) / 45;

        let y = (window.innerHeight / 2 - e.pageY) / 45;

        profile.style.transform =

            `rotateY(${x}deg) rotateX(${y}deg)`;

    }

});


/*=========================================
        PROJECT HOVER
=========================================*/

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/*=========================================
        CONTACT FORM
=========================================*/

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}