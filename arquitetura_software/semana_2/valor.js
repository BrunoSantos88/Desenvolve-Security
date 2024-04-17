function naoModificaNumero(numero2) {
    numero2 = 3; 
}

let numero1 = 1;

console.log('Antes: ', numero1); // Outputs: Antes: 1
naoModificaNumero(numero1); // The function is called with `numero1` as an argument.
console.log('Depois: ', numero1); // Outputs: Depois: 1