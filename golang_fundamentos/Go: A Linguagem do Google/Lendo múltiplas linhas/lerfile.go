package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strings"
)

func leSitesDoArquivo() []string {
	var sites []string

	arquivo, err := os.Open("sites.txt")
	if err != nil {
		fmt.Println("Ocorreu um erro ao abrir o arquivo:", err)
		return nil
	}
	defer arquivo.Close()

	leitor := bufio.NewReader(arquivo)

	for {
		linha, err := leitor.ReadString('\n')
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("Ocorreu um erro ao ler o arquivo:", err)
			return nil
		}

		linha = strings.TrimSpace(linha)
		if linha != "" {
			sites = append(sites, linha)
		}
	}

	return sites
}

func main() {
	sites := leSitesDoArquivo()
	if sites != nil {
		for _, site := range sites {
			fmt.Println(site)
		}
	}
}
