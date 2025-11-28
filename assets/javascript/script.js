let biscuitsTotal = 0;
let parsecondeNb = 0;
let parclicNb = 1;
let seconde = 0;

const compteur = document.getElementsByClassName("pro")[0];

const biscuit = document.getElementsByClassName("biscuit-btn")[0];
const curseur = document.getElementById("curseur");
const souris = document.getElementById("souris");

const parSeconde = document.getElementById("parSeconde");
const parClic = document.getElementById("parClic");
const prixNbClic = document.getElementById("prixNbClic");
const prixNbCurseur = document.getElementById("prixNbCurseur");

biscuit.addEventListener("click", () =>{
    biscuitsTotal+=parclicNb;
    compteur.innerHTML = biscuitsTotal + " biscuits"; 
});

//Achat curseur
curseur.addEventListener("click", () =>{
    if(parsecondeNb<=biscuitsTotal){
        parsecondeNb++;
        parSeconde.innerHTML = "par seconde : " + parsecondeNb;
        prixNbCurseur.innerHTML = " "+ parsecondeNb + " biscuit(s)";
    }
    
});

//Achat souris
souris.addEventListener("click", () =>{
    if(parclicNb<=biscuitsTotal){
        parclicNb++;
        parClic.innerHTML = "par click : " + parclicNb;
        prixNbClic.innerHTML = " " + parclicNb + " biscuit(s)";
    }
    
});

setInterval(()=>{
    biscuitsTotal += parsecondeNb;
    compteur.innerHTML = biscuitsTotal +" biscuits"
}, 1000);
