# Broken Access Control

CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:L/I:H/A:H

* Descrição
ataque que é considerado Broken Authentication é o brute force em endpoints de autenticação. As APIs sempre
devem impor um rate limiting para que não ocorra brute force. Se um atacante conseguir um nome de usuário ou
email válido para autenticação, ele pode fazer brute force na senha para conseguir se autenticar.

* Descoberta da Vulnerabilidade
Realizei uma verificação na aplicação e identifiquei imagens contendo feedback e comentários de usuários
com e-mails utilizando o domínio da empresa. Encontrei um e-mail de administrador, "admin@juice-sh.op",
cuja senha foi descoberta através de um ataque de dicionário. Utilizando SecLists de senhas comumente
encontradas na internet , usando proxi (burp suite) e o sistema de payload, assim foi encontrada senha no
CODE 200. Segue imagem abaixo.
Após conseguir a senha, usei o Proxi Burp Suite, sistema repeater para enviar a request com a senha
correta. Segue a imagem abaixo.

* Contenção/Erradicação
É necessário o uso de MFA (Autenticação Multifatorial) e implementação de CAPTCHA para verificar se o usuário
é humano. É importante também implementar trocas de senha semanais e evitar a reutilização de senhas
antigas. É recomendado evitar o uso da conta de administrador em redes sociais,envio de e-mails não
autorizados e Implemente um sistema de rate limit para indentificar e inibir, tentativas de bruteforce.

* Referencia
- A01 Broken Access Control
- https://owasp.org/API-Security/editions/2023/en/0xa2-broken-authentication/A07:2021 – 
- Identification and Authentication Failures
- https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/