/* ---Nav--- */

const Sara= document.getElementById("personal")
const Diaz= document.querySelector(".sub-menu")


Sara.addEventListener('click', () => {
    Diaz.classList.toggle("abrir-menu");
});

/* -- Sobre mi--- */

const opener=document.getElementById("sobre_mi")
const historia= document.querySelector(".historia")

opener.addEventListener('click', (e) => {
    historia.classList.toggle("abrir-historia");
});


/* ---Experiencia Laboral--- */
const tit= document.getElementById("laboral")
const exp= document.querySelector(".experiencia")

tit.addEventListener('click', () => {
    exp.classList.toggle("abrir-experiencia")
})

/* ---Educación--- */

const educa= document.getElementById("edu")
const lic= document.querySelector(".licen")

educa.addEventListener('click', () => {
    lic.classList.toggle("abrir-edu")
})

/* ---Entrenamiento profesional--- */

const train= document.getElementById("prof")
const boss= document.querySelector(".training")

prof.addEventListener('click', () => {
    boss.classList.toggle("abrir-training")
})

/* ---Habilidades--- */


const nivel = document.getElementById("habilidades")
const dark = document.querySelector(".skills")

nivel.addEventListener('click', () => {
    dark.classList.toggle("abrir-habilidades")
})



/* ---Scroll--- */


function irArriba(pxPantalla){
    window.addEventListener('scroll',
    () => {
        var scroll= document.documentElement.scrollTop;
        var botonArriba= document.getElementById('botonArriba');

        if(scroll > pxPantalla){
            botonArriba.style.right= 30 + "px";

        } else{
            botonArriba.style.right= -100 + "px";
        }



    })
}

irArriba(300);