# XSS Cross-Site Scripting

CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N

* Descrição
Cross-Site Scripting é uma vulnerabilidade de segurança comum encontrada em aplicações web. Ela ocorre
quando um atacante consegue injetar código malicioso geralmente JavaScript em páginas web visualizadas por
outros usuários. Isso pode ocorrer através de entradas não validadas em formulários, URLs ou até mesmo em
campos de cookies.

* Descoberta da Vulnerabilidade
verificando alguns inputs na aba de pesquisa do site Juiceshop. É possível inserir código HTML, como <h1>Hello,
World!</h1> ou JavaScript, como <iframe src="javascript:alert('xss')">? Segue imagens abaixo."

* Contenção/Erradicação
Utilizar Políticas de Segurança de Conteúdo Content Security Policy (CSP), pode ajudar a prevenir ataques XSS
ao restringir as fontes de onde o conteúdo pode ser carregado e executado na aplicação. Verificação todas as
entradas recebidas, seja de formulários, parâmetros de URL ou cookies, devem ser rigorosamente validadas
para garantir que correspondam aos tipos, formatos e comprimentos esperados. Sanitização de Dados com
entradas para remover ou neutralizar caracteres potencialmente perigosos, evitando a execução de scripts mal-
intencionados.

* Referências
0 A7:2017-Cross-Site Scripting (XSS) Cross-Site_Scripting 
- https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-
- Site_Scripting_(XSS)
- https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html