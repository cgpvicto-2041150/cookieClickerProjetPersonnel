let biscuitsTotal = 0;
const compteur = document.getElementsByClassName("pro")[0];
const biscuit = document.getElementsByClassName("biscuit-btn")[0];
const curseur = document.getElementById("souris");
const souris = document.getElementById("souris");



biscuit.addEventListener("click", () =>{
    biscuitsTotal++;
    compteur.innerHTML = biscuitsTotal + " biscuits"; 
});

