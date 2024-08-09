# Pentest no Juice Shop

* DESCRIÇÃO DA EMPRESA
Há Juice Shop é uma aplicação web que simula uma
loja online de venda de sucos de frutas. No entanto,
há relatos de problemas com usuários fictícios e
danos financeiros ocorrendo diariamente na regra
de negocio online.

<h3>
    <table>
        <tr>
            <th>Controle de versão e Escopo</th>
        </tr>
        <tr>
            <td>Versão:1</td>
            <td>Data 15/07/2024</td>
       <tr>
            <td>Juice Shop</td>
            <td>Bruno Santos Turma 4 SI</td>
       <tr>
       <tr>
            <td>url</td>
            <td>http://juice.hostdevtest.shop
- http://juice.hostdevtest.shop/login
- http://juice.hostdevtest.shop/rest/user/login</td>
       <tr>
    </table>
</h3> 
</p>

# Análise das Vulnerabilidades
1.1-SQL INJECTION Impacto: ALTA CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N </p>
- Explicação: SQL Injection permite que um invasor manipule consultas SQL, levando ao acesso a dados não autorizados (Confidencialidade: Alta) e modificação ou destruição de dados (Integridade: Alto). Embora não tenha impacto direto na disponibilidade, pode levar a violações de dados, razão pela qual o impacto é classificado como Alto. 
  
1.2 Broken Authentication Impacto: ALTA CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:L  </p>
- Credenciais comprometidas podem levar ao acesso não autorizado a contas de usuário e dados confidenciais (Confidentiality: High). Além disso, os invasores podem se passar por usuários legítimos para executar ações em seu nome, levando a modificação ou destruição de dados (Integridade: Alta). Embora o impacto da disponibilidade seja baixo, o dano potencial à confidencialidade e integridade torna o impacto geral Alto.
  
1.3 Cryptographic Failures Impacto: ALTA CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N </p>
- Falhas criptográficas podem resultar no comprometimento de dados confidenciais (Confidencialidade: Alta) e modificação ou destruição de dados não autorizados (Integridade: Alta). Embora o impacto da disponibilidade seja Nenhum, o dano potencial à confidencialidade e integridade torna o impacto geral Alto. 

1.4 Path Traversal Impacto: Medio CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N </p>
- O Path Traversal permite que um invasor acesse ou modifique arquivos fora do diretório pretendido, levando a acesso ou modificação de dados não autorizados. No entanto, isso não afeta diretamente a confidencialidade ou a disponibilidade, portanto, o impacto geral é o Medio
  
1.5 Lack of Resources & Rate Limiting Impacto: Medio CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N </p>
- Sem o gerenciamento adequado de recursos e a limitação de taxa, um invasor pode sobrecarregar o sistema com solicitações, levando a um ataque de negação de serviço (DoS). Embora não tenha impacto direto na confidencialidade ou na integridade, o dano potencial à disponibilidade torna o Médio de impacto geral.
  
1.6 Improper Input Validation Impacto: Medio CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N </p>
- Sem a validação de entrada adequada, um invasor pode injetar dados maliciosos no aplicativo, levando a acesso ou modificação de dados não autorizados. No entanto, isso não afeta diretamente a confidencialidade ou a disponibilidade, portanto, o impacto geral é o Medio.

Foram reportadas 6 falhas sendo: 3-ALTA | 3-MEDIO

# Metodologia

- Foi utilizado o Zaproxy para scanear e o Burp Suite para realizar inputs no proxy e identificar falhas. Ferramentas do Kali Linux foram empregadas para scan de API, endereços de rede, mapeamento de portas e parâmetros de SQL, incluindo: Nuclei, Nikto, Nmap, Dirb, Gobuster e Sqlmap.
- Na análise de criptografia no acesso HTTP, o tcpdump foi utilizado para capturar o tráfego de rede e, com o Wireshark, foi realizada uma análise detalhada dos parâmetros da camada HTTP.
- O CVSS foi utilizado para qualificar o impacto e metodologia OWASP Top 10.*
