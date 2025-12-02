// ===== TYPING EFFECT =====
const text = "John Riche Marchan";
let index = 0;
function typeEffect() {
    document.getElementById("typing").innerText = text.slice(0, index);
    index++;
    if(index <= text.length) { setTimeout(typeEffect, 120); }
}
window.onload = typeEffect;

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');

function handleReveal() {
    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if(position < screenHeight - 50){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);
