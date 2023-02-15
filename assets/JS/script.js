const imgbx = document.querySelector('.imgbx');
const slides = imgbx.querySelectorAll('img');
var i = 0;


function nextSlide() {
    slides[i].classList.remove('ativo');
    i = (i + 1) % slides.length;
    slides[i].classList.add('ativo');


}

function prevSlide() {
    slides[i].classList.remove('ativo');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('ativo');
}

setInterval (nextSlide, 5000);

