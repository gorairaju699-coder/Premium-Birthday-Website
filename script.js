function showSurprise() {

    const gift = document.getElementById("giftBox");

if(gift){
    gift.style.transition = "0.5s";
    gift.style.transform = "scale(0) rotate(360deg)";
}

    document.getElementById("hero").style.display = "none";

    document.getElementById("surprise").style.display = "block";

    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    const music = document.getElementById("music");

    music.currentTime = 0.3;

    music.play()
    .then(() => {
        console.log("Music started");
    })
    .catch((err) => {
        console.log(err);
    });
}

let sliderInterval;

function showGallery() {

    document.getElementById("surprise").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("videoSection").style.display = "block";

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

    if (!sliderInterval) {
        sliderInterval = setInterval(nextPhoto, 3000);
    }
}
const text = "You are the best friend ever ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.addEventListener("load", function () {
    typeWriter();
});

const photos = [
    "image/photo1.jpeg",
    "image/photo2.jpeg",
    "image/photo3.jpeg",
    "image/photo4.jpeg"
];
let current = 0;

function nextPhoto() {

    current++;

    if (current >= photos.length) {
        current = 0;
    }
    document.getElementById("slider").style.opacity = "0";
    
    setTimeout(() => {

        document.getElementById("slider").src = photos[current];
        document.getElementById("slider").style.opacity = "1";

    }, 300);

}

function prevPhoto() {

    current--;

    if (current < 0) {
        current = photos.length - 1;
    }

    document.getElementById("slider").style.opacity = "0";

    setTimeout(() => {

        document.getElementById("slider").src = photos[current];
        document.getElementById("slider").style.opacity = "1";

    }, 300);

}
function showLetter(){

    document.getElementById("letterSection").style.display = "block";

    document.getElementById("letterSection").scrollIntoView({
        behavior:"smooth"
    });

  setTimeout(function(){

    document.getElementById("thanksSection").style.display = "block";

    document.getElementById("thanksSection").scrollIntoView({
        behavior:"smooth"
    });

    setTimeout(() => {
        fireworkShow();
    }, 800);

},1000);
}
setInterval(function(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

   heart.style.left = Math.random() * window.innerWidth + "px";
   heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.bottom = "-30px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },5000);

},800);
if (typeof confetti === "function") {

    setInterval(() => {

        confetti({
            particleCount: 5,
            spread: 60,
            origin: {
                x: Math.random(),
                y: 0
            }
        });

    }, 1000);

}
function fireworkShow() {

    if (typeof confetti !== "function") {
        console.log("Confetti library not loaded");
        return;
    }

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            confetti({
                particleCount: 150,
                spread: 120,
                startVelocity: 50,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }
            });

        }, i * 500);

    }

}
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 500);
        }

    }, 2000);

});
    
