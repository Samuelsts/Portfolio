
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

let  clone= document.querySelector(".logos-slide").cloneNode(true)
    document.querySelector(".logos").appendChild(clone);