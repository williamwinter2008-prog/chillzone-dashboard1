/*
==========================================
 PixelBot v2
 Animated Background
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    createStars();
    createParticles();

});


function createStars(){

    const background = document.getElementById("background");

    if(!background) return;

    for(let i=0;i<180;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*100+"%";
        star.style.top = Math.random()*100+"%";

        star.style.animationDelay =
            Math.random()*5+"s";

        star.style.opacity =
            Math.random();

        star.style.width =
            Math.random()*3+1+"px";

        star.style.height =
            star.style.width;

        background.appendChild(star);

    }

}



function createParticles(){

    const background = document.getElementById("background");

    if(!background) return;

    for(let i=0;i<40;i++){

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random()*100+"%";

        particle.style.animationDelay =
            Math.random()*20+"s";

        particle.style.animationDuration =
            15+Math.random()*15+"s";

        background.appendChild(particle);

    }

}
