const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth; // Breite eines einzelnen Slides
    const transformValue = -index * slideWidth + 'px';
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    // Aktualisiert die "transform" CSS-Eigenschaft
    document.querySelector('.slides').style.transform = `translateX(${transformValue})`;
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

prevButton.addEventListener("click", () => {
    console.log("Previous button clicked.");
    previousSlide();
});

nextButton.addEventListener("click", () => {
    console.log("Next button clicked.");
    nextSlide();
});

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    setInterval(nextSlide, 15000); // wechselt slide alle 15 sekunden
});
