const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
if (!playing) {
music.play();
btn.textContent = "🔊";
} else {
music.pause();
btn.textContent = "🎵";
}
playing = !playing;
};
