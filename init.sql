CREATE TABLE IF NOT EXISTS partida (
   
    Id Integer PRIMARY KEY,
    data_partida date not null,
    selecao_mandante varchar(30) not null,
    selecao_visitante varchar(30) not null,
    gol_mandante Integer not null,
    gol_visitante Integer not null

);

insert into partida (Id, data_partida, selecao_mandante,selecao_visitante,gol_mandante,gol_visitante)
values (1,'2022-11-24','Brasil','Servia',0,0 );
insert into partida (Id, data_partida, selecao_mandante,selecao_visitante,gol_mandante,gol_visitante)
values (2,'2022-11-28','Brasil','Suiça',0,0 );
insert into partida (Id, data_partida, selecao_mandante,selecao_visitante,gol_mandante,gol_visitante)
values (3,'2022-12-02','Brasil','Camarões',0,0 );