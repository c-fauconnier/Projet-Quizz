"use strict";
document.addEventListener('DOMContentLoaded', Result);
const COOKIE = document.cookie;     //on récupère la valeur du résultat obtenu après le modulo, sur la page précédente.
let html = "";

function Result(){
    if(COOKIE.length == 2){
        let char = COOKIE.split('');
        let xhr = new XMLHttpRequest();
        xhr.open("get","http://localhost:80/resultat?total="+char[1],true);
        xhr.onload = remplirResult;
        xhr.send();
    }
    else if(COOKIE.length == 4){
        let char = COOKIE.split('');
        let xhr = new XMLHttpRequest();
        xhr.open("get","http://localhost:80/resultat?total="+10,true);
        xhr.onload = remplirResult;
        xhr.send();
    }
}

function remplirResult(){
    let reponse = this.responseText;

    zoneText(reponse);
    document.getElementById("zoneResult").innerHTML = html;
    document.cookie = "";
}

function zoneText(valeur){
    if(COOKIE.length == 2){
        let char = COOKIE.split('');
        html ="<p> Vous avez la note de : "+char[0]+"/10</p><p><b>"+valeur+"</p>";
        return html;
    }
    else if(COOKIE.length == 4){
        let char = COOKIE.split('');
        html ="<p> Vous avez la note de : "+10+"/10</p><p><b>"+valeur+"</p>";
        return html;
    }
}
