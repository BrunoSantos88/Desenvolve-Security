# Requisitos de verificação de comunicações

- Objetivo de controle.

* Certifique-se de que um aplicativo verificado atenda aos seguintes requisitos de alto nível:
* TLS ou criptografia forte é sempre usado, independentemente da sensibilidade dos dados transmitidos
* Os conselhos de configuração mais recentes e líderes são usados ​​para ativar e ordenar algoritmos e
cifras
* Algoritmos e cifras fracos ou prestes a serem obsoletos são ordenados como último recurso
* Algoritmos e cifras obsoletos ou conhecidos como inseguros estão desativados.
- Os principais conselhos do setor sobre configuração segura de TLS mudam com frequência, muitas vezes devido a interrupções catastróficas no </p>
algoritmos e cifras existentes. Sempre use as versões mais recentes das ferramentas de revisão de configuração TLS. </p>
(como SSLyze ou outros scanners TLS) para configurar a ordem preferencial e a seleção do algoritmo. A configuração deve
ser verificados periodicamente para garantir que a configuração de comunicações seguras esteja sempre presente e eficaz.</p>

# Requisitos de segurança de comunicações do cliente

* Todas as comunicações do cliente só devem ocorrer através de caminhos de comunicação criptografados. Em particular, o uso
do TLS 1.2 ou posterior é essencialmente exigido pelos navegadores e mecanismos de pesquisa modernos. A configuração deve
ser revisados ​​regularmente usando ferramentas on-line para garantir que as práticas líderes mais recentes estejam em vigor. </p>

* 9.1.1 Verifique se o TLS seguro é usado para toda a conectividade do cliente e não faz fallback
para protocolos inseguros ou não criptografados. (C8) </p>

* 9.1.2 Verifique usando ferramentas de teste TLS on-line ou atualizadas que apenas algoritmos fortes,
cifras e protocolos estão habilitados, com os algoritmos e cifras mais fortes definidos
como preferido. </p>

* 9.1.3 Verifique se as versões antigas dos protocolos SSL e TLS, algoritmos, cifras e
configuração estão desabilitadas, como SSLv2, SSLv3 ou TLS 1.0 e TLS 1.1. O
a versão mais recente do TLS deve ser o conjunto de criptografia preferido. </p>

 # Requisitos de segurança de comunicações do servidor

* As comunicações do servidor são mais do que apenas HTTP. Conexões seguras de e para outros sistemas, como
sistemas de monitoramento, ferramentas de gerenciamento, acesso remoto e ssh, middleware, banco de dados, mainframes, parceiros
ou sistemas de fontes externas — devem estar implementados. Tudo isso deve ser criptografado para evitar "graves para o
por fora, trivialmente fácil de interceptar por dentro". </p>


- 9.2.1 Verifique se as conexões de e para o servidor usam certificados TLS confiáveis.
Quando forem usados ​​certificados gerados internamente ou autoassinados, o servidor deverá
ser configurado para confiar apenas em CAs internas específicas e autoassinadas específicas
certificados. Todos os outros devem ser rejeitados. </p>



- 9.2.2 Verifique se as comunicações criptografadas, como TLS, são usadas para todas as comunicações de entrada e
conexões de saída, inclusive para portas de gerenciamento, monitoramento,
autenticação, API ou chamadas de serviço web, banco de dados, nuvem, sem servidor, mainframe,
conexões externas e de parceiros. O servidor não deve voltar a ser inseguro ou
protocolos não criptografados. </p>

- 9.2.4 Verifique se a revogação adequada da certificação, como Status do Certificado Online
O grampeamento de protocolo (OCSP) está habilitado e configurado. </p>


- 9.2.5 Verifique se as falhas de conexão TLS de backend são registradas. </p>


# V10.2 Pesquisa de código malicioso

- O código malicioso é extremamente raro e difícil de detectar. A revisão manual do código linha por linha pode ajudar na procura
bombas lógicas, mas mesmo o revisor de código mais experiente terá dificuldade para encontrar código malicioso, mesmo que
saiba que existe. </p>

