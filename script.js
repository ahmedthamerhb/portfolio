// ==========================================
// 1. الانتقال السلس بين الصفحات (Page Transitions)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // تفعيل ظهور الصفحة بسلاسة عند التحميل (Fade In)
    document.body.classList.add("fade-in");

    // إضافة تأثير الاختفاء السلس (Fade Out) عند التنقل بين الملفات
    const pageLinks = document.querySelectorAll("a[href$='.html']");
    pageLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetUrl = link.href;

            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
});

// ==========================================
// 2. إظهار وإخفاء زر العودة للأعلى عند التمرير
// ==========================================
window.addEventListener('scroll', function () {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// ==========================================
// 3. دالة الصعود للأعلى عند الضغط على الزر
// ==========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}