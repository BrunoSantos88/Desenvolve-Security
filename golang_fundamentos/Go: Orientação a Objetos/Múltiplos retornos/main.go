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

// Método Depositar que realiza um depósito na conta
func (c *ContaCorrente) Depositar(valorDoDeposito float64) string {
	if valorDoDeposito > 0 {
		c.saldo += valorDoDeposito
		return "Depósito realizado com sucesso"
	} else {
		return "Valor do depósito menor que zero"
	}
}

func main() {
	// Cria uma nova conta
	contaDaSilvia := ContaCorrente{
		titular: "Silvia",
		saldo:   500.0,
	}

	// Exibe o saldo inicial
	fmt.Println("Saldo inicial:", contaDaSilvia.saldo)

	// Realiza um saque
	saqueResult := contaDaSilvia.Sacar(100.0)
	fmt.Println(saqueResult)
	fmt.Println("Saldo após saque:", contaDaSilvia.saldo)

	// Realiza um depósito
	status := contaDaSilvia.Depositar(2000.0)
	fmt.Println(status)
	fmt.Println("Saldo após depósito:", contaDaSilvia.saldo)
}
