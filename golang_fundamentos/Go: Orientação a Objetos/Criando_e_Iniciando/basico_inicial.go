
///estrutura basica inicial
ContaConrrente struct {}
var titular string 
var numeroAgencia int 
var numeroConta int 
var saldo float64 

func main() {
	var titular string = "Bruno"
	var numeroAgencia int = 589
	var numeroConta int = 121151681
	var saldo float64 = 125.00

	fmt.Println(titular, numeroAgencia, numeroConta, saldo)

	var titular2 string = "Luciene"
	var numeroAgencia2 int = 555
	var numeroConta2 int = 121151681
	var saldo2 float64 = 200

	fmt.Println(titular2, numeroAgencia2, numeroConta2, saldo2)
}