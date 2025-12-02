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

prixNbCurseur.innerHTML = CalculePrixCurseur() + " biscuit(s)";

biscuit.addEventListener("click", () =>{
    biscuitsTotal+=parclicNb;
    compteur.innerHTML = biscuitsTotal + " biscuits"; 
});

//Achat curseur
curseur.addEventListener("click", () =>{

    const prix = CalculePrixCurseur();
    if(biscuitsTotal >= prix){
        biscuitsTotal -= prix;
        parsecondeNb++;
        compteur.innerHTML = biscuitsTotal + " biscuits";

        parSeconde.innerHTML = "par seconde :  " +  parsecondeNb;

        const prochainPrix = CalculePrixCurseur();
        prixNbCurseur.innerHTML = " " + prochainPrix + " biscuits";
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

function CalculePrixCurseur(){
    const base =50;
    const alpha = 0.25;
    const beta = 1.05;

    const totalCurseur = parsecondeNb;
    const prix = base * Math.pow(1+alpha, Math.pow(totalCurseur, beta));
    return Math.round(prix);
}