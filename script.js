
// Hero typing
const text = "You are the best friend ever ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.onload = function () {
    typeWriter();

    // Loader hide
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 2000);
};

// Surprise
function showSurprise() {

    const gift = document.getElementById("giftBox");

    if (gift) {
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
            particleCount: 250,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    const music = document.getElementById("music");

    music.currentTime = 0;

    music.play().catch(() => {});
}

// Gallery

const photos = [
    "image/photo1.jpeg",
    "image/photo2.jpeg",
    "image/photo3.jpeg",
    "image/photo4.jpeg"
];

let current = 0;
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

function nextPhoto() {

    current++;

    if (current >= photos.length)
        current = 0;

    document.getElementById("slider").src = photos[current];

}

function prevPhoto() {

    current--;

    if (current < 0)
        current = photos.length - 1;

    document.getElementById("slider").src = photos[current];

}

// Letter

function showLetter() {

    document.getElementById("letterSection").style.display = "block";

    document.getElementById("letterSection").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        document.getElementById("thanksSection").style.display = "block";

        document.getElementById("thanksSection").scrollIntoView({
            behavior: "smooth"
        });

        fireworkShow();

    }, 1000);

}

// Hearts

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 800);

// Firework

function fireworkShow() {

    if (typeof confetti !== "function") return;

    for (let i = 0; i < 10; i++) {

        setTimeout(() => {

            confetti({

                particleCount: 200,

                spread: 120,

                startVelocity: 55,

                origin: {

                    x: Math.random(),

                    y: Math.random() * 0.6

                }

            });

        }, i * 400);

    }

}
