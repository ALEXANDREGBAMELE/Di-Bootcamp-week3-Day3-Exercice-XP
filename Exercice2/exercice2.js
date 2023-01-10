let container = document.getElementById("container");
let animate = document.getElementById("animate");
let i ;

let gauche = 0;

function move(){
    gauche += 1
    animate.style.left = `${gauche}px`
    if(gauche >= container.offsetWidth - animate.offsetWidth){
        clearInterval(i)
    }
}

function myMove() {
    i = setInterval(move,10)
}


