/*
==========================================
 PixelBot v2
 Background Engine
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    createStars(200);
    createParticles(40);
    createSun();
    createMoon();

});

function createStars(amount){

    const bg=document.getElementById("background");
    if(!bg) return;

    for(let i=0;i<amount;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"%";
        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=Math.random()*5+"s";

        star.style.width=(Math.random()*3+1)+"px";
        star.style.height=star.style.width;

        bg.appendChild(star);

    }

}

function createParticles(amount){

    const bg=document.getElementById("background");

    for(let i=0;i<amount;i++){

        const p=document.createElement("div");

        p.className="particle";

        p.style.left=Math.random()*100+"%";

        p.style.animationDuration=
        (12+Math.random()*18)+"s";

        p.style.animationDelay=
        Math.random()*8+"s";

        bg.appendChild(p);

    }

}

function createMoon(){

    const bg=document.getElementById("background");

    const moon=document.createElement("div");

    moon.id="moon";

    bg.appendChild(moon);

}

function createSun(){

    const bg=document.getElementById("background");

    const sun=document.createElement("div");

    sun.id="sun";

    bg.appendChild(sun);

}

setInterval(()=>{

    const bg=document.getElementById("background");

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"%";

    bg.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

},7000);
