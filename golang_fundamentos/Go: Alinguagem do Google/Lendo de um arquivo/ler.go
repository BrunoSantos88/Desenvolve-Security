package main

import (
	"bufio"
	"fmt"
	"net/http"
	"os"
)

// leSitesDoArquivo lê o arquivo de sites e retorna uma lista de sites.
func leSitesDoArquivo() []string {
	var sites []string
	arquivo, err := os.Open("sites.txt")
	if err != nil {
		fmt.Println("Erro ao abrir o arquivo:", err)
		return nil
	}
	defer arquivo.Close()

	scanner := bufio.NewScanner(arquivo)
	for scanner.Scan() {
		linha := scanner.Text()
		sites = append(sites, linha)
	}

	if err := scanner.Err(); err != nil {
		fmt.Println("Erro ao ler o arquivo:", err)
		return nil
	}

	return sites
}

// testaSite verifica o status de um site.
func testaSite(site string) {
	resp, err := http.Get(site)
	if err != nil {
		fmt.Println("Ocorreu um erro ao acessar o site:", err)
		return
	}
	defer resp.Body.Close() // Garante que o corpo da resposta será fechado

	if resp.StatusCode == 200 {
		fmt.Println("Site:", site, "foi carregado com sucesso!")
	} else {
		fmt.Println("Site:", site, "está com problemas. Status Code:", resp.StatusCode)
	}
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
		testaSite(site) // Testa cada site
	}
}
