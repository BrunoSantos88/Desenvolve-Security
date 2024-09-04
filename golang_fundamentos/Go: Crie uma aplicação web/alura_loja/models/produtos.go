package models

import (
	"github.com/alura_loja/db"
)

type Produto struct {
	Id         int
	Nome       string
	Descricao  string
	Preco      float64
	Quantidade int
}

// BuscaTodosOsProdutos retorna todos os produtos do banco de dados.
func BuscaTodosOsProdutos() ([]Produto, error) {
	db, err := db.ConectaComBancoDeDados()
	if err != nil {
		return nil, err
	}
	defer db.Close()

	rows, err := db.Query("SELECT id, nome, descricao, preco, quantidade FROM produtos")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var produtos []Produto

	for rows.Next() {
		var p Produto
		err := rows.Scan(&p.Id, &p.Nome, &p.Descricao, &p.Preco, &p.Quantidade)
		if err != nil {
			return nil, err
		}
		produtos = append(produtos, p)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return produtos, nil
}

// CriaNovoProduto insere um novo produto no banco de dados.
func CriaNovoProduto(nome, descricao string, preco float64, quantidade int) error {
	db, err := db.ConectaComBancoDeDados()
	if err != nil {
		return err
	}
	defer db.Close()

	stmt, err := db.Prepare("INSERT INTO produtos(nome, descricao, preco, quantidade) VALUES($1, $2, $3, $4)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(nome, descricao, preco, quantidade)
	if err != nil {
		return err
	}

	return nil
}
