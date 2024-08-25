////

package main

import "fmt"

func main() {
	var commando int
	fmt.Print("Digite um comando: ")
	fmt.Scan(&commando)

	fmt.Printf("O valor da variável commando é: %d\n", commando)

	// Switch estilo if e else
	switch commando {
	case 1:
		fmt.Println("Monitorando...")
	case 2:
		fmt.Println("Exibindo logs...")
	case 0:
		fmt.Println("Saindo do Programa...")
	default:
		fmt.Println("Não conheço esse comando...")
	}
}
