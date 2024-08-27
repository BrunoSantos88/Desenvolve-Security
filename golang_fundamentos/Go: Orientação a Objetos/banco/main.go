package main

import (
	"fmt"
)

func main() {
	contaDoBruno := contas.ContaCorrente{
		Titular: clientes.Titular{
			Nome:      "Bruno",
			CPF:       "123.111.123.12",
			Profissao: "Desenvolvedor",
		},
		NumeroAgencia: 123,
		NumeroConta:   123456,
		Saldo:         100,
	}

	fmt.Println(contaDoBruno)
}
