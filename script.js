const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

let currentAudio = null;

// Create sound buttons
sounds.forEach((name) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = name;

    btn.addEventListener("click", () => {
        playSound(name);
    });

    buttonsDiv.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSound);

buttonsDiv.appendChild(stopBtn);


// Functions
function playSound(name) {
    stopSound();

    currentAudio = new Audio(`sounds/${name}.mp3`);

    currentAudio.play().catch(() => {
        console.log("Audio failed to play (Cypress might block autoplay)");
    });
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
