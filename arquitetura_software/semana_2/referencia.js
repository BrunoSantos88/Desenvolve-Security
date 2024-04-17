function modificaLista(lista2) { 
    lista2[0] = 3;
}
let lista1 = [1, 1, 1, 1, 1];

console.log('Antes: ', lista1);
modificaLista(lista1);
console.log('Depois: ', lista1);