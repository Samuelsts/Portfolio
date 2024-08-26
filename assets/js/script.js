
// scroll up
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrolltop')
    scroll.classList.toggle('active', window.scrollY > 450)
});


function backTop(){
    
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
};

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.scrolltop');
    scrollButton.addEventListener('click', backTop);
});

// duplicação do slide tec

document.addEventListener("DOMContentLoaded", function() {
    // Clona a div logos-slide
    let clone = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(clone);

    // Força o recálculo da largura antes de iniciar a animação
    const logosSlide = document.querySelectorAll(".logos-slide");
    logosSlide.forEach(slide => {
        slide.style.animation = "none";
        slide.offsetHeight; // Força o recálculo
        slide.style.animation = "";
    });
});


// Menu Mobile
const btnMenu= document.querySelector('.btn-abrir');
const menu= document.querySelector('.menu-mob');
const overlay= document.querySelector('.overlay-menu-mob');

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abr-mb')
});

menu.addEventListener('click',()=>{
    menu.classList.remove('abr-mb')
});

overlay.addEventListener('click',()=>{
    menu.classList.remove('abr-mb')
});

// classe active menu desktop
const iMenu=document.querySelectorAll('.m-item');

const remActive = ()=> {
    iMenu.forEach(i=>i.classList.remove('active'));
};

iMenu.forEach(i=>{
    i.addEventListener('click', ()=>{
        remActive();
        i.classList.add('active')
    });
});

// Projetos

const box = document.querySelector('.container');
const cards = document.querySelectorAll('.card-proj');
const btnNex = document.querySelector('.btn-ir');
const btnPre = document.querySelector('.btn-voltar');

let intervalo;
let contador = 0;

function avancarSlide() {
            contador++;
            if (contador > cards.length - 1) {
                contador = 0;
            }
            atualizarSlider();
        }

        function voltarSlide() {
            contador--;
            if (contador < 0) {
                contador = cards.length - 1;
            }
            atualizarSlider();
        }

        function atualizarSlider() {
            box.style.transform = `translateX(${-contador * 400}px)`;
        }

        function iniIntervalo() {
            intervalo = setInterval(avancarSlide, 2000);
        }

        function paraIntervalo() {
            clearInterval(intervalo);
        }

        btnNex.addEventListener('click', () => {
            paraIntervalo();
            avancarSlide();
            iniIntervalo();
        });

        btnPre.addEventListener('click', () => {
            paraIntervalo();
            voltarSlide();
            iniIntervalo();
        });

        cards.forEach(card => {
            card.addEventListener("mouseover", paraIntervalo);
            card.addEventListener("mouseout", iniIntervalo);
        });

        iniIntervalo();

// const box =document.querySelector('.container');
// const cards= document.querySelectorAll('.card-proj');
// const btnNex= document.querySelector('btn-ir');
// const btnPre= document.querySelector('btn-voltar');

// let intervalo
// let contador= 0;
// function slider (){
//     contador++;
//     if(contador > cards.length -1){
//         contador=0;
//     }
//     box.style.transform =`translateX(${-contador * 400}px)`;
// }

// btnNex.addEventListener('click',()=>{
//     if(contador > cards.length -1){
//         contador=0;
//     }
//     box.style.transform =`translateX(${-contador * 400}px)`;
// })

// function iniIntervalo(){
//    intervalo =setInterval(slider,2000);
// }
// function paraIntervalo(){
//     clearInterval(intervalo)
// }
// iniIntervalo()

// cards.forEach(card=>{
//     card.addEventListener("mouseover",paraIntervalo)
//     card.addEventListener("mouseout",iniIntervalo)
// })