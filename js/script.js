/* =========================
   HEADER MOBILE MENU
========================= */
(() => {
    const headerButton = document.getElementById('headerLinkButton');
    const headerMenu   = document.getElementById('headerMenu');

    if (!headerButton || !headerMenu) return;

    headerButton.addEventListener('click', (e) => {
        if (!e.target.closest('button')) return;

        headerMenu.classList.toggle('active');
        headerButton.classList.toggle('menu-opened');
    });
})();

/* =========================
   VIDEO PLAY BUTTON
========================= */
(() => {
    const playBtn   = document.getElementById('playBtn');
    const videoText = document.querySelector('.iframe_video_text');
    const desktopVideo = document.getElementById('myVideo');
    const mobileVideo  = document.querySelector('.iframe-video-mob');

    if (!playBtn) return;

    playBtn.addEventListener('click', () => {
        const isMobile = matchMedia('(max-width: 760px)').matches;
        const video = isMobile ? mobileVideo : desktopVideo;

        if (video && typeof video.play === 'function') {
            video.setAttribute('controls', 'controls');
            video.play().catch(() => {});
        }

        playBtn.classList.add('hidden');
        if (videoText) videoText.classList.add('hidden');
    });
})();

/* =========================
   FAQ ACCORDION
========================= */
(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    let activeItem = null;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.toggle-icon i');
        if (!question) return;

        question.addEventListener('click', () => {
            if (activeItem && activeItem !== item) {
                activeItem.classList.remove('active');
                const prevIcon = activeItem.querySelector('.toggle-icon i');
                if (prevIcon) prevIcon.className = 'fa-solid fa-plus';
            }

            const isActive = item.classList.contains('active');

            if (isActive) {
                item.classList.remove('active');
                if (icon) icon.className = 'fa-solid fa-plus';
                activeItem = null;
            } else {
                item.classList.add('active');
                if (icon) icon.className = 'fa-solid fa-minus';
                activeItem = item;
            }
        });
    });

    // Sahifa yuklanganda faqat birinchi FAQ ochiq bo‘lsin
    document.addEventListener('DOMContentLoaded', () => {
        const first = faqItems[0];
        if (!first) return;

        first.classList.add('active');
        const icon = first.querySelector('.toggle-icon i');
        if (icon) icon.className = 'fa-solid fa-minus';
        activeItem = first;
    });
})();
