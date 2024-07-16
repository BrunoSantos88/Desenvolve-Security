# File-Path Manipulation 

CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H

* Descrição
È o processo de construção, modificação e interpretação de caminhos de arquivos no sistema de arquivos .
Em programação, isso frequentemente envolve a manipulação de strings que representam os caminhos
para arquivos ou diretórios, para garantir que os programas possam acessar, criar, modificar ou excluir
arquivos conforme necessário. Exemplo. URL /.../.../../.../etc/passwd, caso o servidor seja um linux.

* Descoberta da Vulnerabilidade
Eu realizei testes de payload utilizando as ferramentas Dirb e Gobuster, utilizando uma SecList para os payload,
assim descobrir possíveis diretórios na URL http://juice.hostdevtest.shop. Os resultados mais importantes foi
um de CODE:200 foi URL http://juice.hostdevtest.shop/ftp. Seguem as imagem abaixo:

* Outra situação envolve as entradas nos documentos no endereço juice.hostdevtest.shop/ftp, que contêm dados
importantes e alterações. Usando %2500.md no final da URL, podemos baixar documentos com dados críticos.

* Contenção/Erradicação
A validação de entrada é a melhor maneira de evitar a manipulação do caminho do arquivo. Isso envolve
garantir que a entrada do usuário seja verificada em uma lista de caracteres e valores aceitáveis. Por exemplo,
se um aplicativo da Web só permite que os usuários acessem diretórios específicos, o aplicativo deve validar
que a entrada contém apenas os caracteres usados para acessar esses diretórios.

* Referências
- Path Traversal
- https://owasp.org/www-project-web-security-testing-guide/latest/4-
- Web_Application_Security_Testing/05-Authorization_Testing/01-Testing_Directory_Traversal_File_Include File-Path Manipulation 
- https://turingsecure.com/knowledge-base/issues/file-path-manipulation/