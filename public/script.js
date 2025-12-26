// video
const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    video.play();
    video.setAttribute("controls", "controls");
    playBtn.style.display = "none";
});

// Video tugaganda play tugmasi yana chiqishi
video.addEventListener('ended', () => {
    playBtn.style.display = "flex";
    video.removeAttribute("controls");
});
