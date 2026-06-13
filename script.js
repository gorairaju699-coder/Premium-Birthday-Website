// Show surprise section
function showSurprise() {

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

music.currentTime = 0;

music.play()
.then(() => {
    console.log("Music started");
})
.catch((err) => {
    console.log(err);
});

}
function showGallery() {

    document.getElementById("gallery").style.display = "block";

    document.getElementById("videoSection").style.display = "block";

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

    setInterval(nextPhoto, 3000);

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

typeWriter();

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

    document.getElementById("slider").src = photos[current];
}

function prevPhoto() {

    current--;

    if (current < 0) {
        current = photos.length - 1;
    }

    document.getElementById("slider").src = photos[current];
}
function showLetter(){

    document.getElementById("letterSection").style.display = "block";

    document.getElementById("thanksSection").style.display = "block";

    document.getElementById("thanksSection").scrollIntoView({
        behavior:"smooth"
    });

}
window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
        },500);

    },2000);

};
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
