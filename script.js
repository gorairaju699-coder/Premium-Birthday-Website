// Show surprise section
function showSurprise() {

    document.getElementById("surprise").style.display = "block";

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    document.getElementById("music").play();
}
function showGallery() {
    document.getElementById("gallery").style.display = "block";
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
function openCard(){

    document.querySelector(".gift-card").classList.toggle("open");

}
