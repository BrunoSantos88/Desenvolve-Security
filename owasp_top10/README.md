
  <h3> Injections a Broken Access Control - Semaan 12 </h3>  </p>
  <h3> Security misconfiguration -  Semana 13</h3>  </p>
  <h3> segurança de aplicações V5 a V8 - Semana 13 </h3>  </p>
  <h3> segurança de aplicações V9 a V14 - Semana 14 </h3>  </p>
  <h3> verificação de segurança de aplicações - Semana 14 </h3>  </p>

  # Os 10 principais riscos de segurança de aplicativos da Web

  <img src="imagens/mapping.png" alt="Alt Text" width="1000"> </p>

- Exemplos de cenários de ataque
Cenário nº 1: um aplicativo usa dados não confiáveis ​​na construção da seguinte chamada SQL vulnerável:
´´´´
String query = "SELECT \* FROM accounts WHERE custID='" + request.getParameter("id") + "'";
´´´´
- Cenário #2: Da mesma forma, a confiança cega de uma aplicação em frameworks pode resultar em consultas que ainda são vulneráveis, (por exemplo, Hibernate Query Language (HQL)):
´´´´
 Query HQLQuery = session.createQuery("FROM accounts WHERE custID='" + request.getParameter("id") + "'");
 ´´´´
- Em ambos os casos, o invasor modifica o valor do parâmetro 'id' em seu navegador para enviar: ' UNION SLEEP(10);--. Por exemplo:
´´´´
http://example.com/app/accountView?id=' UNION SELECT SLEEP(10);--
´´´´

- Isso altera o significado de ambas as consultas para retornar todos os registros da tabela de contas. Ataques mais perigosos podem modificar ou excluir dados ou até mesmo invocar procedimentos armazenados.