// Show surprise section
function showSurprise() {
    document.getElementById("surprise").style.display = "block";

    const music = document.getElementById("music");
    music.currentTime = 0;

    music.play().catch(error => {
        console.log(error);
        alert("Music could not be played.");
    });
}

function showGallery() {
    document.getElementById("gallery").style.display = "block";
}
