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
	}
	return "Valor do depósito menor que zero"
}

// Método Transferir que realiza a transferência entre contas
func (c *ContaCorrente) Transferir(valorDaTransferencia float64, contaDestino *ContaCorrente) bool {
	if valorDaTransferencia < c.saldo && valorDaTransferencia > 0 {
		c.saldo -= valorDaTransferencia
		contaDestino.Depositar(valorDaTransferencia)
		return true
	} else {
		return false
	}
}

func main() {
	// Cria novas contas
	contaDaSilvia := ContaCorrente{titular: "Silvia", saldo: 1300}
	contaDoGustavo := ContaCorrente{titular: "Gustavo", saldo: 1100}

	// Exibe o saldo inicial
	fmt.Println("Saldo inicial da Silvia:", contaDaSilvia.saldo)
	fmt.Println("Saldo inicial do Gustavo:", contaDoGustavo.saldo)

	// Realiza um saque
	saqueResult := contaDaSilvia.Sacar(100.0)
	fmt.Println(saqueResult)
	fmt.Println("Saldo após saque da Silvia:", contaDaSilvia.saldo)

	// Realiza um depósito
	depositoStatus := contaDaSilvia.Depositar(2000.0)
	fmt.Println(depositoStatus)
	fmt.Println("Saldo após depósito da Silvia:", contaDaSilvia.saldo)

	// Realiza uma transferência
	transferenciaResult := contaDaSilvia.Transferir(500.0, &contaDoGustavo)
	fmt.Println(transferenciaResult)
	fmt.Println("Saldo após transferência da Silvia:", contaDaSilvia.saldo)
	fmt.Println("Saldo após transferência do Gustavo:", contaDoGustavo.saldo)

	// Tenta realizar uma nova transferência
	transferenciaStatus := contaDaSilvia.Transferir(200.0, &contaDoGustavo)
	fmt.Println(transferenciaStatus)
	fmt.Println("Saldo final da Silvia:", contaDaSilvia.saldo)
	fmt.Println("Saldo final do Gustavo:", contaDoGustavo.saldo)
}
