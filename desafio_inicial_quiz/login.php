<?php
$host = "localhost";
$port = "5432";
$dbname = "quiz";
$user = "quiz";
$password = "desafio";

// Conexão com o banco de dados PostgreSQL
$db = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");

// Verifica se o formulário de login foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta SQL para verificar as credenciais
    $sql = "SELECT * FROM usuarios WHERE username = :username AND password = :password";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        // Usuário autenticado, redireciona para a página de sucesso
        header("Location: quiz/index.html");
        exit;
    } else {
        echo "Usuário ou senha incorretos.";
    }
}
?>