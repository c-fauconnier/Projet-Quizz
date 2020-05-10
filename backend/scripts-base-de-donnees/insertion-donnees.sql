insert into valeurs
(valeur, signification)
values
(0, 'FAUX'),
(1, 'VRAI');

insert into resultats
(tId,titres,points)
VALUES 
(1,'Félicitations ! L''informatique n''a plus de secret pour vous!',10),
(2,'Bien joué, vous avez presque la note maximale.',8),
(3,'Vous avez réussi mais essayez de vous améliorer !',6),
(4,'Vous avez presque la moitié des points, encore un peu d''efforts!',4),
(5,'Malheureusement, l''informatique ne semble pas être votre domaine mais ne baissez pas les bras!',2);
(6,'Hélas, c'est assez faible. Recommence pour faire mieux!',0);

insert into questions 
(qId, quest)
VALUES
(1, 'Lorqu''un logiciel fonctionne en arrière-plan, quel support utilise-il ?'),
(2, 'Où sont stockés les données ?'),
(3, 'Sur combien d''octets une adresse IPv4 est-elle codée ?'),
(4, 'Sur combien de bits une adresse IPv6 est-elle codée ?'),
(5, 'Lequel de ces langages est apparu en premier ?'),
(6, 'Quel mode de transmission est le plus rapide ?'),
(7, 'Que veut dire "SSD" ?'),
(8, 'Quelle est l''adresse passerelle par défaut d''un routeur sur un réseau privé ?'),
(9, 'Qu''est ce qui consomme le plus la bande passante ?'),
(10, 'Que signifie "HTML" ?');

insert into choix
(cId, reponse, valeur, qId)
VALUES
(1,'Mémoire ROM', 0, 1),
(2,'Mémoire RAM', 1, 1),
(3,'Disque Dur', 0, 1),
(4,'Processeur', 0, 2),
(5,'Disque Dur', 1, 2),
(6,'Carte graphique', 0, 2),
(7, '4', 1, 3),
(8, '8', 0, 3),
(9, '16', 0, 3),
(10, '32', 0, 4),
(11, '64', 0, 4),
(12, '128', 1, 4),
(13,'C', 1, 5),
(14, 'Java', 0, 5),
(15, 'Python', 0, 5),
(16, 'Câble coaxial', 0, 6),
(17, 'Fibre optique', 1, 6),
(18, 'Câble torsadé', 0, 6),
(19, 'Solid State Drive', 1, 7),
(20, 'Solid Snake Drive', 0, 7),
(21, 'Sensitive State Drive', 0, 7),
(22, '192.168.1.1', 1, 8),
(23, '172.198.1.1', 0, 8),
(24, '27.0.0.1', 0, 8),
(25, 'Youtube', 0, 9),
(26, 'Un appel messenger', 0, 9),
(27, 'Un téléchargement', 1, 9), 
(28, 'HypeText Markup Language', 0, 10),
(29, 'HyperText Markup Language', 1, 10),
(30, 'HyperText Mark Language', 0, 10);
