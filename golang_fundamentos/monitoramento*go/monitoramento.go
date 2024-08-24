package main

import (
	"fmt"
	"time"
)

const monitoramentos = 3
const delay = 5

func testaSite(site string) {
	// Implementação simples para a função testaSite
	// Substitua isso pela lógica real de teste de site
	fmt.Println("Status do site", site, ":", "OK") // Simulação de status
}

func iniciarMonitoramento() {
	fmt.Println("Monitorando...")

	sites := []string{
		"https://httpbin.org/status/200",
		"https://www.alura.com.br",
		"https://www.caelum.com.br",
	}

	for i := 0; i < monitoramentos; i++ {
		for j, site := range sites {
			fmt.Println("Testando site", j, ":", site)
			testaSite(site)
		}

		time.Sleep(delay * time.Second)
		fmt.Println("")
	}
	fmt.Println("")
}

func main() {
	iniciarMonitoramento()
}
