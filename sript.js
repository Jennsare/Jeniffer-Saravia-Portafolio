let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia >= 300){
        let barras = document.getElementsByClassName("progreso");
        barras[0].classList.add("javascript");
        barras[1].classList.add("htmlcss");
        barras[2].classList.add("photoshop");
        barras[3].classList.add("wordpress");
        barras[4].classList.add("drupal");
        barras[5].classList.add("comunicacion");
        barras[6].classList.add("trabajo");
        barras[7].classList.add("creatividad");
        barras[8].classList.add("dedicacion");
        barras[9].classList.add("proyectos");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
