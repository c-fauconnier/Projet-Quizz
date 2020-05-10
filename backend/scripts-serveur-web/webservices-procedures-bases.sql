CREATE FUNCTION "DBA"."getPath"()
returns long varchar
deterministic
BEGIN
declare dbPath long varchar; 
declare dbName long varchar; 

set dbPath = (select db_property ('file'));
set dbName = (select db_property('name')) + '.db'; 
set dbPath = left(dbPath, length(dbPath)-length(dbName)); 

return dbPath;
END

CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
result(css long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/css'); 
select xp_read_file(DBA.getPath() || 'css\' || url);
END

CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
result(js long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/javascript');
select xp_read_file(DBA.getPath() || 'js\' || url); 
END

CREATE PROCEDURE "DBA"."http_getPage"(in nom varchar(20))
result (html long varchar)
begin 
    call sa_set_http_header( 'Content-Type', 'text/html' );
    select xp_read_file(DBA.getPath() || nom || '.html');
end

CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.http_getCSS(:url);

CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.http_getJS(:url);

CREATE SERVICE "page" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.http_getPage(:url);
