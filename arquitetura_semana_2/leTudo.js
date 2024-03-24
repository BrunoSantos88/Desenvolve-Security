const fs = require('fs');
const csv = require('csv-parser');

// Função para ler e processar o arquivo CSV
function lerTabelaCSV(arquivo) {
    const resultados = [];

    // Ler o arquivo CSV
    fs.createReadStream(arquivo)
        .pipe(csv())
        .on('data', (row) => {
            resultados.push(row);
        })
        .on('end', () => {
            // Exibir os resultados
            console.log(resultados);
        });
}

// Ler a tabela de produtos de feira
lerTabelaCSV('produtos_feira.csv');

// Ler a tabela de produtos pesados
lerTabelaCSV('produtos_pesados.csv');