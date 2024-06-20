# Broken Access Control

Broken Access Control (Controle de Acesso Quebrado) é uma vulnerabilidade de segurança em sistemas de computador e aplicações web, onde as restrições de acesso aos recursos não são aplicadas corretamente. Isso pode permitir que usuários não autorizados acessem informações confidenciais ou execute ações que não deveriam estar autorizados a realizar.

Existem várias formas de acessar controle quebrado pode ocorrer, incluindo:

1. Falta de Verificação de Autorização: Falha ao verificar se um usuário tem permissão para acessar um recurso específico antes de permitir o acesso.

2. Proteção Insuficiente de URL: URLs ou endpoints de API não estão devidamente protegidos, permitindo acesso não autorizado através de tentativas de força bruta ou manipulação direta de parâmetros de URL.

3. Falta de Autenticação/Controle de Sessão: Falha ao garantir que os usuários estejam autenticados antes de acessar recursos protegidos, ou não validar adequadamente as sessões de usuários.

4. Permissões Excessivas: Concessão de permissões além do necessário para usuários ou contas, aumentando o risco de acesso indevido a recursos sensíveis.

* Para mitigar vulnerabilidades de Broken Access Control, é importante implementar práticas de segurança robustas, como autenticação forte, autorização baseada em princípios do mínimo privilégio, validação rigorosa de entrada de dados, auditoria de acesso e monitoramento contínuo de acesso a recursos sensíveis.