"use strict";
document.addEventListener('DOMContentLoaded', Result);      //au chargement de la page, utilisation de la fonction Result().
const COOKIE = document.cookie;     //on créé une constante récupérant les valeurs du cookie de la page précédente (Quizz).
let html = "";      //variable globale qu'on déclare à vide.

function Result(){      //on regarde la longueur du cookie (qui est un string)
    if(COOKIE.length == 2){
        let char = COOKIE.split('');        //on créé un tableau de STRING avec les valeurs de COOKIE.
        let xhr = new XMLHttpRequest();
        xhr.open("get","http://localhost:80/resultat?total="+char[1],true);     //on récupère la valeur obtenue après le modulo (voir ajax-quizz.js) avec char[1], char[0] étant la valeur pouvant être impaire.
        xhr.onload = remplirResult;
        xhr.send();
    }
    else if(COOKIE.length == 4){        //si le user a obtenu 10/10, la valeur de COOKIE est celle-ci : "1010"
        let char = COOKIE.split('');        ////on créé un tableau de STRING avec les valeurs de COOKIE.
        let xhr = new XMLHttpRequest();
        xhr.open("get","http://localhost:80/resultat?total="+10,true);          //on ajoute 10 mais on aurait pu utiliser ceci: "..."+char[0]+char[1]
        xhr.onload = remplirResult;
        xhr.send();
    }
}

function remplirResult(){
    let reponse = this.responseText;        //on transforme en texte les données reçues de la database.
    zoneText(reponse);          //on passe la variable reponse en paramètre afin d'obtenir de l'html.
    document.getElementById("zoneResult").innerHTML = html;
    document.cookie = "";
}

function zoneText(valeur){      //c'est cette fonction qui va afficher une phrase suite à nos résultats dans l'html.
    /*on réutilise les conditions employées dans la fonction Result().
    * Le fonctionnement est similaire avec les char[0],etc.*/
    if(COOKIE.length == 2){
        let char = COOKIE.split('');
        html ="<p> Vous avez la note de : "+char[0]+"/10</p><p><b>"+valeur+"</p>";
        return html;
    }
    else if(COOKIE.length == 4){
        let char = COOKIE.split('');
        html ="<p> Vous avez la note de : "+10+"/10</p><p><b>"+valeur+"</p>";       //ici aussi, on aurait pu mettre: ...+char[0]+char[1]+..., plutôt que ...+10+....
        return html;
    }
}
