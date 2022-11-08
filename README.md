# Trabalho 2 - TP6 - NODE API
Esse repositório contém uma API feita em NODE,que motivada pela Copa do Mundo do Catar 2022, armazena partidas de futebol em um banco de dados Postgres.
Utilizando o docker-compose, cria um container contendo a aplicação e outro contendo o banco de dados.
(É necessário ter o Docker Desktop instalado na sua máquina)

## Download da imagem do Docker Hub
### Use o comando:
```
docker push marciofariajr/api-tp6:tagname
```

## Clonando o repositóro e subindo os containers
```
git clone https://github.com/marciofaria9/trab2-tp6.git
cd trab2-tp6
docker-compose up
```
## Endpoint da API para realizar o POST:
```
http://localhost:8087/api/v1/worldcup
```

## JSON Type
```
    {
        "id": Number,
        "data_partida": "date" (YYYY-MM-DD),
        "selecao_mandante": "String",
        "selecao_visitante": "String",
        "gol_mandante": Number,
        "gol_visitante": Number
    }
```  

## Endpoint para GET buscando por ID
``` 
http://localhost:8087/api/v1/worldcup
``` 
### Exemplo de Busca:
``` 
http://localhost:8087/api/v1/worldcup/2
``` 
## Endpoint para GET buscando por Data
``` 
http://localhost:8087/api/v1/worldcup/data
``` 
### Exemplo de Busca:
``` 
http://localhost:8087/api/v1/worldcup/data/2022-11-28
``` 

## Endpoint para GET buscando por Seleção
``` 
http://localhost:8087/api/v1/worldcup/selecao
``` 
### Exemplo de Busca:
``` 
http://localhost:8087/api/v1/worldcup/selecao/Brasil
``` 

## Endpoint para delete
``` 
http://localhost:8087/api/v1/worldcup
``` 
### Exemplo de delete:
``` 
http://localhost:8087/api/v1/worldcup/1
``` 

## Endpoint para Update

``` 
http://localhost:8087/api/v1/worldcup
``` 
### Exemplo de Update:
``` 
http://localhost:8087/api/v1/worldcup/1

    {
        "id": 1,
        "data_partida": "2022-12-01",
        "selecao_mandante": "Brasil",
        "selecao_visitante": "Argetina",
        "gol_mandante": 3,
        "gol_visitante": 1
    }

``` 

## Estrutura do Banco de Dados

``` 
    Id Integer PRIMARY KEY,
    data_partida timestamp not null,
    selecao_mandante varchar(30) not null,
    selecao_visitante varchar(30) not null,
    gol_mandante Integer not null,
    gol_visitante Integer not null
``` 

## Marcio Faria

    
