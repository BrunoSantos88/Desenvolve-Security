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
	contaDoGuilherme := ContaCorrente{
		titular:       "Bruno",
		numeroAgencia: 589,
		numeroConta:   123456,
		saldo:         125.5,
	}

	contaDaBruna := ContaCorrente{
		titular:       "Bruna",
		numeroAgencia: 580,
		numeroConta:   12345,
		saldo:         70.0,
	}

	// Imprime as instâncias
	fmt.Println(contaDoGuilherme)
	fmt.Println(contaDaBruna)
}
