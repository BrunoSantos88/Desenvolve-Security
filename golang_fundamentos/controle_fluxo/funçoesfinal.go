package main

import (
	"fmt"
	"os"
)

func main() {
	exibeIntroducao()
	exibeMenu()
	comando := leComando()

	switch comando {
	case 1:
		fmt.Println("Monitorando...")
	case 2:
		fmt.Println("Exibindo Logs...")
	case 0:
		fmt.Println("Saindo do programa...")
		return
	default:
		fmt.Println("Não conheço este comando")
		return
	}
}

func exibeIntroducao() {
	nome := "Douglas"
	versao := 1.1
	fmt.Printf("Olá, sr. %s\n", nome)
	fmt.Printf("Este programa está na versão %.1f\n", versao)
}

func leComando() int {
	var comandoLido int
	fmt.Print("Digite um comando: ")
	_, err := fmt.Scan(&comandoLido)
	if err != nil {
		fmt.Println("Erro ao ler o comando. Por favor, insira um número.")
		os.Exit(1) // Saímos com um código de erro
	}
	fmt.Printf("O comando escolhido foi %d\n", comandoLido)
	return comandoLido
}

func exibeMenu() {
	fmt.Println("Escolha uma opção:")
	fmt.Println("1 - Monitorar")
	fmt.Println("2 - Exibir Logs")
	fmt.Println("0 - Sair")
}
