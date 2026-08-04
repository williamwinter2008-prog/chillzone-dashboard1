/*
==========================================
 PixelBot v2
 Main JavaScript
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initialiseTheme();
    initialiseNavigation();
    initialiseScrollAnimations();
    initialiseButtons();

});


/* ==========================
   THEME
========================== */

function initialiseTheme(){

    const toggle = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("pixelbot-theme") || "dark";

    document.body.setAttribute("data-theme", savedTheme);

    if(toggle){

        updateThemeIcon(toggle, savedTheme);

        toggle.addEventListener("click", () => {

            const current =
                document.body.getAttribute("data-theme");

            const next =
                current === "dark" ? "light" : "dark";

            document.body.setAttribute("data-theme", next);

            localStorage.setItem("pixelbot-theme", next);

            updateThemeIcon(toggle, next);

        });

    }

}

function updateThemeIcon(button, theme){

    button.textContent =
        theme === "dark" ? "🌙" : "☀️";

}


/* ==========================
   NAVIGATION
========================== */

function initialiseNavigation(){

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click", e=>{

            e.preventDefault();

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}


/* ==========================
   BUTTON EFFECTS
========================== */

function initialiseButtons(){

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform =
                "translateY(-3px)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform =
                "";

        });

    });

}


/* ==========================
   SCROLL ANIMATIONS
========================== */

function initialiseScrollAnimations(){

    const elements =
        document.querySelectorAll(".fade-in");

    const observer =
        new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        });

    elements.forEach(el=>observer.observe(el));

}
