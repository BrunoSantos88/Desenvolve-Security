# Pentest no Juice Shop

<h3>
    <table>
        <tr>
            <th>Controle de versão</th>
                <th> Escopo </th>
                <th> Datas</th>
        </tr>
        <tr>
            <td>Versão:1</td>
            <td>http://juice.hostdevtest.shop</td>
            <th> 15/07</th>
       <tr>
           <tr>
            <td>Versão:2</td>
            <td>http://juice.hostdevtest.shop</td>
            <th> 09/08</th>
       <tr>
            <td>Juice Shop</td>
            <td>Bruno Santos Turma 4 </td>
              <td>   SI </td>
            </td>
            <tr>
    </table>
</h3> 
</p>

<h3>
    <table>
        <tr>
            <th>Análise das Vulnerabilidades</th>
                <th> Impacto </th>
                <th>  CVSS  </th>
        </tr>
        <tr>
            <td>SQL INJECTION </td>
            <td> ALTO </td>
            <td> 3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N </td>
       <tr>
             <td>Broken Authentication</td>
            <td> ALTO </td>
            <td> 3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N </td>
       <tr>
       <tr>
            <td>Cryptographic Failures</td>
            <td> ALTO </td>
            <td> 3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N </td>
   <tr>
       <tr>
            <td>Path Traversal </td>
            <td>MEDIO</td>
            <td> 3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N </td>
   <tr>
       <tr>
             <td>Lack of Resources & Rate Limiting</td>
            <td>MEDIO</td>
            <td> 3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N </td>
   <tr>
       <tr>
             <td>Improper Input Validation</td>
            <td>NEDIO </td>
            <td> 3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N  </td>
            <tr>
            <tr>
            <th>Foram reportadas</th>
                <th> 6 Falhas </th>
                <th> 3-ALTA | 3-MEDIO </th> 
        </tr>
    </table>
</h3> 
</p>

# Análise das Vulnerabilidades
1.1 SQL INJECTION
- Explicação: SQL Injection permite que um invasor manipule consultas SQL, levando ao acesso a dados não autorizados (Confidencialidade: Alta) e modificação ou destruição de dados (Integridade: Alto). Embora não tenha impacto direto na disponibilidade, pode levar a violações de dados, razão pela qual o impacto é classificado como Alto.

  
1.2 Broken Authentication 
- Credenciais comprometidas podem levar ao acesso não autorizado a contas de usuário e dados confidenciais (Confidentiality: High). Além disso, os invasores podem se passar por usuários legítimos para executar ações em seu nome, levando a modificação ou destruição de dados (Integridade: Alta). Embora o impacto da disponibilidade seja baixo, o dano potencial à confidencialidade e integridade torna o impacto geral Alto.
  
1.3 Cryptographic Failures 
- Falhas criptográficas podem resultar no comprometimento de dados confidenciais (Confidencialidade: Alta) e modificação ou destruição de dados não autorizados (Integridade: Alta). Embora o impacto da disponibilidade seja Nenhum, o dano potencial à confidencialidade e integridade torna o impacto geral Alto. 

1.4 Path Traversal 
- O Path Traversal permite que um invasor acesse ou modifique arquivos fora do diretório pretendido, levando a acesso ou modificação de dados não autorizados. No entanto, isso não afeta diretamente a confidencialidade ou a disponibilidade, portanto, o impacto geral é o Medio
  
1.5 Lack of Resources & Rate Limiting 
- Sem o gerenciamento adequado de recursos e a limitação de taxa, um invasor pode sobrecarregar o sistema com solicitações, levando a um ataque de negação de serviço (DoS). Embora não tenha impacto direto na confidencialidade ou na integridade, o dano potencial à disponibilidade torna o Médio de impacto geral.
  
1.6 Improper Input Validation 
- Sem a validação de entrada adequada, um invasor pode injetar dados maliciosos no aplicativo, levando a acesso ou modificação de dados não autorizados. No entanto, isso não afeta diretamente a confidencialidade ou a disponibilidade, portanto, o impacto geral é o Medio.

# Metodologia

- Foi utilizado o Zaproxy para scanear e o Burp Suite para realizar inputs no proxy e identificar falhas. Ferramentas do Kali Linux foram empregadas para scan de API, endereços de rede, mapeamento de portas e parâmetros de SQL, incluindo: Nuclei, Nikto, Nmap, Dirb, Gobuster e Sqlmap.
Na análise de criptografia no acesso HTTP, o tcpdump foi utilizado para capturar o tráfego de rede e, com o Wireshark, foi realizada uma análise detalhada dos parâmetros da camada HTTP.
O CVSS foi utilizado para qualificar o impacto e metodologia OWASP Top 10.
