CREATE PROCEDURE "DBA"."proc_quest"()
result (numQst integer, question char(100))
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select qId, quest 
    from DBA.questions
END
