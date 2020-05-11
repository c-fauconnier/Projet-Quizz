1TL1- Projet Quizz

# Présentation de l'équipe

Christopher Fauconnier et Simon Kinet

# Description du projet

C'est un quizz à choix multiples basé sur des thèmes en rapport avec l'informatique. Il faut répondre à 10 questions accompagné de ces 3 choix. Une fois que l'utilisateur aura validé ces choix, un page résultat vous affichera la note ainsi qu'un commentaire de votre prestation.

# Aspects implémentés

**Backend :**

- Une base de données composée des questions, des choix, des réponses et des valeurs.
- Un serveur web qui fournit l'accès à la page html, css, js avec des webservices :
    - Un webservice pour initialiser les pages (nom : page, url, RAW)
       - C'est l'url de chaque page html
    - Un webservice pour récupérer le javascript lié (nom : js, url, RAW)
       - C'est l'url des pages javascript
    - un webservice pour récupérer le css lié (nom : css, url, RAW)
       - C'est l'url du css 
    - Un webservice pour récupérer les questions (nom : quest, JSON)
    - un webserivce pour récupérer les réponses aux questions (nom : qcm, JSON)
    - Un webservice pour récupérer les résultats possibles (nom : resultat, total, RAW)
        - C'est le total de points obtenu par l'utilisateur
    
**Frontend :**

- Une page web construite en html, css et js. Celle-ci appelle les webservices précédents afin de proposer ces services :
  - Réaliser le quizz
  - Cocher les choix 
  - Valider les réponses cochées
  - Obtenir un score
  


# Détail api rest

- Le webservice QCM a été réalisé par Christopher Fauconnier et il sert à récupérer les réponses afin de construire la page html, il renvoie sous format JSON.

- Le webservice resultat a été réalisé par Simon Kinet et il sert à récupérer les commentaires afin de construire la page résultat de fin.

- La fonction proc_quest sert à récupérer l'ID de la question ainsi que la question.

# Détail DB

- La table "choix" est composée de 4 colonnes.
    - cId : C'est l'indice pour  chaque réponse, il est unique.
    - reponse : Ce sont les réponses pour chaque question.
    - valeur : Si la valeur est à 0 c'est faux, si elle est à 1 c'est juste.
    - qId : C'est l'indice en rapport aux réponses, il est commun pour 3 réponses.
    
- La table "questions" est composée de 2 colonnes.
    - qId : C'est l'indice de la question.
    - quest : Ce sont les questions.
    
- La table "resultats" est composée 3 colonnes.
    - tId : L'indice de chaque commentaire.
    - titres : Ce sont les commentaires possibles en rapport au résultat.
    - points : Les grades de points possibles à obtenir.
    
- La table "valeurs" est composée de 2 colonnes.
    - valeur : Les valeurs possibles des réponses (0 et 1).
    - signification : Les significations des valeurs (FAUX et VRAI).
