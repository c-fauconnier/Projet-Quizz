1TL1- Projet Quizz

Présentation de l'équipe

Christopher Fauconnier et Simon Kinet

Description du projet

C'est un quizz à choix multiples basé sur des thèmes en rapport avec l'informatique. Il faut répondre à 10 questions accompagné de ces 3 choix. Une fois que l'utilisateur aura validé ces choix, un page résultat vous affichera la note ainsi qu'un commentaire de votre prestation.

Aspects implémentés

Backend :

- Une base de données composée des questions, des choix, des réponses et des valeurs.
- Un serveur web qui fournit l'accès à la page html, css, js avec des webservices :
    - Un webservice pour initialiser les pages (nom : page, RAW)
    - Un webservice pour récupérer le javascript lié (nom : js, RAW)
    - un webservice pour récupérer le css lié (nom : css, RAW)
    - Un webservice pour récupérer les questions (nom : quest, JSON)
    - un webserivce pour récupérer les réponses aux questions (nom : qcm, JSON)
    - Un webservice pour récupérer les résultats possibles (nom : resultat, RAW)
    
Frontend : 

- Une page web construite en html, css et js. Celle-ci appelle les webservices précédents afin de proposer ces services :
  - Réaliser le quizz
  - Cocher les choix 
  - Valider les réponses cochées
  - Obtenir un score
  


Détail api rest

Le webserivce QCM a été réalisé par Christopher Fauconnier et il sert à récupérer les réponses afin de construire la page html, il renvoie sous format JSON.

Le webservice resultat a été réalisé par Simon Kinet et il sert à récupérer les commentaires afin de construire la page résultat de fin.

La fonction proc_quest dsert à récupérer l'ID de la question ainsi que la question.

Détail DB

Présenter les tables et les champs des tables SQL
