//Sessão menu
let hamb = document.querySelector('.bar-icon i');
let navBar = document.querySelector('.ul-bars');

hamb.addEventListener('click', ()=> {
    hamb.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    window.onscroll = () => {
        hamb.classList.remove('fa-times');
        navBar.classList.remove('active');
    }
} );


// sessão on/of
let onOff = document.querySelector('.on i');
onOff.addEventListener('click', ()=> {
    onOff.classList.toggle('fa-toggle-on');
    document.body.classList.toggle('light');
});


// sessão banner
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



const contentBx = document.querySelector('.contentBx');
const slidesText = contentBx.querySelectorAll('div');
var j = 0;


function nextSlideText() {
    slidesText[j].classList.remove('ativo');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('ativo');


}

function prevSlideText() {
    slidesText[j].classList.remove('ativo');
    j = (j - 1 + slidesText.length) % slidesText.length;
    slidesText[j].classList.add('ativo');
}

setInterval (nextSlide, 6000);
setInterval( nextSlideText, 6000);

