package main

import "fmt"

// Define a struct ContaCorrente
type ContaCorrente struct {
	titular       string
	numeroAgencia int
	numeroConta   int
	saldo         float64
}

// Método Sacar que realiza um saque na conta
func (c *ContaCorrente) Sacar(valorDoSaque float64) string {
	if valorDoSaque <= c.saldo {
		c.saldo -= valorDoSaque
		return "Saque realizado com sucesso"
	}
	return "Saldo insuficiente"
}

func main() {
	// Cria uma nova conta
	contaDaSilvia := ContaCorrente{
		titular: "Silvia",
		saldo:   500.0,
	}

	// Exibe os detalhes da conta antes do saque
	fmt.Println("Antes do saque:", contaDaSilvia)

	// Tenta realizar um saque
	valorDoSaque := 200.0
	mensagem := contaDaSilvia.Sacar(valorDoSaque)

	// Exibe a mensagem do saque e o saldo restante
	fmt.Println(mensagem)
	fmt.Println("Depois do saque:", contaDaSilvia)
}
