
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

link: https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication

# A3 Sensitive Data Exposure
Link: https://github.com/OWASP/www-project-top-ten/blob/master/2017/A3_2017-Sensitive_Data_Exposure.md

# A4:2017-XML External Entities (XXE)

codigo exemplo.

````
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
<!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>
<foo>&xxe;</foo>

<!ENTITY xxe SYSTEM "https://192.168.1.1/private" >]>

<!ENTITY xxe SYSTEM "file:///dev/random" >]
````

- O treinamento do desenvolvedor é essencial para identificar e mitigar o XXE. Além disso, prevenir XXE requer:
- Sempre que possível, utilizar formatos de dados menos complexos, como JSON, e evitar a serialização de dados confidenciais.
- Corrija ou atualize todos os processadores XML e bibliotecas em uso pelo aplicativo ou no sistema operacional subjacente. Use verificadores de dependência. Atualize o SOAP para SOAP 1.2 ou superior.
- Desative a entidade externa XML e o processamento DTD em todos os analisadores XML no aplicativo, conforme a Folha de Dicas da OWASP 'XXE Prevention' .
- Implemente validação, filtragem ou higienização positiva de entrada no lado do servidor (“lista de permissões”) para evitar dados hostis em documentos XML, cabeçalhos ou nós.
- Verifique se a funcionalidade de upload de arquivos XML ou XSL valida o XML recebido usando validação XSD ou similar.
- As ferramentas SAST podem ajudar a detectar XXE no código-fonte, embora a revisão manual do código seja a melhor alternativa em aplicativos grandes e complexos com muitas integrações.
Se esses controles não forem possíveis, considere usar patches virtuais, gateways de segurança de API ou Web Application Firewalls (WAFs) para detectar, monitorar e bloquear ataques XXE.

<div style="display: flex;">
    <img src="imagens/sast_1.png" alt="Alt Text" width="500" style="margin: 0 auto;">

</div>

Link: https://owasp.org/www-project-top-ten/2017/A4_2017-XML_External_Entities_(XXE)

# A5 Broken Access Control
- Agentes de ameaças/vetores de ataque	Fraqueza de segurança	Impactos
- Aplicativo. Específico	Explorabilidade: 2	Prevalência: 2	Detectabilidade: 2	Técnico: 3	Negócios ?
- A exploração do controle de acesso é uma habilidade essencial dos invasores. As ferramentas SAST e - DAST podem detectar a ausência de controle de acesso, mas não podem verificar se ele está funcional quando está presente. O controle de acesso é detectável por meios manuais, ou possivelmente através de automação pela ausência de controles de acesso em determinados frameworks.
 # O aplicativo é vulnerável?
- O controle de acesso impõe políticas de forma que os usuários não possam agir fora das permissões pretendidas. As falhas normalmente levam à divulgação não autorizada de informações, modificação ou destruição de todos os dados ou à execução de uma função comercial fora dos limites do usuário. Vulnerabilidades comuns de controle de acesso incluem:
* Ignorar verificações de controle de acesso modificando a URL, o estado interno do aplicativo ou a página HTML, ou simplesmente usando uma ferramenta de ataque de API personalizada.
* Permitir que a chave primária seja alterada para o registro de outro usuário, permitindo visualizar ou editar a conta de outra pessoa.

# Como prevenir
O controle de acesso só é eficaz se aplicado em código confiável do lado do servidor ou API sem servidor, onde o invasor não pode modificar a verificação de controle de acesso ou os metadados.
* Com exceção dos recursos públicos, negar por defeito.
* Implemente mecanismos de controle de acesso uma vez e reutilize-os em todo o aplicativo, inclusive minimizando o uso do CORS.
* Os controles de acesso do modelo devem impor a propriedade do registro, em vez de aceitar que o usuário possa criar, ler, atualizar ou excluir qualquer registro.
* Requisitos exclusivos de limite de negócios de aplicativos devem ser aplicados por modelos de domínio.
* Desative a listagem de diretórios do servidor web e certifique-se de que os metadados dos arquivos (por exemplo, .git) e os arquivos de backup não estejam presentes nas raízes da web.
* Registrar falhas de controle de acesso, alertar administradores quando apropriado (por exemplo, falhas repetidas).
* Limite de taxa de acesso à API e ao controlador para minimizar os danos causados ​​por ferramentas de ataque automatizado.

- Cenário nº 1 : o aplicativo usa dados não verificados em uma chamada SQL que acessa informações da conta: um invasor simplesmente modifica o parâmetro 'acct' no navegador para enviar o número de conta que desejar. Se não for verificado corretamente, o invasor pode acessar a conta de qualquer usuário. - Cenário nº 2 : um invasor simplesmente força a navegação para URLs de destino. Direitos de administrador são necessários para acessar a página de administração. Se um usuário não autenticado puder acessar qualquer uma das páginas, isso é uma falha. Se um não administrador puder acessar a página do administrador, isso é uma falha.

````
pstmt.setString(1, request.getParameter("acct"));
ResultSet results = pstmt.executeQuery( );

http://example.com/app/accountInfo?acct=notmyacct

http://example.com/app/getappInfo
http://example.com/app/admin_getappInfo
````
# Solução externas
- PortSwigger
