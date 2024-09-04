package controllers

import (
	"html/template"
	"log"
	"net/http"
	"strconv"

	"github.com/alura_loja/models" // Atualize o caminho de importação se necessário
)

var templates = template.Must(template.ParseGlob("templates/*.html"))

// Index exibe todos os produtos
func Index(w http.ResponseWriter, r *http.Request) {
	todosOsProdutos, err := models.BuscaTodosOsProdutos()
	if err != nil {
		http.Error(w, "Não foi possível buscar os produtos", http.StatusInternalServerError)
		return
	}
	templates.ExecuteTemplate(w, "Index", todosOsProdutos)
}

// New exibe o formulário para criar um novo produto
func New(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "New", nil)
}

// Insert adiciona um novo produto
func Insert(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		nome := r.FormValue("nome")
		descricao := r.FormValue("descricao")
		preco := r.FormValue("preco")
		quantidade := r.FormValue("quantidade")

		precoConvertidoParaFloat, err := strconv.ParseFloat(preco, 64)
		if err != nil {
			log.Println("Erro na conversão do preço:", err)
			http.Error(w, "Preço inválido", http.StatusBadRequest)
			return
		}

		quantidadeConvertidaParaInt, err := strconv.Atoi(quantidade)
		if err != nil {
			log.Println("Erro na conversão da quantidade:", err)
			http.Error(w, "Quantidade inválida", http.StatusBadRequest)
			return
		}

		err = models.CriaNovoProduto(nome, descricao, precoConvertidoParaFloat, quantidadeConvertidaParaInt)
		if err != nil {
			log.Println("Erro ao criar novo produto:", err)
			http.Error(w, "Não foi possível criar o produto", http.StatusInternalServerError)
			return
		}

		http.Redirect(w, r, "/", http.StatusSeeOther)
		return
	}

	http.Error(w, "Método não permitido", http.StatusMethodNotAllowe