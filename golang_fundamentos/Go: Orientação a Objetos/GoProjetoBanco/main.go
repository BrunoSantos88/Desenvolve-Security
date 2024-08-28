package main

import (
	"fmt"

	"GoProjetoBanco/banco/clientes"
	"GoProjetoBanco/banco/contas"
)

func main() {
	contaDoDenis := contas.ContaPoupanca{
		Titular: clientes.Titular{
			Nome:      "Denis",
			CPF:       "123.111.123.12",
			Profissao: "Desenvolvedor:go",
		},
		NumeroAgencia: 123,
		NumeroConta:   123456,
		Saldo:         100,
	}

	contaDoPati := contas.ContaCorrente{
		Titular: clientes.Titular{
			Nome:      "PATI",
			CPF:       "123.111.123.13",
			Profissao: "Desenvolvedora:go",
		},
		NumeroAgencia: 123,
		NumeroConta:   123457,
		Saldo:         150,
	}

	fmt.Println(contaDoDenis)
	fmt.Println(contaDoPati)
}
