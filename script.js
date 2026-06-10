// Show surprise section
function showSurprise() {

    alert("showSurprise called");

    document.getElementById("surprise").style.display = "block";

    confetti({
        particleCount: 300,
        spread: 180
    });

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
