// header
const headerButton = document.getElementById('headerLinkButton');
const headerMenu = document.getElementById('headerMenu');
const headerButtonIcon = headerButton.querySelector("i");

headerButton.addEventListener('click', () => {
    const isOpen = headerMenu.classList.toggle('active');

    if (isOpen) {
        headerButtonIcon.classList.remove("fa-bars-staggered");
        headerButtonIcon.classList.add("fa-xmark");
    } else {
        headerButtonIcon.classList.remove("fa-xmark");
        headerButtonIcon.classList.add("fa-bars-staggered");
    }
});


// video
const video = document.getElementById('myVideo');
const myMobVideo = document.querySelector(".iframe-video-mob")
const playBtn = document.getElementById('playBtn');
const iframeVideoText = document.querySelector(".iframe_video_text")

playBtn.addEventListener('click', () => {
    video.play();
    video.setAttribute("controls", "controls");
    playBtn.style.display = "none";
    iframeVideoText.style.display = "none"

    myMobVideo.play();
    myMobVideo.setAttribute("controls", "controls");
});
// Video tugaganda play tugmasi yana chiqishi
video.addEventListener('ended', () => {
    playBtn.style.display = "flex";
    video.removeAttribute("controls");

    myMobVideo.removeAttribute("controls");
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


