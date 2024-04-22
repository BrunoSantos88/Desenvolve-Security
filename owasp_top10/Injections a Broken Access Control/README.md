
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

# O aplicativo é vulnerável?
A primeira coisa é determinar as necessidades de proteção dos dados em trânsito e em repouso. Por exemplo, palavras-passe, números de cartão de crédito, registos de saúde, informações pessoais e segredos comerciais requerem proteção extra, especialmente se esses dados estiverem abrangidos por leis de privacidade, por exemplo, o Regulamento Geral de Proteção de Dados (GDPR) da UE, ou regulamentos, por exemplo, proteção de dados financeiros, como PCI Padrão de segurança de dados (PCI DSS). Para todos esses dados:
* Algum dado é transmitido em texto não criptografado? Isso se aplica a protocolos como HTTP, SMTP e FTP. O tráfego externo da Internet é especialmente perigoso. Verifique todo o tráfego interno, por exemplo, entre balanceadores de carga, servidores web ou sistemas back-end.
* Algum algoritmo criptográfico antigo ou fraco é usado por padrão ou em códigos mais antigos?
* As chaves criptográficas padrão estão em uso, as chaves criptográficas fracas são geradas ou reutilizadas ou está faltando gerenciamento ou rotação adequada de chaves?
* A criptografia não é aplicada, por exemplo, faltam diretivas ou cabeçalhos de segurança do agente do usuário (navegador)?
* O agente do usuário (por exemplo, aplicativo, cliente de e-mail) não verifica se o certificado do servidor recebido é válido?
Consulte ASVS Crypto (V7), Proteção de Dados (V9) e SSL/TLS (V10)

# Como prevenir
Faça pelo menos o seguinte e consulte as referências:
* Classifique os dados processados, armazenados ou transmitidos por uma aplicação. Identifique quais dados são confidenciais de acordo com leis de privacidade, requisitos regulatórios ou necessidades comerciais.
* Aplicar controles conforme classificação.
* Não armazene dados confidenciais desnecessariamente. Descarte-o o mais rápido possível ou use tokenização ou mesmo truncamento compatível com PCI DSS. Os dados que não são retidos não podem ser roubados.
* Certifique-se de criptografar todos os dados confidenciais em repouso.
* Garantir que algoritmos, protocolos e chaves padrão fortes e atualizados estejam em vigor; use o gerenciamento de chaves adequado.
* Criptografe todos os dados em trânsito com protocolos seguros, como TLS, com cifras Perfect Forward Secrecy (PFS), priorização de cifras pelo servidor e parâmetros seguros. Aplique a criptografia usando diretivas como HTTP Strict Transport Security ( HSTS ).
* Desative o cache para respostas que contenham dados confidenciais.
* Armazene senhas usando funções de hashing adaptativas e salgadas fortes com um fator de trabalho (fator de atraso), como Argon2 , scrypt , bcrypt ou PBKDF2 .
* Verifique de forma independente a eficácia das configurações e definições.


- Cenário nº 1 : um aplicativo criptografa números de cartão de crédito em um banco de dados usando criptografia automática de banco de dados. No entanto, esses dados são descriptografados automaticamente quando recuperados, permitindo que uma falha de injeção de SQL recupere números de cartão de crédito em texto não criptografado. </p>

- Cenário nº 2 : um site não usa nem aplica TLS para todas as páginas ou oferece suporte a criptografia fraca. Um invasor monitora o tráfego de rede (por exemplo, em uma rede sem fio insegura), faz downgrade das conexões de HTTPS para HTTP, intercepta solicitações e rouba o cookie de sessão do usuário. O invasor então reproduz esse cookie e sequestra a sessão (autenticada) do usuário, acessando ou modificando os dados privados do usuário. Em vez do acima exposto, poderiam alterar todos os dados transportados, por exemplo, o destinatário de uma transferência de dinheiro. </p>

- Cenário nº 3 : O banco de dados de senhas usa hashes simples ou sem sal para armazenar as senhas de todos. Uma falha no upload de arquivos permite que um invasor recupere o banco de dados de senhas. Todos os hashes sem sal podem ser expostos com uma tabela arco-íris de hashes pré-calculados. Hashes gerados por funções hash simples ou rápidas podem ser quebrados por GPUs, mesmo que tenham sido salgados.</p>

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

link: https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control