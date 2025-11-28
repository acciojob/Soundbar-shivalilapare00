const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const container = document.getElementById("buttons");
let currentAudio = null;

// Create buttons + audio elements in DOM
sounds.forEach(name => {
    // Create audio element in DOM
    const audio = document.createElement("audio");
    audio.id = name;
    audio.src = `sounds/${name}.mp3`;
    document.body.appendChild(audio);

    // Create button
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = name;

    btn.addEventListener("click", () => {
        stopAll();
        currentAudio = document.getElementById(name);
        currentAudio.play();
    });

    container.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopAll);

container.appendChild(stopBtn);

// Stop all audio
function stopAll() {
    sounds.forEach(name => {
        const a = document.getElementById(name);
        a.pause();
        a.currentTime = 0;
    });
}
