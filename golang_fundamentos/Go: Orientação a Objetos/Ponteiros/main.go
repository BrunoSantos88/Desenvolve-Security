package main

import "fmt"

// Define a struct ContaCorrente
type ContaCorrente struct {
	titular       string
	numeroAgencia int
	numeroConta   int
	saldo         float64
}

func main() {
	// Cria instâncias da struct ContaCorrente
	contaDoCris := ContaCorrente{
		titular:       "Cris",
		numeroAgencia: 589,
		numeroConta:   123456,
		saldo:         125.5,
	}

	contaDoCris2 := ContaCorrente{
		titular:       "Cris2",
		numeroAgencia: 580,
		numeroConta:   123456,
		saldo:         125.5,
	}

	// Comparar as instâncias
	fmt.Println(contaDoCris)
	fmt.Println(contaDoCris2)

	// Comparar se as duas contas são iguais
	fmt.Println(contaDoCris == contaDoCris2)
}
