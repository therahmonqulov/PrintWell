// header
const headerButton = document.getElementById('headerLinkButton');
const headerMenu = document.getElementById('headerMenu');

headerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});

// video
const video = document.getElementById('myVideo');
const myMobVideo = document.querySelector(".iframe-video-mob")
const playBtn = document.getElementById('playBtn');
const iframeVideoText = document.querySelector(".iframe_video_text")

playBtn.addEventListener('click', () => {
    myMobVideo.play();
    video.play();
    video.setAttribute("controls", "controls");
    playBtn.style.display = "none";
    iframeVideoText.style.display = "none"
});
// Video tugaganda play tugmasi yana chiqishi
video.addEventListener('ended', () => {
    playBtn.style.display = "flex";
    video.removeAttribute("controls");
});

// faq-item
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const icon = item.querySelector(".toggle-icon");

    item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((el) => {
            el.classList.remove("active");
            el.querySelector(".toggle-icon").textContent = "-";
        });

        if (!isActive) {
            item.classList.add("active");
            icon.textContent = "+";
        }
    });
});


