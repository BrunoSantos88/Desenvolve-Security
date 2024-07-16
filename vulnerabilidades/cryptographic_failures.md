 # Cryptographic Failures

* Descrição
A falha de criptografia ocorre quando um sistema ou protocolo de criptografia não consegue proteger a informação
conforme esperado.
Isso pode acontecer por diversas razões, falha de implementação ou vulnerabilidades no algoritmo de criptografia.
Segue imagem abaixo.


* Descoberta da Vulnerabilidade
Ao perceber que o site não está utilizando HTTPS, usei o Wireshark para capturar os pacotes da minha sessão.
Verifiquei que sem o uso do HTTPS no site , é possível visualizar o login e a senha que sao usado na sessão http.


* Contenção/Erradicação
Configurar o servidor para uso de HTTPS, obtendo um certificado SSL/TLS de uma autoridade certificadora se
possível confiável. Isso garantirá a criptografia dos dados transmitidos entre o servidor e os usuários e assim
protegendo informações sensíveis dos clientes.

* A02:2021 – Cryptographic Failures https://owasp.org/Top10/A02_2021-Cryptographic_Failures/
* Security/Server Side TLS https://en.wikipedia.org/wiki/Transport_Layer_Security