# Pentest no Juice Shop

* DESCRIÇÃO DA EMPRESA
Há Juice Shop é uma aplicação web que simula uma
loja online de venda de sucos de frutas. No entanto,
há relatos de problemas com usuários fictícios e
danos financeiros ocorrendo diariamente na regra
de negocio online.


* Controle de versão e Escopo
- Versão:1
- Data 15/07/2024
- Juice Shop
- Bruno Santos Turma 4 SI
* Escopo
- http://juice.hostdevtest.shop
- http://juice.hostdevtest.shop/login
- http://juice.hostdevtest.shop/rest/user/login

# Análise das Vulnerabilidades
1.1 Security Misconfiguration
1.2- SQL INJECTION
1.3 Broken Authentication
1.4- Improper Error Handling
1.5 Cryptographic Failures
1.6 Privilege Escalation
1.7- Cross-Site Scripting (XSS)
1.8 File Path Manipulation
1.9 Improper Input Validation
1.10 Lack of Resources & Rate Limiting

# Conclusão
* Estado de Segurança:
O site Juice Shop possui muitas vulnerabilidades que podem causar impactos
críticos, incluindo a paralisação total em um ataque de DDOS. Além disso, há
risco de vazamentos de dados e prejuízos financeiros caso essas
vulnerabilidades sejam exploradas com sucesso. Seguindo as regras
regulamentares da LGPD, o vazamento de dados de clientes pode acarretar
sérios prejuízos. </p>

* Resumo das Vulnerabilidades:
Atualmente, a aplicação web apresenta diversas vulnerabilidades devido à
ausência de headers, resultando na vulnerabilidade Misconfiguration. Isso
facilita a visualização e a interação indevida entre cliente/servidor. Além disso,
a falta de sanitização no backend abre espaço para vulnerabilidades como XSS
e Clickjacking.
A inexistência de regras de permissões no banco de dados, a falta de
sanitização no backend e uso lista de negação de caracteres, aumentam a
vulnerabilidade a ataques de SQL Injection.
Além disso, a falta de políticas robustas de senhas e o não uso de senhas
complexas, facilitam ataques de BRUTEFORCE, o que pode causar impactos
significativos nas contas dos usuários. A ausência de criptografia no site, sem
o uso de SSL/TLS, também pode resultar em vazamentos de dados dos
clientes. </p>

* Metodologia:
Foi utilizado o Zaproxy para escanear vulnerabilidades e o Burp Suite para
realizar inputs no proxy e identificar falhas. Ferramentas do Kali Linux foram
empregadas para scan de API, endereços de rede, mapeamento de portas e
parâmetros de SQL, incluindo: Nuclei, Nikto, Nmap, Dirb, Gobuster e Sqlmap.
Na análise de criptografia no acesso HTTP, o tcpdump foi utilizado para
capturar o tráfego de rede e, com o Wireshark, foi realizada uma análise
detalhada dos parâmetros da camada HTTP.
O CVSS foi utilizado para qualificar o impacto vulnerabilidade , enquanto a
metodologia OWASP Top 10 foi utilizada para identificar, compreender a
exploração da vulnerabilidade. </p>

* Foram reportadas 10 falhas sendo: 4-CRITICA | 3-ALTA | 3-MEDIA