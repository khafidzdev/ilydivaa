// Generate random stars
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
}

// Generate falling comets
const cometsContainer = document.getElementById("comets");
for (let i = 0; i < 5; i++) {
    const comet = document.createElement("div");
    comet.className = "comet";
    comet.style.top = Math.random() * 100 + "%";
    comet.style.left = Math.random() * 100 + "%";
    comet.style.animationDuration = Math.random() * 5 + 3 + "s"; // random comet speed
    cometsContainer.appendChild(comet);
}

// Display the message after flower animation completes
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('message').style.opacity = 1; // Show the message
    }, 8000); // Show the message after 8 seconds (when flower finishes blooming)
});
