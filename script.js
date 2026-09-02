/* ==========================================
   WEDDING COUNTDOWN
========================================== */

const targetDate = new Date("2027-02-26T00:00:00+05:30");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdownTitle =
document.querySelector("#countdown-section h2");

function updateCountdown(){

const now = new Date();

const diff = targetDate - now;

if(diff<=0){

const wedding = new Date("2027-02-27T00:00:00+05:30");

const weddingDiff = wedding - now;

if(weddingDiff>0){

countdownTitle.innerHTML=
"The celebrations have begun ❤️";

const d=Math.floor(weddingDiff/(1000*60*60*24));
const h=Math.floor((weddingDiff%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((weddingDiff%(1000*60*60))/(1000*60));
const s=Math.floor((weddingDiff%(1000*60))/1000);

days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;

return;

}else{

countdownTitle.innerHTML=
"We're Married ❤️";

days.innerHTML="∞";
hours.innerHTML="❤";
minutes.innerHTML="❤";
seconds.innerHTML="❤";

return;

}

}

const d=Math.floor(diff/(1000*60*60*24));

const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const m=Math.floor((diff%(1000*60*60))/(1000*60));

const s=Math.floor((diff%(1000*60))/1000);

days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;

}

updateCountdown();

setInterval(updateCountdown,1000);


/* ==========================================
   SCROLL FADE
========================================== */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},
{
threshold:.15
});

document.querySelectorAll(
".quote,.gallery,.love,.letter,footer"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(70px)";
el.style.transition="1.2s";

observer.observe(el);

});


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-20px";

heart.style.fontSize=(12+Math.random()*22)+"px";

heart.style.color="rgba(255,170,190,.8)";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="7s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";
heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,1500);


/* ==========================================
   LIGHTBOX
========================================== */

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.left="0";
lightbox.style.top="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background="rgba(0,0,0,.92)";
lightbox.style.display="none";
lightbox.style.justifyContent="center";
lightbox.style.alignItems="center";
lightbox.style.zIndex="99999";

const big=document.createElement("img");

big.style.maxWidth="90%";
big.style.maxHeight="90%";
big.style.borderRadius="20px";

lightbox.appendChild(big);

document.body.appendChild(lightbox);

images.forEach(img=>{

img.onclick=()=>{

big.src=img.src;

lightbox.style.display="flex";

}

});

lightbox.onclick=()=>{

lightbox.style.display="none";

};


/* ==========================================
   EASTER EGG
========================================== */

let taps=0;

document.querySelector(".hero-content span")
.addEventListener("click",()=>{

taps++;

if(taps==7){

alert("I love you Sakshi ❤️");

taps=0;

}

});


/* ==========================================
   HERO PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-image");

const y=window.scrollY;

hero.style.transform=
`translateY(${y*0.25}px) scale(1.1)`;

});


/* ==========================================
   LOADER
========================================== */

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader")
.style.display="none";

},3500);

};


/* ==========================================
   TITLE ANIMATION
========================================== */

const heroText=document.querySelector(".hero-content");

heroText.animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],

{

duration:2000,
fill:"forwards"

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"%cMade with ❤️ for Sakshi",
"font-size:24px;color:pink;"
);