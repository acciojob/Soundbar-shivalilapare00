//your JS code here. If required.
// List of your sound files (place them in /sounds/ folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

// Create a button for each sound
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        playSound(sound);
    });

    buttonsContainer.appendChild(btn);
});

// Play selected sound
function playSound(soundName) {
    // Stop any previous audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Load new audio
    currentAudio = new Audio(`sounds/${soundName}`);
    currentAudio.play();
}

// Stop button
document.getElementById("stopBtn").addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

