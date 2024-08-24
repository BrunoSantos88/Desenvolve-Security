package main

import (
	"bufio"
	"fmt"
	"net/http"
	"os"
)

func leSitesDoArquivo() []string {
	var sites []string

	// Abre o arquivo para leitura
	arquivo, err := os.Open("sites.txt")
	if err != nil {
		fmt.Println("Erro ao abrir o arquivo:", err)
		return nil
	}
	// Garante que o arquivo será fechado ao final da função
	defer arquivo.Close()

	// Cria um scanner para ler o arquivo linha por linha
	scanner := bufio.NewScanner(arquivo)
	for scanner.Scan() {
		linha := scanner.Text()      // Lê a linha atual do scanner
		sites = append(sites, linha) // Adiciona a linha à lista de sites
	}

	// Verifica se houve erro durante a leitura do arquivo
	if err := scanner.Err(); err != nil {
		fmt.Println("Erro ao ler o arquivo:", err)
		return nil
	}

	return sites
}

func main() {
	sites := leSitesDoArquivo()
	if sites == nil {
		fmt.Println("Nenhum site encontrado ou erro ao ler o arquivo.")
		return
	}

	fmt.Println("Sites encontrados no arquivo:")
	for _, site := range sites {
		fmt.Println(site)
	}
}

func testaSite(site string) {

	resp, err := http.Get(site)

	if err != nil {
		fmt.Println("Ocorreu um erro:", err)
	}

	if resp.StatusCode == 200 {
		fmt.Println("Site:", site, "foi carregado com sucesso!")
	} else {
		fmt.Println("Site:", site, "está com problemas. Status Code:", resp.StatusCode)
	}
}
