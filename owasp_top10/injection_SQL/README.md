 # OWASP ACADAMY

 - Injeção SQL

 * Um ataque de injeção SQL consiste na inserção ou “injeção” de uma consulta SQL através dos dados de entrada do cliente para a aplicação. Uma exploração de injeção SQL bem-sucedida pode ler dados confidenciais do banco de dados, modificar dados do banco de dados (Inserir/Atualizar/Excluir), executar operações de administração no banco de dados (como desligar o DBMS), recuperar o conteúdo de um determinado arquivo presente no arquivo DBMS sistema e, em alguns casos, emite comandos para o sistema operacional. Os ataques de injeção SQL são um tipo de ataque de injeção, no qual comandos SQL são injetados na entrada do plano de dados para afetar a execução de comandos SQL predefinidos.

 - Modelagem de ameaças

 * Os ataques de injeção de SQL permitem que os invasores falsifiquem a identidade, adulterem os dados existentes, causem problemas de repúdio, como anulação de transações ou alteração de saldos, permitam a divulgação completa de todos os dados no sistema, destruam os dados ou tornem-nos indisponíveis de outra forma e tornem-se administradores do servidor de banco de dados.
 * SQL Injection é muito comum em aplicativos PHP e ASP devido à prevalência de interfaces funcionais mais antigas. Devido à natureza das interfaces programáticas disponíveis, é menos provável que os aplicativos J2EE e ASP.NET tenham injeções de SQL facilmente exploradas.
 * A gravidade dos ataques de injeção de SQL é limitada pela habilidade e imaginação do invasor e, em menor grau, pela defesa em contramedidas profundas, como conexões de baixo privilégio ao servidor de banco de dados e assim por diante. Em geral, considere o SQL Injection uma gravidade de alto impacto.

 - Atividades de segurança relacionadas

* Como evitar vulnerabilidades de injeção de SQL
Consulte a Folha de Dicas de Prevenção de Injeção SQL OWASP . Consulte a Folha de Dicas de Parametrização de Consulta OWASP .

* Como revisar o código para vulnerabilidades de injeção SQL
Consulte o artigo do Guia de revisão de código OWASP sobre como revisar o código para vulnerabilidades de injeção SQL.

* Como testar vulnerabilidades de injeção de SQL
Consulte o Guia de testes OWASP para obter informações sobre testes de vulnerabilidades de injeção de SQL.

* Como contornar firewalls de aplicativos da Web com SQLi
Veja o artigo OWASP sobre como usar SQL Injection para ignorar um WAF

* Commmandos SQL 
- Em SQL: select id, firstname, lastname from authors

* string: select id, firstname, lastname from authors where firstname = 'evil'ex' and lastname ='newman'

* Qual o banco de dados tenta executar como:

````
Incorrect syntax near il' as the database tried to execute evil.
````

* Uma versão segura da instrução SQL acima poderia ser codificada em Java como:

 ````
String firstname = req.getParameter("firstname");
String lastname = req.getParameter("lastname");
// FIXME: do your own validation to detect attacks
String query = "SELECT id, firstname, lastname FROM authors WHERE firstname = ? and lastname = ?";
PreparedStatement pstmt = connection.prepareStatement( query );
pstmt.setString( 1, firstname );
pstmt.setString( 2, lastname );
try
{
    ResultSet results = pstmt.execute( );
}
````

* O código C# a seguir constrói e executa dinamicamente uma consulta SQL que procura itens que correspondam a um nome especificado.

````
string userName = ctx.getAuthenticatedUserName();
string query = "SELECT * FROM items WHERE owner = '"
                + userName + "' AND itemname = '"
                + ItemName.Text + "'";
sda = new SqlDataAdapter(query, conn);
DataTable dt = new DataTable();
sda.Fill(dt);
````

Link: https://owasp.org/www-community/attacks/SQL_Injection