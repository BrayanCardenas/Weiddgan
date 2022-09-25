// Animación textos
let animado = document.querySelectorAll(".animado");
let animadodos = document.querySelectorAll(".animadodos");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scroll = document.documentElement.scrollTop;

    for (var i=0; i < animadodos.length; i++) {
        let alturaAnimadodos = animadodos[i].offsetTop;
        if(alturaAnimadodos - 600 < scrollTop) {
            animadodos[i].style.opacity = 1 ;
            animadodos[i].classList.add("mostrarDer");
        }
    }
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 400 < scroll) {
            animado[i].style.opacity = 1 ;
            animado[i].classList.add("mostrarIzq");
        }
    }
}

window.addEventListener('scroll', mostrarScroll); 

