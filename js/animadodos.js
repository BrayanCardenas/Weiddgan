let animadodos = document.querySelectorAll(".animadodos");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadodos.length; i++) {
        let alturaAnimadodos = animadodos[i].offsetTop;
        if(alturaAnimadodos - 600 < scrollTop) {
            animadodos[i].style.opacity = 1 ;
            animadodos[i].classList.add("mostrarDer");
        }
    }
}

window.addEventListener('scroll', mostrarScroll); 