- O cumprimento desta seção não é possível sem acesso completo ao código-fonte, incluindo código-fonte de terceiros
bibliotecas. </p>


* 10.1.1 Verifique se está em uso uma ferramenta de análise de código que possa detectar
código, como funções de tempo, operações de arquivos inseguras e conexões de rede </p>



 # V10.2 Pesquisa de código malicioso

* O código malicioso é extremamente raro e difícil de detectar. A revisão manual do código linha por linha pode ajudar na procura
bombas lógicas, mas mesmo o revisor de código mais experiente terá dificuldade para encontrar código malicioso, mesmo que
saiba que existe. </p>

* O cumprimento desta seção não é possível sem acesso completo ao código-fonte, incluindo código-fonte de terceiros
bibliotecas. </p>


* 10.2.1 Verifique se o código fonte da aplicação e bibliotecas de terceiros não contêm
recursos não autorizados de telefone residencial ou coleta de dados. Onde tal
funcionalidade existe, obtenha a permissão do usuário para que ela opere antes
coletar quaisquer dados. </p>

* 10.2.2 Verifique se a aplicação não solicita informações desnecessárias ou excessivas
permissões para recursos ou sensores relacionados à privacidade, como contatos, câmeras,
microfones ou localização. </p>


* 10.2.3 Verifique se o código fonte da aplicação e bibliotecas de terceiros não contêm
backdoors, como contas ou chaves codificadas ou adicionais não documentadas,
ofuscação de código, blobs binários não documentados, rootkits ou antidepuração,
recursos de depuração inseguros ou desatualizados, inseguros ou ocultos
funcionalidade que poderia ser usada maliciosamente se descoberta. </p>


* 10.2.4 Verifique se o código fonte da aplicação e bibliotecas de terceiros não contêm
bombas-relógio pesquisando funções relacionadas a data e hora. </p>


* 10.2.5 Verifique se o código fonte da aplicação e bibliotecas de terceiros não contêm
códigos maliciosos, como ataques de salame, desvios lógicos ou bombas lógicas. </p>

* 10.2.6 Verifique se o código fonte da aplicação e bibliotecas de terceiros não contêm
Ovos de Páscoa ou qualquer outra funcionalidade potencialmente indesejada. </p>


 # V10.3 Controles de integridade de aplicativos implementados 

* Depois que um aplicativo é implantado, códigos maliciosos ainda podem ser inseridos. Os aplicativos precisam se proteger
contra ataques comuns, como execução de código não assinado de fontes não confiáveis ​​e controle de subdomínios.
O cumprimento desta seção provavelmente será operacional e contínuo. </p>


* 10.3.1 Verifique se a aplicação possui recurso de atualização automática de cliente ou servidor, atualiza
devem ser obtidos através de canais seguros e assinados digitalmente. O código de atualização
deve validar a assinatura digital da atualização antes de instalar ou executar
a atualização. </p>


* 10.3.2 Verifique se o aplicativo emprega proteções de integridade, como assinatura de código
ou integridade de sub-recursos. O aplicativo não deve carregar ou executar código de
fontes não confiáveis, como carregamento de inclusões, módulos, plug-ins, código ou bibliotecas
de fontes não confiáveis ​​ou da Internet. </p>



* 10.3.3 Verifique se a aplicação possui proteção contra controle de subdomínio se o
aplicativo depende de entradas DNS ou subdomínios DNS, como expirados
nomes de domínio, ponteiros DNS ou CNAMEs desatualizados, projetos expirados em público
repositórios de código-fonte ou APIs de nuvem transitórias, funções sem servidor ou armazenamento
buckets (autogen-bucket-id.cloud.example.com) ou similar. As proteções podem
incluem garantir que os nomes DNS usados ​​pelos aplicativos sejam verificados regularmente quanto a
vencimento ou alteração.</p>

# V11: Requisitos de verificação de lógica de negócios

