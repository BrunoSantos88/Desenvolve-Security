CREATE DATABASE alura_loja;


CREATE TABLE produtos (
    id serial primary key,
    nome VARCHAR(10),
    descricao VARCHAR(10),
    preco decimal,
    quantidade integer,
);