// login.js
document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Lógica para verificar o login (substitua com sua própria lógica)
        if (username === 'quiz' && password === 'squiz') {
            // Redireciona para a página quiz/index.html
            window.location.href = 'quiz/index.html';
        } else {
            alert('Usuário ou senha incorretos.'); // Exibe uma mensagem de erro
        }
    });
});