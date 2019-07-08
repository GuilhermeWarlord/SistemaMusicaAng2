Script de criação do banco 

drop database pds2;
create database pds2;
use pds2;

CREATE TABLE clientes (
codigo INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(60) NOT NULL,
createdAt datetime,
updatedAt datetime,
PRIMARY KEY (codigo));

select * from clientes;

INSERT INTO clientes(nome) value ('Carlos');