- Objetivo de controle
* Certifique-se de que um aplicativo verificado atenda aos seguintes requisitos de alto nível:
• O fluxo da lógica de negócios é sequencial, processado em ordem e não pode ser ignorado. </p>
• A lógica de negócios inclui limites para detectar e prevenir ataques automatizados, como pequenos fundos contínuos
transferências ou adição de um milhão de amigos, um de cada vez, e assim por diante. </p>
• Fluxos de lógica de negócios de alto valor consideraram casos de abuso e atores mal-intencionados e têm proteções
contra falsificação, adulteração, repúdio, divulgação de informações e ataques de elevação de privilégios. </p>


# Requisitos de segurança da lógica de negócios V11.1

* A segurança da lógica de negócios é tão individual para cada aplicativo que nenhuma lista de verificação será aplicada. Logíca de negócios
a segurança deve ser projetada para proteger contra prováveis ​​ameaças externas - ela não pode ser adicionada usando a web
firewalls de aplicativos ou comunicações seguras. Recomendamos o uso de modelagem de ameaças durante o design
sprints, por exemplo, usando o OWASP Cornucopia ou ferramentas similares.  </p>

# Descrição L1 L2 L3 CWE
* 11.1.1 Verifique se a aplicação processará apenas fluxos de lógica de negócios para o mesmo usuário em
ordem de etapas sequencial e sem pular etapas.  </p>


1* 1.1.2 Verifique se a aplicação processará apenas fluxos de lógica de negócios com todas as etapas sendo
processadas em tempo humano realista, ou seja, as transações não são enviadas muito
rapidamente.  </p>


* 11.1.3 Verifique se o aplicativo possui limites apropriados para ações comerciais específicas ou
transações que são aplicadas corretamente por usuário.  </p>


* 11.1.4 Verifique se a aplicação possui controles antiautomação suficientes para detectar e
proteger contra exfiltração de dados, solicitações excessivas de lógica de negócios,
uploads de arquivos ou ataques de negação de serviço.  </p>


* 11.1.5 Verifique se o aplicativo possui limites de lógica de negócios ou validação para proteção contra
prováveis ​​riscos ou ameaças de negócios, identificados usando modelagem de ameaças ou similar
metodologias.  </p>


* 11.1.6 Verifique se a aplicação não sofre de “Time Of Check to Time Of Use”
(TOCTOU) ou outras condições de corrida para operações sensíveis.  </p>


8 11.1.7 Verifique se o aplicativo monitora eventos ou atividades incomuns de uma empresa
perspectiva lógica. Por exemplo, tentativas de executar ações fora de ordem ou
ações que um usuário normal nunca tentaria. (C9)  </p>

* 11.1.8 Verifique se a aplicação possui alertas configuráveis ​​quando ataques automatizados ou
atividade incomum é detectada.  </p>

# V12: Requisitos de verificação de arquivos e recursos

- Objetivo de controle
Certifique-se de que um aplicativo verificado atenda aos seguintes requisitos de alto nível:
• Os dados de arquivos não confiáveis ​​devem ser tratados adequadamente e de maneira segura.
• Dados de arquivos não confiáveis ​​obtidos de fontes não confiáveis ​​são armazenados fora da raiz da web e com capacidade limitada.
permissões. </p>

# Requisitos de upload de arquivo V12.1
Embora as bombas zip sejam eminentemente testáveis ​​usando técnicas de teste de penetração, elas são consideradas L2 e
acima para incentivar a consideração de design e desenvolvimento com testes manuais cuidadosos e para evitar
teste de penetração manual automatizado ou não qualificado de uma condição de negação de serviço. </p>

* 12.1.1 Verifique se a aplicação não aceitará arquivos grandes que possam ocupar espaço de armazenamento ou
causar uma negação de serviço. </p>

* 12.1.2 Verifique se os arquivos compactados são verificados em busca de "bombas zip" - pequenos arquivos de entrada que
irá descompactar em arquivos enormes, esgotando assim os limites de armazenamento de arquivos. </p>

* 12.1.3 Verifique se uma cota de tamanho de arquivo e o número máximo de arquivos por usuário são aplicados
para garantir que um único usuário não possa preencher o armazenamento com muitos arquivos, ou
arquivos excessivamente grandes. </p>

# Requisitos de integridade de arquivo V12.2

