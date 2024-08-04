// Função de apresentação usando interpolação de strings
const apresentarArrow = nome => `meu nome é ${nome}`;

// Função para somar dois números
const soma = (num1, num2) => num1 + num2;

// Função para somar dois números, com verificação se estão entre 1 e 9
const somaNumerosPequenos = (num1, num2) => {
    if (num1 < 1 || num1 > 9 || num2 < 1 || num2 > 9) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
};
