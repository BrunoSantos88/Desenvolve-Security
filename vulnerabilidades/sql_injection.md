# SQL INJECTION

CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:H/A:H

* Descrição
Dada a expressão regular da mensagem de erro [SQLITE_ERROR] correspondida pelos resultados HTML.
A vulnerabilidade foi detectada manipulando o parâmetro para fazer com que uma mensagem de erro do
banco de dados fosse retornada e reconhecida.

* Descoberta da Vulnerabilidade
Ao acessar o link de login http://juice.hostdevtest.shop/#/login e tentar fazer o login, um erro de acesso inválido foi
reportado no proxy Burp Suite. Inserindo uma lógica verdadeira através de um campo de entrada e usando a string '
OR 1=1 -- ', isso faz com que o resto do código seja ignorado, permitindo o acesso indevido na conta de
administradora da organização juiceshop: admin@juice-sh.op. Segue imagem abaixo!

* Contenção/Erradicação
Não confie na entrada do cliente, mesmo que haja validação do lado do cliente.
Em geral, digite verificar todos os dados no lado do servidor.
Não crie consultas SQL dinâmicas usando concatenação simples de strings.
Aplique uma 'lista de permissões' de caracteres permitidos ou uma 'lista de negação' de caracteres não
permitidos na entrada do usuário.
Aplique o princípio do menor privilégio usando o usuário do banco de dados menos privilegiado possível.
Conceda o acesso mínimo ao banco de dados necessários para o aplicativo.

* Referências
- OWASP_2017_A01
- https://owasp.org/www-project-top-ten/2017/A1_2017-
- Injection.html
- OWASP_2021_A03
- https://owasp.org/Top10/A03_2021-Injection/