* 12.2.1 Verifique se os arquivos obtidos de fontes não confiáveis ​​são validados para serem de
tipo esperado com base no conteúdo do arquivo. </p>

# Requisitos de execução de arquivo V12.3

* 12.3.1 Verifique se os metadados do nome de arquivo enviados pelo usuário não são usados ​​diretamente pelo sistema ou
sistemas de arquivos framework e que uma API de URL é usada para proteger contra caminhos
Travessia. </p>

* 12.3.2 Verifique se os metadados do nome de arquivo enviados pelo usuário são validados ou ignorados para
impedir a divulgação, criação, atualização ou remoção de arquivos locais (LFI).</p>


# 12.3.3 Verifique se os metadados do nome de arquivo enviados pelo usuário são validados ou ignorados para
impedir a divulgação ou execução de arquivos remotos por meio da inclusão remota de arquivos
(RFI) ou ataques de falsificação de solicitação do lado do servidor (SSRF).</p>

# 12.3.4 Verifique se o aplicativo protege contra Reflective File Download (RFD)

* validando ou ignorando nomes de arquivos enviados pelo usuário em JSON, JSONP ou URL
parâmetro, o cabeçalho Content-Type da resposta deve ser definido como text/plain e
o cabeçalho Content-Disposition deve ter um nome de arquivo fixo. </p>

* 2.3.5 Verifique se metadados de arquivos não confiáveis ​​não são usados ​​diretamente com a API do sistema ou
bibliotecas, para proteger contra injeção de comando do sistema operacional. </p>


# Padrão de verificação de segurança de aplicativos 4.0.2 55

* 12.3.6 Verifique se a aplicação não inclui e executa funcionalidades do
fontes não confiáveis, como redes de distribuição de conteúdo não verificadas, JavaScript
bibliotecas, bibliotecas de nó npm ou DLLs do lado do servidor. </p>

# Requisitos de armazenamento de arquivos V12.4

* 12.4.1 Verifique se os arquivos obtidos de fontes não confiáveis ​​estão armazenados fora da web
root, com permissões limitadas, de preferência com validação forte.</p>

* 12.4.2 Verifique se os arquivos obtidos de fontes não confiáveis ​​são verificados por antivírus
scanners para impedir o upload de conteúdo malicioso conhecido.</p>


# Requisitos de download de arquivo V12.5

* 12.5.1 Verifique se a camada web está configurada para servir apenas arquivos com arquivo específico
extensões para evitar informações não intencionais e vazamento de código-fonte. Para
por exemplo, arquivos de backup (por exemplo, .bak), arquivos de trabalho temporários (por exemplo, .swp),
arquivos compactados (.zip, .tar.gz, etc) e outras extensões comumente usadas por
editores devem ser bloqueados, a menos que seja necessário. </p>

* 12.5.2 Verifique se as solicitações diretas aos arquivos carregados nunca serão executadas como
Conteúdo HTML/JavaScript.</p>

# Requisitos de proteção SSRF V12.6

* 12.6.1 Verifique se o servidor web ou de aplicativos está configurado com uma lista de permissões de
recursos ou sistemas para os quais o servidor pode enviar solicitações ou carregar dados/arquivos
de. </p>

# V13.1 Requisitos genéricos de verificação de segurança de serviços da Web

* 13.1.1 Verifique se todos os componentes do aplicativo usam as mesmas codificações e analisadores para
evite ataques de análise que explorem diferentes URIs ou comportamentos de análise de arquivos que
poderia ser usado em ataques SSRF e RFI.


* 13.1.2 Verifique se o acesso às funções de administração e gerenciamento é limitado a
administradores autorizados.


* 13.1.3 Verifique se os URLs da API não expõem informações confidenciais, como a chave da API,
tokens de sessão etc.



* 13.1.4 Verifique se as decisões de autorização são tomadas no URI, aplicadas pelo
segurança programática ou declarativa no controlador ou roteador e no
nível de recurso, imposto por permissões baseadas em modelo.

