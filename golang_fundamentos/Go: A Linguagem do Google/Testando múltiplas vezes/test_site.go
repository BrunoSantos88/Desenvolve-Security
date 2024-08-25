package main

import (
	"fmt"
	"time"
)

const (
	aquecimento  = 5 * time.Minute
	corridaLeve  = 10 * time.Minute
	corridaForte = 10 * time.Minute
	alongamento  = 5 * time.Minute // Definido o tempo de alongamento
)

func main() {
	fmt.Println("Período de alongamento...")
	time.Sleep(alongamento)

	fmt.Println("Período de aquecimento...")
	time.Sleep(aquecimento)

	fmt.Println("Período de corrida leve...")
	time.Sleep(corridaLeve)

	fmt.Println("Período de corrida forte...")
	time.Sleep(corridaForte)

	fmt.Println("Período de alongamento...")
	time.Sleep(alongamento)
}
