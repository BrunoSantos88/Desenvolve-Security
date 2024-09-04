CREATE DATABASE alura_loja;


CREATE TABLE produtos (
    id serial primary key,
    nome VARCHAR(10),
    descricao VARCHAR(10),
    preco decimal,
    quantidade integer
);

insert into produtos (nome, descricao, preco, quantidade) values
('Camiseta', 'Prera', 19, 10),
('Fone', 'Muito bom', 99, 5);