* 13.1.5 Verifique se as solicitações contendo tipos de conteúdo inesperados ou ausentes são
rejeitado com cabeçalhos apropriados (status de resposta HTTP 406 Inaceitável ou
415 Tipo de mídia não suportado).


 # Requisitos de verificação de serviço Web RESTful V13.2

* A validação do esquema JSON está em fase preliminar de padronização (ver referências). Ao considerar usar JSON
validação de esquema, que é a prática recomendada para serviços da Web RESTful, considere usar esses dados adicionais
estratégias de validação em combinação com validação de esquema JSON:
• Validação de análise do objeto JSON, como se houvesse elementos extras ou ausentes.
• Validação dos valores do objeto JSON usando métodos de validação de entrada padrão, como tipo de dados, dados
formato, comprimento, etc.
e validação formal do esquema JSON. </p>

* Assim que o padrão de validação do esquema JSON for formalizado, a ASVS atualizará seus conselhos nesta área. Com cuidado
monitorar quaisquer bibliotecas de validação de esquema JSON em uso, pois elas precisarão ser atualizadas regularmente até o
o padrão é formalizado e os bugs são eliminados das implementações de referência. </p>


* 13.2.1 Verifique se os métodos HTTP RESTful habilitados são uma escolha válida para o usuário ou
ação, como impedir que usuários normais usem DELETE ou PUT em API protegida
ou recursos.</p>


* 13.2.2 Verifique se a validação do esquema JSON está em vigor e verificada antes de aceitar
entrada. </p>


* 13.2.3 Verifique se os serviços web RESTful que utilizam cookies estão protegidos contra ataques cruzados.
Falsificação de solicitação de site através do uso de pelo menos um ou mais dos seguintes:

padrão de cookie de envio duplo, nonces CSRF ou verificações de cabeçalho de solicitação Origin.

* 13.2.4 Verifique se os serviços REST possuem controles antiautomação para proteção contra
chamadas excessivas, especialmente se a API não for autenticada.


* 13.2.5 Verifique se os serviços REST verificam explicitamente se o Content-Type de entrada é o
esperado, como application/xml ou application/json.


* 13.2.6 Verifique se os cabeçalhos das mensagens e a carga útil são confiáveis ​​e não modificados
em trânsito. Exigir criptografia forte para transporte (somente TLS) pode ser suficiente
em muitos casos, pois fornece confidencialidade e proteção de integridade. Por-
assinaturas digitais de mensagens podem fornecer garantia adicional além do
proteções de transporte para aplicações de alta segurança, mas trazem consigo
complexidade e riscos adicionais para pesar em relação aos benefícios. </p>

# Requisitos de verificação do serviço Web SOAP V13.3

* 13.3.1 Verifique se a validação do esquema XSD ocorre para garantir um XML formado corretamente
documento, seguido pela validação de cada campo de entrada antes de qualquer processamento de
esses dados ocorrem. </p>


* 13.3.2 Verifique se a carga útil da mensagem está assinada usando WS-Security para garantir confiabilidade
transporte entre cliente e serviço. </p>


# V13.4 GraphQL e outros requisitos de segurança da camada de dados de serviços da Web

* 13.4.1 Verifique se uma lista de permissões de consulta ou uma combinação de limite de profundidade e quantidade
a limitação é usada para evitar negação de serviço de expressão GraphQL ou da camada de dados
(DoS) como resultado de consultas aninhadas e caras. Para cenários mais avançados,
a análise de custos de consulta deve ser usada. </p>

*13.4.2 Verifique se o GraphQL ou outra lógica de autorização da camada de dados deve ser
implementado na camada de lógica de negócios em vez da camada GraphQL. </p>

# V14: Configuration Verification Requirements
- Certifique-se de que um aplicativo verificado tenha:
• Um ambiente de construção seguro, repetível e automatizável.
• Gerenciamento reforçado de bibliotecas, dependências e configurações de terceiros, de modo que estejam desatualizados ou
componentes inseguros não são incluídos pelo aplicativo.
• Uma configuração segura por padrão, de modo que administradores e usuários tenham que enfraquecer o padrão
postura de segurança.</p>
- A configuração imediata do aplicativo deve ser segura para estar na Internet, o que significa um ambiente seguro a configuração da caixa.

