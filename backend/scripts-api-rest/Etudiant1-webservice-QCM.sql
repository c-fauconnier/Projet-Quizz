CREATE PROCEDURE "DBA"."QCM"()
RESULT (choix integer, texte char(40), points TINYINT , numQuestion INTEGER , question char(100))
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select cId, reponse, valeur, Q.qId, quest 
    from DBA.choix natural join DBA.questions as Q
END
