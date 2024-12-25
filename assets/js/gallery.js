const backToTopButton = document.getElementById("return");

function showBackToTopButton() {
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
}

window.addEventListener('scroll', showBackToTopButton);