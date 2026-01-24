// ================================================
// Header mobil menu toggle
// ================================================
const headerButton = document.getElementById('headerLinkButton');
const headerMenu   = document.getElementById('headerMenu');

if (headerButton && headerMenu) {
    headerButton.addEventListener('click', (e) => {
        // agar bosilgan joy button ichida bo'lmasa ham ishlamasligi uchun
        if (!e.target.closest('button')) return;

        headerMenu.classList.toggle('active');
        
        // display ni JS da o'zgartirish o'rniga CSS da boshqarish tavsiya etiladi:
        // .header-menu.active ~ #headerLinkButton .menu-open  { display: none; }
        // .header-menu.active ~ #headerLinkButton .menu-close { display: block; }
        
        // Agar CSS da qilish imkoni bo'lmasa, quyidagi ikki qatorni saqlashingiz mumkin:
        const openBtn  = headerButton.querySelector('.menu-open');
        const closeBtn = headerButton.querySelector('.menu-close');
        
        if (openBtn && closeBtn) {
            const isOpen = headerMenu.classList.contains('active');
            openBtn.style.display  = isOpen ? 'none' : 'block';
            closeBtn.style.display = isOpen ? 'block' : 'none';
        }
    });
}

// ================================================
// Video play tugmasi
// ================================================
const playBtn       = document.getElementById('playBtn');
const desktopVideo  = document.getElementById('myVideo');
const mobileVideo   = document.querySelector('.iframe-video-mob');
const videoText     = document.querySelector('.iframe_video_text');

if (playBtn) {
    playBtn.addEventListener('click', () => {
        // qaysi ekran o'lchamida ekanligiga qarab faqat bitta videoni ishga tushiramiz
        const isMobile = window.innerWidth <= 760;
        const activeVideo = isMobile ? mobileVideo : desktopVideo;

        if (activeVideo) {
            activeVideo.play().catch(() => {
                // autoplay bloklangan bo'lsa xato chiqmasin
                console.log("Video autoplay bloklandi");
            });
            activeVideo.setAttribute('controls', 'controls');
        }

        playBtn.style.display = 'none';
        if (videoText) videoText.style.display = 'none';
    });
}

// ================================================
// FAQ Accordion – optimallashtirilgan versiya
// ================================================
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
        const willBeActive = !item.classList.contains('active');

        // Faqat hozir ochiq bo'lganlarni yopamiz (barchasini emas)
        // Bu forced reflow ni kamaytiradi
        document.querySelectorAll('.faq-item.active').forEach(el => {
            if (el !== item) {
                el.classList.remove('active');
                const icon = el.querySelector('.toggle-icon i');
                if (icon) icon.className = 'fa-solid fa-plus';
            }
        });

        // Yangi holatni o'rnatamiz
        if (willBeActive) {
            item.classList.add('active');
            const icon = item.querySelector('.toggle-icon i');
            if (icon) icon.className = 'fa-solid fa-minus';
        } else {
            item.classList.remove('active');
            const icon = item.querySelector('.toggle-icon i');
            if (icon) icon.className = 'fa-solid fa-plus';
        }
    });
});

// ================================================
// Qo'shimcha: sahifa yuklanganda faqat birinchi FAQ ochiq bo'lishini xohlasangiz
// (ixtiyoriy)
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    const firstItem = document.querySelector('.faq-item');
    if (firstItem) {
        firstItem.classList.add('active');
        const icon = firstItem.querySelector('.toggle-icon i');
        if (icon) icon.className = 'fa-solid fa-minus';
    }
});