# 1.4- Improper Error Handling
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N

* Descrição
O processamento de erros é um processo no desenvolvimento de software em que os programas são escritos para
lidar com erros ou condições inesperadas que podem ocorrer enquanto o programa está em execução.
Quando um programa é executado, às vezes erros ou condições inesperadas podem ocorrer, como erros de sintaxe,
erros de entrada ou saída ou até mesmo erros lógicos. Se o programa não for escrito para lidar com esses erros, o
programa pode parar ou falhar, fazendo com que o usuário perca dados ou tenha uma experiência ruim usando o
programa.
* Descoberta da Vulnerabilidade
Ao tentar fazer login com o usuário test@test e senha test, ocorreu uma mensagem de "login e senha inválidos". No
entanto, ao usar strings ou concatenação na consulta ao banco de dados por exemplo, com espaço e aspas simples
' , foi reportado um erro no banco de dados. O banco de dados reportou ERROR__SQLITE, indicando que o banco de
dados é um SQLite, linguagem nodejs e pastas node_modules. Segue imagem abaixo.
* Contenção/Erradicação
Validar e sanitizar todas as entradas do usuário antes de utilizá-las em consultas ou operações críticas. Evitar a
exposição de detalhes específicos sobre erros do banco de dados ao usuário. Em vez disso, retornar mensagens
genéricas e registrar os detalhes técnicos no log do servidor.
* Referências
Improper_Error_Handlinghttps://owasp.org/www-community/Improper_Error_Handling
Improper_Error_Handlinghttps://cheatsheetseries.owasp.org/cheatsheets
/Error_Handling_Cheat_Sheet.html