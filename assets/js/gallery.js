function showBackToTopButton() {
    const backToTopButton = document.getElementById("return");

    if (window.scrollY > 200) {
        if (!backToTopButton.classList.contains('show')) {
            backToTopButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.classList.add('show');
            }, 10);
        }
    } else {
        if (backToTopButton.classList.contains('show')) {
            backToTopButton.classList.remove('show');
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 300);
        }
    }
};

window.addEventListener('scroll', showBackToTopButton);


//lazy loading & fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('visible');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1
    });

    images.forEach(img => observer.observe(img));
});
