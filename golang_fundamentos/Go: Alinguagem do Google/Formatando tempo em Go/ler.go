package main

import (
	"bufio"
	"fmt"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"
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

	arquivo, err := os.OpenFile("log.txt", os.O_CREATE|os.O_RDWR|os.O_APPEND, 0666)
	if err != nil {
		fmt.Println("Ocorreu um erro ao abrir o arquivo:", err)
		return
	}
	defer arquivo.Close()

	logEntry := time.Now().Format("02/01/2006 15:04:05") + " - " + site +
		" - online: " + strconv.FormatBool(status) + "\n"

	_, err = arquivo.WriteString(logEntry)
	if err != nil {
		fmt.Println("Ocorreu um erro ao escrever no arquivo:", err)
	}
}

func lerSitesDoArquivo(nomeArquivo string) ([]string, error) {
	var sites []string

	arquivo, err := os.Open(nomeArquivo)
	if err != nil {
		return nil, fmt.Errorf("não foi possível abrir o arquivo %s: %v", nomeArquivo, err)
	}
	defer arquivo.Close()

	scanner := bufio.NewScanner(arquivo)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line != "" {
			sites = append(sites, line)
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, fmt.Errorf("erro ao ler o arquivo %s: %v", nomeArquivo, err)
	}

	return sites, nil
}

func main() {
	sites, err := lerSitesDoArquivo("sites.txt")
	if err != nil {
		fmt.Println("Erro ao ler o arquivo de sites:", err)
		return
	}

	var wg sync.WaitGroup
	for _, site := range sites {
		wg.Add(1)
		go func(site string) {
			defer wg.Done()
			testaSite(site)
		}(site)
	}

	wg.Wait()
}