# V14.1 Build
* Construir pipelines é a base para uma segurança repetível - toda vez que algo inseguro é descoberto, pode ser
resolvido no código-fonte, scripts de construção ou implantação e testado automaticamente. Estamos fortemente
incentivando o uso de pipelines de construção com verificações automáticas de segurança e dependência que avisam ou quebram o
build para evitar que problemas de segurança conhecidos sejam implantados na produção. Etapas manuais executadas irregularmente
leva diretamente a erros de segurança evitáveis. </p>
* À medida que a indústria avança para um modelo DevSecOps, é importante garantir a disponibilidade e integridade contínuas
de implantação e configuração para atingir um estado "bom conhecido". No passado, se um sistema fosse hackeado,
levaria dias ou meses para provar que nenhuma outra intrusão ocorreu. Hoje, com o advento
infraestrutura definida por software, implantações A/B rápidas com tempo de inatividade zero e contêineres automatizados
compilações, é possível construir, proteger e implantar de forma automática e contínua um substituto "em bom estado"
para qualquer sistema comprometido. </p>

* Se os modelos tradicionais ainda estiverem em vigor, então devem ser tomadas medidas manuais para fortalecer e respaldar esses
configuração para permitir que os sistemas comprometidos sejam rapidamente substituídos por sistemas de alta integridade e descomprometidos
sistemas em tempo hábil.
A conformidade com esta seção requer um sistema de compilação automatizado e acesso a scripts de compilação e implantação.

* 14.1.1 Verifique se os processos de construção e implantação da aplicação são executados em um
forma segura e repetível, como automação CI / CD, automatizada
gerenciamento de configuração e scripts de implantação automatizados.

* 14.1.2 Verifique se os flags do compilador estão configurados para ativar todos os buffer overflows disponíveis
proteções e avisos, incluindo randomização de pilha, execução de dados
prevenção e interromper a construção se um ponteiro inseguro, memória, string de formato,
operações de inteiro ou string são encontradas.

* 14.1.3 Verifique se a configuração do servidor está reforçada de acordo com as recomendações do
servidor de aplicativos e estruturas em uso.

* 14.1.4 Verifique se a aplicação, a configuração e todas as dependências podem ser re-
implantado usando scripts de implantação automatizados, criados a partir de um documento documentado e

* 14.1.5 Verifique se os administradores autorizados podem verificar a integridade de todos os
configurações relevantes para detectar adulteração.


# Dependência V14.2

* O gerenciamento de dependências é fundamental para a operação segura de qualquer aplicativo de qualquer tipo. Falha em acompanhar
data com dependências desatualizadas ou inseguras é a causa raiz dos maiores e mais caros ataques a
data.

* Nota: No Nível 1, a conformidade com 14.2.1 refere-se a observações ou detecções de bibliotecas do lado do cliente e de outras bibliotecas e
componentes, em vez da análise de código estático ou análise de dependência mais precisa em tempo de construção. Esses
técnicas mais precisas poderiam ser descobertas por entrevista, conforme necessário.

* 14.2.1 Verifique se todos os componentes estão atualizados, preferencialmente usando uma dependência
verificador durante a construção ou tempo de compilação. (C2)

* 14.2.2 Verifique se todos os recursos, documentação, amostras e configurações desnecessárias estão
removidos, como aplicativos de amostra, documentação da plataforma e padrões ou
exemplos de usuários.

* 14.2.3 Verifique se os ativos do aplicativo, como bibliotecas JavaScript, CSS ou fontes da web,
são hospedados externamente em uma rede de distribuição de conteúdo (CDN) ou externa
provedor, Subresource Integrity (SRI) é usado para validar a integridade do
ativo.

* 14.2.4 Verifique se os componentes de terceiros vêm de fontes predefinidas, confiáveis ​​e
repositórios mantidos continuamente. (C2)

* 14.2.5 Verifique se é mantido um catálogo de inventário de todas as bibliotecas de terceiros em uso.
(C2)

