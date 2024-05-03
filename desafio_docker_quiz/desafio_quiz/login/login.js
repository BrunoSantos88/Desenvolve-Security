document.getElementById('loginButton').addEventListener('click', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lógica para verificar o login (substitua com sua própria lógica)
    if (username === 'quiz' && password === 'desafio') {
        // Distribui aleatoriamente o acesso entre os servidores disponíveis
        var randomServer = Math.floor(Math.random() * 3) + 1; // Gera um número aleatório entre 1 e 3
        window.location.href = 'http://localhost:8' + randomServer + '/'; // Redireciona para o servidor aleatório
    } else {
        alert('Usuário ou senha incorretos.'); // Exibe uma mensagem de erro
    }
});