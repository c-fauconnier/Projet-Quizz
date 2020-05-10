"use strict";

//Lors du chargement du document, les fonctions initQst et initQCM vont se lancer.

document.addEventListener('DOMContentLoaded', initQst);
document.addEventListener('DOMContentLoaded', initQCM);

/* Déclaration des variables et constantes globales */

let listeQuestion ="";
let stock = 0;
const ID_ZONE_QUEST= "zoneQuest";
const ID_ZONE_REP="zoneRep";

function gid(id){       //fonction servant à retourner un élément par son id dans l'html via une variable passée en paramètre.
    return document.getElementById(id);
}

/*  Fonction principale au lancement de la page englobant 2 autres fonctions (remplirQst,listeQst.
*   Elle va permettre la création de questions dans l'HTML */

function initQst(){     //Requête XML employant le webservice 'quest' renvoyant les données de la table 'questions'.
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://localhost:80/quest",true);
    xhr.onload = remplirQst;
    xhr.send();
}

function remplirQst(){      //Sert à l'implémentation des questions créées dans 'listeQst()' dans le innerHTML de la page.
    let reponse = JSON.parse(this.responseText);        //on convertit le résultat du xhr en objet JS.
    listeQst(reponse);
    gid(ID_ZONE_QUEST).innerHTML = listeQuestion;       //on utilise les données de la variable 'listeQuestion' retournée auparavant.
}

function listeQst(api){
    let j=1;
    for (let i=0;i<api.length;i++){     //boucle parcourant tous les résultats de l'api.
        listeQuestion += "<div id=qst-"+api[i].numQst+">"+j+") "+api[i].question+"</div><br>";      //variable qui servira de code HTML, qu'on va incrémenter à chaque passage de la boucle afin de servir de base pour les futures questions.
        j++;    //on incrémente j après listeQuestion pour éviter un conflit de numéro dans le code HTML.
    }
}

/* Deuxième fonction lors du lancement de la page, il est important qu'elle s'exécute en seconde place.
   Elle va employer des fonctions permettant de lier des choix qu'on va créer aux questions désormais existantes.
 */
function initQCM(){     //Requête XML employant le webservice 'qcm' renvoyant les données de la table 'choix'.
    let xhr = new XMLHttpRequest();
    xhr.open("get","http://localhost:80/qcm",true);
    xhr.onload = remplirChoix;
    xhr.send();
}

function remplirChoix(){        //sert à modifier le innerHTML des questions créées dans initQst().
    let reponse = JSON.parse(this.responseText);
    listeRep(reponse);      //on appelle listeRep avec la variable reponse passée en paramètre.
    gid(ID_ZONE_REP).innerHTML = listeChoix;
}

function listeRep(api){
    for (let i=0;i<api.length;i++) { //boucle pour parcourir le tableau des choix.
        const div = document.getElementById("qst-"+api[i].numQuestion);     //on va chercher chaque question par son Id.
        const listeChoix = "<br><input type=\"radio\" name=choix-"+api[i].numQuestion+" id="+api[i].choix+" value="+api[i].points+" required><label for="+api[i].points+" class=\"choix\">"+api[i].texte+"</label><br>";
        div.innerHTML += listeChoix;        //modification du innerHTML de la constante div par la constante listeChoix.
    }
}

/* Bouton de validation du formulaire */
function valider(event){
    event.preventDefault();     //on bloque l'envoi du formulaire.
    getChecked();       //renvoie le nombre de bonnes réponses dans la variable stock.
    document.cookie += stock;       //on ajoute un nouveau cookie contenant la valeur de stock après le modulo 2.
    window.open('page?url=resultat');       //ouverture dans une nouvelle fenêtre de la page html : resultat.
    return stock=0;     //on réinitialise la valeur de stock pour éviter les erreurs lors d'un spam de validation de formulaire.
}

function getChecked(){
    for(let i=1;i<=30;i++){         //boucle pour obtenir la valeur des éléments cochés.
        if (document.getElementById(i).checked === true){
            stock += parseInt(document.getElementById(i).value);
        }
    }
    document.cookie = stock;    //on créé un cookie conservant la valeur (de type string) de stock avant le modulo.
    if(stock % 2 === 1){        //afin de faire fonctionner correctement notre webservice, la valeur de stock doit être paire. Si elle est impaire, on l'arrondit vers le bas.
        stock = stock - 1;
    }
    return stock;
}