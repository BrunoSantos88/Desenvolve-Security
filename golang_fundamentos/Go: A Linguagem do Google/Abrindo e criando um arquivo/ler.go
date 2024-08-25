package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
	"sync"
)

var (
	fileMutex sync.Mutex
)

func testaSite(site string) {
	resp, err := http.Get(site)
	if err != nil {
		fmt.Println("Ocorreu um erro:", err)
		registraLog(site, false)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode == 200 {
		fmt.Println("Site:", site, "foi carregado com sucesso!")
		registraLog(site, true)
	} else {
		fmt.Println("Site:", site, "está com problemas. Status Code:", resp.StatusCode)
		registraLog(site, false)
	}
}

func registraLog(site string, status bool) {
	fileMutex.Lock()
	defer fileMutex.Unlock()

	arquivo, err := os.OpenFile("log.txt", os.O_CREATE|os.O_APPEND|os.O_RDWR, 0666)
	if err != nil {
		fmt.Println("Ocorreu um erro ao abrir o arquivo:", err)
		return
	}
	defer arquivo.Close()

	_, err = arquivo.WriteString(site + " - online: " + strconv.FormatBool(status) + "\n")
	if err != nil {
		fmt.Println("Ocorreu um erro ao escrever no arquivo:", err)
	}
}

func main() {
	// Exemplos de sites para testar
	sites := []string{"http://example.com", "http://example.org"}

	for _, site := range sites {
		testaSite(site)
	}
}
