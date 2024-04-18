
  <h3> Injections a Broken Access Control - Semana 12 </h3>  </p>

# A1 Injections SQL

- Exemplos de cenários de ataque
Cenário nº 1: um aplicativo usa dados não confiáveis ​​na construção da seguinte chamada SQL vulnerável:
 ````
String query = "SELECT \* FROM accounts WHERE custID='" + request.getParameter("id") + "'";
 ````
- Cenário #2: Da mesma forma, a confiança cega de uma aplicação em frameworks pode resultar em consultas que ainda são vulneráveis, (por exemplo, Hibernate Query Language (HQL)):
 ````
 Query HQLQuery = session.createQuery("FROM accounts WHERE custID='" + request.getParameter("id") + "'");
  ````
- Em ambos os casos, o invasor modifica o valor do parâmetro 'id' em seu navegador para enviar: ' UNION SLEEP(10);--. Por exemplo:
````
http://example.com/app/accountView?id=' UNION SELECT SLEEP(10);--
 ````

- Isso altera o significado de ambas as consultas para retornar todos os registros da tabela de contas. Ataques mais perigosos podem modificar ou excluir dados ou até mesmo invocar procedimentos armazenados.

hql link: Link: https://www.geeksforgeeks.org/hibernate-query-language/

# A2 Broken Authentication

- Credential stuffing

- O credential stuffing é um tipo de ataque cibernético que se aproveita do mau hábito dos usuários de reutilizar senhas; por isso, é preciso ser consciente no momento de escolher a sua combinação de segurança.

# A3 Sensitive Data Exposure

mitre-attack Multi-factor Authentication  </p>
<img src="imagens\Multifactor_Authentication_M1032.svg" alt="Alt Text" width="1000"> </p>

Link: https://github.com/OWASP/www-project-top-ten/blob/master/2017/A3_2017-Sensitive_Data_Exposure.md
