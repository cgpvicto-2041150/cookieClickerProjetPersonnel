let biscuitsTotal = 0; //A STOCKER
let parsecondeNb = 0; //A STOCKER
let parclicNb = 1; //A STOCKER
let seconde = 0;


const compteur = document.getElementsByClassName("pro")[0];

const biscuit = document.getElementsByClassName("biscuit-btn")[0];
const curseur = document.getElementById("curseur");
const souris = document.getElementById("souris");
const sauvegarde= document.getElementById("sauv");
const parSeconde = document.getElementById("parSeconde");
const parClic = document.getElementById("parClic");
const prixNbClic = document.getElementById("prixNbClic");
const prixNbCurseur = document.getElementById("prixNbCurseur");


prixNbCurseur.innerHTML = CalculePrixCurseur() + " biscuit(s)";
prixNbClic.innerHTML = CalculePrixClic() + " biscuit(s)";

biscuit.addEventListener("click", () =>{
    biscuitsTotal+=parclicNb;
    compteur.innerHTML = biscuitsTotal + " biscuits"; 
    verifierNombreBiscuitsCurseur();
    verifierNombreBiscuitsClic();
});

sauvegarde.addEventListener("click", ()=>{
    localStorage.setItem('biscuits', biscuitsTotal);
    localStorage.setItem('parClic', parclicNb);
    localStorage.setItem('curseur', parsecondeNb);
});

const prixCurseur = CalculePrixCurseur();
//Achat curseur
curseur.addEventListener("click", () =>{

    if(biscuitsTotal >= prixCurseur){ //aide au débuggage avec ChatGPT //aide au débuggage avec ChatGPT(///OpenAI. (2025). ChatGPT 
                                                                        /// (version GPT-5.1) [Modèle massif de langage]. 
                                                                        /// https://chat.openai.com)
        
        biscuitsTotal -= prixCurseur;
        parsecondeNb++;
        compteur.innerHTML = biscuitsTotal + " biscuits";

        parSeconde.innerHTML = "par seconde :  " +  parsecondeNb;

        const prochainPrix = CalculePrixCurseur();
        prixNbCurseur.innerHTML = " " + prochainPrix + " biscuits";
    }
     verifierNombreBiscuitsCurseur();
    verifierNombreBiscuitsClic()

});

const prixSouris = CalculePrixClic();

//Achat souris
souris.addEventListener("click", () =>{

    if(biscuitsTotal >= prixSouris){ //aide au débuggage avec ChatGPT(///OpenAI. (2025). ChatGPT 
                                                                        /// (version GPT-5.1) [Modèle massif de langage]. 
                                                                        /// https://chat.openai.com)
        biscuitsTotal -= prixSouris;
        parclicNb++;
        compteur.innerHTML = biscuitsTotal + " biscuits";

        parClic.innerHTML = "par click : " + parclicNb;

        const prochainPrix = CalculePrixClic();
        prixNbClic.innerHTML = prochainPrix + " biscuit(s)";
    }
    verifierNombreBiscuitsCurseur();
    verifierNombreBiscuitsClic();
});



setInterval(()=>{
    biscuitsTotal += parsecondeNb;
    compteur.innerHTML = biscuitsTotal +" biscuits"
}, 1000);


//Code fourni par le prof
function CalculePrixCurseur(){
    const base =50;
    const alpha = 0.25;
    const beta = 1.05;

    const totalCurseur = parsecondeNb;
    const prix = base * Math.pow(1+alpha, Math.pow(totalCurseur, beta));
    return Math.round(prix);
}

//Code fourni par le prof
function CalculePrixClic(){
    const base = 70;
    const alpha = 0.25;
    const beta = 1.05;
    const totalClic = parclicNb - 1;

    const prix = base * Math.pow(1 + alpha, Math.pow(totalClic, beta));
    return Math.round(prix);
}


function verifierNombreBiscuitsCurseur(){
    const prixCurseurActuel = CalculePrixCurseur(); //ChatGPT
    if(biscuitsTotal >= prixCurseurActuel){
        curseur.style.background = "black";
    } else{
        curseur.style.background = "#80614dec";
    }
}

function verifierNombreBiscuitsClic(){
    const prixSourisActuel = CalculePrixClic(); //ChatGPT
    if(biscuitsTotal >= prixSourisActuel){
        souris.style.background = "black";
    } else{
        souris.style.background = "#80614dec";
    }
}

/// Code généré par : OpenAI. (2025). ChatGPT 
/// (version GPT-5.1) [Modèle massif de langage]. 
/// https://chat.openai.com

if(localStorage.getItem('biscuits') !==null){
    biscuitsTotal = parseInt(localStorage.getItem('biscuits'));
    parclicNb = parseInt(localStorage.getItem('parClic'));
    parsecondeNb = parseInt(localStorage.getItem('curseur'));

    compteur.innerHTML = biscuitsTotal + " biscuits";
    parSeconde.innerHTML = "par seconde :  " +  parsecondeNb;
    parClic.innerHTML = "par click : " + parclicNb;

    prixNbCurseur.innerHTML = CalculePrixCurseur() + " biscuits";
    prixNbClic.innerHTML = CalculePrixClic() + " biscuits";

    verifierNombreBiscuitsCurseur();
    verifierNombreBiscuitsClic();
}

//localStorage.clear();