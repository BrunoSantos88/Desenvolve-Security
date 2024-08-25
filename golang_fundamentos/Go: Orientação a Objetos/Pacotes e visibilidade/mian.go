package main

import (
	"/go_fundamentos/contas"
	"fmt"
)

func main() {
	// Supondo que ContaCorrente tenha um campo exportado 'Titular' e 'Saldo'
	contaDaSilvia := contas.ContaCorrente{Titular: "Silvia", Saldo: 300}
	contaDoGustavo := contas.ContaCorrente{Titular: "Gustavo", Saldo: 100}

	// Supondo que Transferir é um método exportado e correto
	status := contaDoGustavo.Transferir(-200, &contaDaSilvia)

	fmt.Println(status)
	fmt.Println(contaDaSilvia)
	fmt.Println(contaDoGustavo)
}