* 14.2.6 Verifique se a superfície de ataque é reduzida por meio de sandbox ou encapsulamento de terceiros
bibliotecas de terceiros para expor apenas o comportamento necessário no aplicativo. (C2)

# V14.3 Requisitos de divulgação de segurança não intencional

* As configurações para produção devem ser reforçadas para proteção contra ataques comuns, como consoles de depuração,
elevar o nível dos ataques de Cross-site Scripting (XSS) e de inclusão remota de arquivos (RFI) e eliminar
"vulnerabilidades" de descoberta de informações que são a marca registrada indesejável de muitos relatórios de testes de penetração.
Muitas destas questões raramente são classificadas como um risco significativo, mas estão interligadas com outras
vulnerabilidades. Se esses problemas não estiverem presentes por padrão, o nível será elevado antes que a maioria dos ataques possa ter sucesso.

* 14.3.1 Verifique se as mensagens de erro do servidor web ou de aplicativos e da estrutura são
configurado para fornecer respostas acionáveis ​​e personalizadas ao usuário para eliminar qualquer
divulgações de segurança não intencionais.

* 14.3.2 Verifique se o servidor da Web ou de aplicativos e os modos de depuração da estrutura do aplicativo
são desativados na produção para eliminar recursos de depuração, consoles de desenvolvedor,
e divulgações de segurança não intencionais.

* 14.3.3 Verifique se os cabeçalhos HTTP ou qualquer parte da resposta HTTP não expõem
informações detalhadas sobre a versão dos componentes do sistema.

# Requisitos de cabeçalhos de segurança HTTP V14.4

* 14.4.1 Verifique se cada resposta HTTP contém um cabeçalho Content-Type. texto/*, /+xml
e os tipos de conteúdo application/xml também devem especificar um conjunto de caracteres seguro (por exemplo,
UTF-8, ISO-8859-1).

* 14.4.2 Verifique se todas as respostas da API contêm um anexo Content-Disposition:;
cabeçalho filename="api.json" (ou outro nome de arquivo apropriado para o conteúdo
tipo).

* 14.4.3 Verifique se um cabeçalho de resposta da Política de Segurança de Conteúdo (CSP) está em vigor
ajuda a mitigar o impacto de ataques XSS como HTML, DOM, JSON e JavaScript
vulnerabilidades de injeção.


* 14.4.4 Verifique se todas as respostas contêm um cabeçalho X-Content-Type-Options: nosniff. ✓ ✓ ✓ 116
14.4.5 Verifique se um cabeçalho Strict-Transport-Security está incluído em todas as respostas e
para todos os subdomínios, como Strict-Transport-Security: max-age=15724800;
includeSubdomínios.


* 14.4.6 Verifique se um cabeçalho "Referrer-Policy" adequado está incluído, como "no-referrer"
ou "mesma origem".

* 14.4.7 Verifique se o conteúdo de uma aplicação web não pode ser incorporado em um aplicativo de terceiros
site do partido por padrão e que a incorporação dos recursos exatos só é permitida quando necessário, usando Content-Security-Policy: frame-ancestors adequado
e cabeçalhos de resposta X-Frame-Options.


# V14.5 Validar requisitos de cabeçalho de solicitação HTTP

* 14.5.1 Verifique se o servidor de aplicação aceita apenas os métodos HTTP em uso pelo
aplicativo/API, incluindo OPÇÕES de pré-voo e logs/alertas sobre quaisquer solicitações
que não são válidos para o contexto do aplicativo.


* 14.5.2 Verifique se o cabeçalho Origin fornecido não é usado para autenticação ou acesso
decisões de controle, já que o cabeçalho Origin pode ser facilmente alterado por um invasor.


* 14.5.3 Verifique se o Cross-Origin Resource Sharing (CORS) Access-Control-Allow-
O cabeçalho Origin usa uma lista restrita de domínios e subdomínios confiáveis ​​para
corresponde e não suporta a origem "nula".

* 14.5.4 Verifique se os cabeçalhos HTTP adicionados por um proxy confiável ou dispositivos SSO, como um
token ao portador, são autenticados pelo aplicativo.
