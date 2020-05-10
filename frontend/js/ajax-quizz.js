"use strict";

document.addEventListener('DOMContentLoaded', initQst);
document.addEventListener('DOMContentLoaded', initQCM);

let listeQuestion ="";
let stock = 0;
const ID_ZONE_QUEST= "zoneQuest";
const ID_ZONE_REP="zoneRep";

function gid(id){
    return document.getElementById(id);
}

function initQst(){
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://localhost:80/quest",true);
    xhr.onload = remplirQst;
    xhr.send();
}

function remplirQst(){
    let reponse = JSON.parse(this.responseText);
    listeQst(reponse);
    gid(ID_ZONE_QUEST).innerHTML = listeQuestion;
}

function listeQst(api){
    let j=1;
    for (let i=0;i<api.length;i++){
        listeQuestion += "<div id=qst-"+api[i].numQst+">"+j+") "+api[i].question+"</div><br>";
        j++;
    }
}


function initQCM(){
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://localhost:80/qcm",true);
    xhr.onload = remplirChoix;
    xhr.send();
}

function remplirChoix(){
    let reponse = JSON.parse(this.responseText);
    console.log(reponse);

    listeRep(reponse);
    gid(ID_ZONE_REP).innerHTML = listeChoix;
}

function listeRep(api){
    for (let i=0;i<api.length;i++) { //boucle pour parcourir le tableau des choix.
        const div = document.getElementById("qst-"+api[i].numQuestion);
        const listeChoix = "<br><input type=\"radio\" name=choix-"+api[i].numQuestion+" id="+api[i].choix+" value="+api[i].points+" required><label for="+api[i].points+" class=\"choix\">"+api[i].texte+"</label><br>";
        div.innerHTML += listeChoix;
    }
}

/* Bouton de validation du formulaire */
function valider(event){
    event.preventDefault();
    getChecked();
    document.cookie += stock;
    window.open('page?url=resultat');
    return stock=0;
}

function getChecked(){
    for(let i=1;i<=30;i++){         //boucle pour obtenir la valeur des éléments cochés.
        if (document.getElementById(i).checked === true){
            stock += parseInt(document.getElementById(i).value);
        }
    }
    document.cookie = stock;
    if(stock % 2 === 1){        //si cette valeur est impaire, on la réduit de 1 (c'est nécessaire afin de faire fonctionner notre webservice).
        stock = stock - 1;
    }
    return stock;
}