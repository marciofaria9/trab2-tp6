use admin;

CREATE TABLE IF NOT EXISTS partida (
   
    Id Integer PRIMARY KEY,
    data_partida date not null,
    selecao_mandante varchar(30) not null,
    selecao_visitante varchar(30) not null,
    gol_mandante Integer not null,
    gol_visitante Integer not null

);

insert into partida (Id, data_hora, selecao_mandante,selecao_visitante,gol_mandante,gol_visitante)
values (1,'2022-11-24','Brasil','Servia',0,0 )
