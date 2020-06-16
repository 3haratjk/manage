const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('nav');

menuIcon.addEventListener('click', ()=>{
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    navLinks.style.display = 'flex';
})

closeIcon.addEventListener('click', ()=>{
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    navLinks.style.display = 'none';
})


const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');

const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');

const slides = [slide1, slide2, slide3];
const dots = [dot1, dot2, dot3];

let showSlide = 1;

slides.forEach((slide, i) =>{
    dots[i].style.backgroundColor = '#ff9900';
    if(i != showSlide){
        slide.style.display = 'none';
        dots[i].style.backgroundColor = '#eeeeee';
    }
})

setInterval(() => {
    showSlide++;
    slide();
}, 5000);

function slide(){
    if(showSlide>2) showSlide = 0;
    if(showSlide<0) showSlide = 2;
    slides[showSlide].style.display = 'flex';
    dots[showSlide].style.backgroundColor = '#ff9900';
    slides.forEach((slide, i) =>{
        if(i != showSlide){
            slide.style.display = 'none';
            dots[i].style.backgroundColor = '#eeeeee';
        }
    })
}

dot1.addEventListener('click', ()=>{
    showSlide = 0;
    slide();
});
dot2.addEventListener('click', ()=>{
    showSlide = 1;
    slide();
});
dot3.addEventListener('click', ()=>{
    showSlide = 2;
    slide();
});