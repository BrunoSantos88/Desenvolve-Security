package main

import (
	"database/sql"
	"html/template"
	"log"
	"net/http"

	_ "github.com/lib/pq" // Importar o driver do PostgreSQL
)

func ConectaComBanco() *sql.DB {
	conexao := "user=postgres dbname=alura_loja password=postgres host=192.168.98.30 sslmode=disable"
	db, err := sql.Open("postgres", conexao)
	if err != nil {
		panic(err.Error())
	}
	return db
}

type Produto struct {
	Nome       string
	Descricao  string
	Preco      float64
	Quantidade int
}

func main() {
	tmpl := template.Must(template.ParseFiles("templates/index.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Dados dos produtos
		produtos := []Produto{
			{Nome: "Camiseta", Descricao: "azul, bem bonita", Preco: 29.90, Quantidade: 10},
			{Nome: "Sunga", Descricao: "azul, bem bonita", Preco: 9.90, Quantidade: 10},
			{Nome: "Fone", Descricao: "preto, bem bonito", Preco: 49.90, Quantidade: 10},
		}

		// Executando o template com os dados
		if err := tmpl.Execute(w, produtos); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	log.Println("Servidor rodando na porta 8001...")
	if err := http.ListenAndServe(":8001", nil); err != nil {
		log.Fatal(err)
	}
}
