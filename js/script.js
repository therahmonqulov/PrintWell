// --- Header ---
const headerButton = document.getElementById('headerLinkButton');
const headerMenu = document.getElementById('headerMenu');
const openBtn = headerButton?.querySelector('.menu-open');
const closeBtn = headerButton?.querySelector('.menu-close');

if (headerButton && headerMenu) {
    headerButton.addEventListener('click', () => {
        const isOpen = headerMenu.classList.toggle('active');
        // display: block/none o'rniga klass orqali boshqarish tezroq ishlaydi
        if (openBtn && closeBtn) {
            openBtn.style.display = isOpen ? 'none' : 'block';
            closeBtn.style.display = isOpen ? 'block' : 'none';
        }
    });
}

// --- Video ---
const video = document.getElementById('myVideo');
const myMobVideo = document.querySelector(".iframe-video-mob");
const playBtn = document.getElementById('playBtn');
const iframeVideoText = document.querySelector(".iframe_video_text");

if (playBtn) {
    playBtn.addEventListener('click', () => {
        // Video mavjudligini tekshirish (Error prevent)
        if (video) {
            video.play();
            video.setAttribute("controls", "controls");
        }
        if (myMobVideo) {
            myMobVideo.play();
            myMobVideo.setAttribute("controls", "controls");
        }
        
        playBtn.style.display = "none";
        if (iframeVideoText) iframeVideoText.style.display = "none";
    });
}

// --- FAQ Item (Optimallashtirilgan) ---
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Barcha elementlarni yopish
        faqItems.forEach((el) => {
            el.classList.remove("active");
            const icon = el.querySelector(".toggle-icon");
            if (icon) icon.textContent = "+"; // Yopiq holatda +
        });

        // Agar bosilgani avval ochiq bo'lmagan bo'lsa, uni ochish
        if (!isActive) {
            item.classList.add("active");
            const activeIcon = item.querySelector(".toggle-icon");
            if (activeIcon) activeIcon.textContent = "-"; // Ochiq holatda -
        }
    });
});