package contas

import "GoProjetoBanco/banco/clientes"

type ContaCorrente struct {
	Titular       clientes.Titular
	NumeroAgencia int
	NumeroConta   int
	Saldo         float64
}

func (c *ContaCorrente) Depositar(valorDoDeposito float64) string {
	if valorDoDeposito > 0 {
		c.Saldo += valorDoDeposito
		return "Depósito realizado com sucesso"
	} else {
		return "Valor do depósito menor que zero"
	}
}

func (c *ContaCorrente) ObterSaldo() float64 {
	return c.Saldo
}
