let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'block';
            slide.style.animation = 'slideInRight 1s forwards';
        } else {
            slide.style.display = 'none';
        }
    });
    index = (index + 1) % slides.length;
}

window.onload = function() {
    setInterval(showSlide, 5000);
};