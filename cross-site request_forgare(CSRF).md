# Cross-Site Request Forgery (CSRF):

* Cross-Site Request Forgery (CSRF), em português "Falsificação de Solicitação entre Sites", é uma vulnerabilidade de segurança comum na web, onde um atacante induz um usuário autenticado a realizar ações não intencionadas em um aplicativo web que ele está autenticado. Essa vulnerabilidade explora a confiança que um aplicativo web tem no navegador do usuário.
Funcionamento da CSRF:

1. Autenticação: O usuário autenticado em um aplicativo web recebe um cookie de sessão que . autentica suas ações subsequentes.

2. Ataque CSRF: Um atacante cria uma página maliciosa (ou um link) que faz uma requisição HTTP para o aplicativo web alvo, aproveitando a sessão autenticada do usuário. Por exemplo, o atacante pode criar um formulário invisível que submeta dados para um endpoint vulnerável do aplicativo web.

3. Execução da Ação Maliciosa: Quando o usuário visita a página maliciosa (ou clica no link), o navegador automaticamente envia a requisição para o aplicativo web alvo, usando o cookie de sessão autenticado. Como o aplicativo não pode distinguir entre uma solicitação legítima do usuário e uma solicitação forjada pelo atacante, ele executa a ação solicitada pelo atacante.

4. Consequências: Dependendo do contexto, as consequências de um ataque CSRF podem variar. Por exemplo, o atacante pode realizar ações como transferências de fundos, alterações de configurações, exclusão de dados, entre outras, em nome do usuário autenticado.

# Prevenção da CSRF:

* Para mitigar ataques CSRF, são utilizadas diversas técnicas:

1. Token CSRF: O aplicativo gera um token único e aleatório para cada sessão ou formulário, que é enviado juntamente com a requisição e validado pelo servidor para garantir que a solicitação seja legítima.

2. SameSite Cookie Attribute: Configuração de cookies para restringir o envio de cookies para solicitações de terceiros, reduzindo assim o risco de ataques CSRF.

3. Referer Header Checking: Verificação do cabeçalho Referer para garantir que as solicitações venham de uma página esperada no mesmo site.

4. Double Submit Cookies: Envio de um cookie e um token CSRF como parâmetros da requisição, onde o token também é armazenado como cookie.

5. Revalidação de Ações Críticas: Requerer a reautenticação ou confirmação explícita do usuário para ações sensíveis ou críticas.

# Importância da Proteção CSRF:

* A CSRF é uma vulnerabilidade significativa, pois explora a confiança entre o navegador do usuário e o aplicativo web, podendo levar a ações não autorizadas e prejuízos substanciais para os usuários e para a reputação da aplicação. Portanto, implementar medidas eficazes de prevenção CSRF é essencial para proteger a integridade e a segurança dos sistemas web.
