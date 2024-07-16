# Introdução à Privilege Escalation

* Descrição
Ocorre quando um usuário comum acessa dados ou funcionalidades de outro usuário com permissões semelhantes.
Ato de explorar uma vulnerabilidade ou falha de design em um sistema para obter acesso ou permissões elevadas
além do que normalmente é autorizado.

* Descoberta da Vulnerabilidade
Criei um usuário fictício com o e-mail brunosantos@santos.com, que possui a permissão "customer". Possivelmente,
não existem regras específicas para restringir a criação ou exclusão de usuários dentro dessa permissão.

* Após a criação de um usuário, é aplicada a ele a regra de permissão "customer". Esse usuário, então, passa a ter
permissão para criar outros usuários com diferentes níveis de permissão, incluindo a permissão de administrador,
que pode ser designada durante a criação de um novo usuário. Assim, com a permissão de "customer", foi possível
criar outro usuário com a permissão de administrador. Segue próxima imagem abaixo.

* Contenção/Erradicação
Atualizar as políticas de segurança para prevenir futuras elevações de privilégios. Se possível rever todas as contas
de usuário e privilégios já existentes para garantir que não haja.


* Referências
- Privilege Escalation API3:2023 Broken Object Property Level Authorization
- https://owasp.org/www-project-web-security-testing-guide/v41/4-
- Web_Application_Security_Testing/05-Authorization_Testing/03- Testing_for_Privilege_Escalation
- https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/