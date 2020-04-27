# Projet-Quizz
Nous aimerions créer une page constituée de plusieurs questions à choix multiples sous la forme d'un quizz comme ceci : "Quel genre d'informaticien es-tu ?".
Les tables SQL serviraient à stocker les différents choix dans les cases à cocher sous chaque question ainsi que les résultats lors de la validation des données.

Afin de réaliser notre objectif, nous avons besoin d'un formulaire html généré dynamiquement grâce à du javascript qui récupère les données de nos tables SQL. Ce formulaire est de type radio pour faciliter la gestion du QCM. 

Pour le côté back-end, nous avons des webservices recevant en paramètre l'url de la page pour s'y lier. 4 tables SQL : résultats, choix, valeurs et questions. Les tables questions->résultats->valeurs sont jointes grâces à des primary keys et des foreign keys, seule la table résultats est indépendante car elle stocke les textes à afficher lors de la validation du questionnaire et après le calcul de notre js.
